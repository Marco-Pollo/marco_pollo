import { isNullOrWhiteSpace } from 'chayns-components/lib/utils/is';
import { LoggerPayload } from 'chayns-logger';
import pkg from '../../../../package.json';
import loggerIgnore from './loggerIgnore';
import { Package } from '../types';

const { project } = pkg as Package;
const { subproject, strictLogging } = project;

/**
 *  This is the setup for writing clean logger middlewares.
 *  Each middleware receives the next middleware function and returns a function that receives a "draft", the current
 *  log payload. This draft can be modified and then passed to the next function.
 *  This way middlewares don't directly interact with each other, but they can alter the payload before and after all
 *  following middlewares are called. Not calling "return next(draft)" will prevent all further middlewares from being
 *  called.
 *  Your middleware MUST mutate the draft and MUST NOT replace it but can return "false" to prevent a log completely.
 *  A custom middleware will have to look like this:
 *
 *  const customMiddleware = (next) => (draft) => {
 *      // your middleware
 *      return next(draft);
 *  }
 */

export interface RequestLogPayload extends LoggerPayload {
    data: {
        _meta: LoggerPayload['data']['_meta'],
        request?: {
            body?: Record<string, unknown> | string,
            headers?: Record<string, string | undefined>
        },
        response?: {
            body?: Record<string, unknown> | string
        },
        input?: Record<string, unknown>,
        resolveValue?: unknown
    }
}

export type MiddlewareFunction = (draft: LoggerPayload) => MiddlewareFunction | boolean | undefined;

export type LoggerMiddleware = (next: MiddlewareFunction) => MiddlewareFunction;

/**
 * @param middlewares
 * @return {function(*=): *}
 */
export default function configureLoggerMiddleware(middlewares: Array<LoggerMiddleware>) {
    return (payload: LoggerPayload): boolean => {
        const current = { index: 0 };
        const next: MiddlewareFunction = (pl: LoggerPayload) => {
            const middlewareEntry = middlewares[current.index];
            current.index += 1;
            if (middlewareEntry && chayns.utils.isFunction(middlewareEntry)) {
                const middleware = middlewareEntry(next);
                return middleware(pl);
            }
            return undefined;
        };
        return next(payload) as boolean;
    };
}

export const loggerIgnoreMiddleware: LoggerMiddleware = (next) => (draft) => {
    const { message, ex } = draft;
    // reduce log level of error logs in loggerIgnore to warning
    if (
        (message && loggerIgnore.some((e) => message.includes(e)))
        || (ex && ex.message && loggerIgnore.some((e) => ex?.message?.includes(e)))
    ) {
        if (['critical', 'error'].includes(draft.level.toLowerCase())) {
            draft.level = 'Warning';
        }
    }
    return next(draft);
};

export const fillEmptyErrorMessageMiddleware: LoggerMiddleware = (next) => (draft) => {
    const { message, ex } = draft;
    // if no ex.message on error log, make message the error message
    if (draft && ['critical', 'error'].includes(draft.level.toLowerCase()) && !ex?.message && message) {
        if (!draft.ex) draft.ex = {};
        draft.ex.message = message;
    }
    return next(draft);
};

export const addSubprojectNameMiddleware: LoggerMiddleware = (next) => (draft) => {
    const { message, ex } = draft;
    // add subproject name to message (e.g. "Wallet|TypeError: ... ")
    if (!isNullOrWhiteSpace(subproject)) {
        const subprj = subproject as string;
        if (!message.includes(subprj)) {
            draft.message = `${subprj}|${message}`;
        }
        if (ex?.message && !ex.message.includes(subprj)) {
            // @ts-expect-error draft.ex must be defined due to condition above
            draft.ex.message = `${subprj}|${ex.message}`;
        }
    }
    return next(draft);
};

export const getLiveOnlineStatusMiddleware: LoggerMiddleware = (next) => (draft) => {
    // eslint-disable-next-line no-underscore-dangle
    if (draft?.data?._meta?.environment?.online) {
        // eslint-disable-next-line no-underscore-dangle,max-len
        draft.data._meta.environment.online = `${navigator?.onLine?.toString() ?? 'unknown'}, ${
            // @ts-expect-error connection only exists on navigator for certain OS
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            navigator?.connection?.effectiveType as string | undefined ?? 'unknown'}`;
    }
    return next(draft);
};

export const filterRequestLogsMiddleware: LoggerMiddleware = (next) => (draft: RequestLogPayload) => {
    if (draft.section === '[chayns-helper]httpRequest.js') {
        // filter request logs here if strict logging is enabled
        if (draft.data && strictLogging) {
            draft.data.input = undefined; // disable logging the input parameters of request.fetch()
            if (draft.data.request) {
                draft.data.request.body = undefined; // disable logging the request body
                if (draft.data.request.headers) {
                    /* disable logging certain headers. By default the Authorization header is only logged if it is a
                     JWT token and even then just the payload will be logged */
                    draft.data.request.headers.Authorization = undefined;
                }
            }
            if (draft.data.response) {
                draft.data.response.body = undefined; // disable logging the response body
            }
            if (draft.data.resolveValue) {
                draft.data.resolveValue = undefined; // disable logging the request resolve value
            }
        }
    }
    return next(draft);
};
