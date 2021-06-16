import logger from 'chayns-logger';
import generateUUID from 'chayns-logger/lib/core/generate-uid';
import { TextString } from 'chayns-components';
import pkg from '../../../../package.json';
import { IS_PRODUCTION } from '../../../constants/environment';
import configureLoggerMiddleware, {
    addSubprojectNameMiddleware,
    fillEmptyErrorMessageMiddleware,
    filterRequestLogsMiddleware,
    getLiveOnlineStatusMiddleware,
    loggerIgnoreMiddleware
} from './loggerMiddleware';

const { project, version } = pkg;

const { subproject, loggerGuid, strictLogging } = project;

export default function chaynsLoggerInit(): void {
    const middleware = configureLoggerMiddleware([
        /** Configure a custom middleware here using the template code below to modify the log payload ("draft").
         *  Middlewares are executed in the order they appear here. */
        // (next) => (draft) => {
        //     const { message, level } = draft;
        //
        //     return next(draft);
        // },

        // reduce the log level to warning for error logs with messages or error message included in ./loggerIgnore.js
        loggerIgnoreMiddleware,
        // if a log with level 'error' or 'critical' has no ex.message, use the message as ex.message
        fillEmptyErrorMessageMiddleware,
        // if a subproject is set in package.json, use its name as prefix for all messages and error messages
        addSubprojectNameMiddleware,
        // replace the online status in the initialization with the current network status for each log
        getLiveOnlineStatusMiddleware,
        // filter your request logs to remove sensitive data. Customize in loggerMiddleware.js
        filterRequestLogsMiddleware
    ]);

    const environment = [];
    if (chayns.env) {
        if (chayns.env.isMobile) environment.push('mobile');
        if (chayns.env.isAndroid) environment.push('android');
        if (chayns.env.isIOS) environment.push('iOS');
        if (chayns.env.isMyChaynsApp) environment.push('myChaynsApp');
        if (chayns.env.isApp) environment.push('app');
        if (chayns.env.isChaynsWeb) environment.push('chaynsWeb');
        if (chayns.env.isDesktop) environment.push('desktop');
        if (chayns.env.isBrowser) environment.push('browser');
        if (chayns.env.isChaynsnetRuntime) environment.push('runtime');
        if (chayns.env.isInFrame) environment.push('iframe');
        if (chayns.env.isTablet) environment.push('tablet');
        if (chayns.env.isAndroid && chayns.env.isApp && chayns.env.isDesktop && chayns.env.isTablet) {
            environment.push('lytfass');
        }
    }

    const date = new Date(process.env.BUILD_DATE as string);
    const defaults = {
        _meta: {
            subproject,
            // eslint-disable-next-line max-len
            projectVersion: `${version} (${date.getUTCDate()}.${date.getUTCMonth()}.${date.getUTCFullYear()}, ${date.getUTCHours()}:${date.getUTCMinutes()} UTC)`,
            frontendSessionUid: generateUUID(),
            user: !strictLogging ? {
                userId: chayns.env.user.id,
                personId: chayns.env.user.personId,
                firstName: chayns.env.user.firstName,
                lastName: chayns.env.user.lastName,
            } : undefined,
            ...(chayns.env.device.imei
                ? {
                    device: {
                        imei: chayns.env.device.imei,
                    },
                }
                : {}),
            // eslint-disable-next-line max-len
            site: `siteId: ${chayns.env.site.id}, locationId: ${chayns.env.site.locationId}, tappId: ${chayns.env.site.tapp.id}`,
            environment: {
                browser: `${chayns.env.browser?.name} version ${chayns.env.browser?.version}`,
                // eslint-disable-next-line max-len
                language: `browser: ${navigator.language}, translang: ${chayns.env.parameters.translang}, textstring: ${TextString.language}`,
                env: environment.join(', '),
                online: `${navigator?.onLine?.toString() ?? 'unknown'}, connection: ${
                    // @ts-expect-error connection only exists on navigator for certain OS
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    navigator?.connection?.effectiveType as string | undefined ?? 'unknown'}`,
            },
        },
    };

    logger.init({
        applicationUid: loggerGuid,
        useDevServer: !IS_PRODUCTION,
        overrideOnError: true,
        throttleTime: 1000,
        version,
        defaults,
        middleware,
    });
}
