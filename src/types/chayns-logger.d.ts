declare module 'chayns-logger' {
    import { ErrorObject, LogObject } from 'chayns-helper/dist/utils/requireChaynsLogger';

    export interface LoggerPayload {
        message: string,
        level: string,
        data: {
            _meta: {
                subproject: string,
                projectVersion: string,
                frontendSessionUid: string,
                user?: {
                    userId: number;
                    personId: string;
                    firstName: string;
                    lastName: string;
                },
                device?: {
                    imei: string
                },
                site: string,
                environment: {
                    browser: string,
                    language: string,
                    env: string,
                    online: string
                }
            },
            [key: string]: unknown
        },
        section: string,
        ex?: Partial<{
            message: string,
            [key: string]: unknown
        }>
    }

    export type LoggerConfig = {
        applicationUid: string,
        sessionUid?: string,
        overrideOnError?: boolean,
        overrideConsoleError?: boolean,
        throttleTime?: number,
        middleware?: (payload: LoggerPayload) => boolean | void,
        bufferSize?: number,
        useDevServer?: boolean,
        defaults?: {
            [key: string]: unknown
        },
        locationId?: number,
        personId?: string,
        version?: string
    };

    export function init(config: LoggerConfig): void;
    export function debug(config: LogObject, applicationUid?: string): void;
    export function info(config: LogObject, applicationUid?: string): void;
    export function warning(config: ErrorObject, err?: Error, applicationUid?: string): void;
    export function error(config: ErrorObject, err?: Error, applicationUid?: string): void;
    export function critical(config: ErrorObject, err?: Error, applicationUid?: string): void;
}
declare module 'chayns-logger/lib/core/generate-uid' {
    export default function generateUUID(): string;
}
