import { initTextStrings, request, ResponseType } from 'chayns-helper';
import pkg from '../../../package.json';
import { BASE_URL } from '../../api/url';
import { IS_DEVELOPMENT, IS_PRODUCTION } from '../../constants/environment';
import { Package } from './types';

const { project } = pkg as Package;

const { textStringPrefix, textLibName } = project;

export default async function chaynsHelperInit(): Promise<void> {
    // loads text string library and initializes text string helpers
    await initTextStrings({
        prefix: textStringPrefix,
        libName: textLibName,
        autoCreation: !IS_PRODUCTION && !IS_DEVELOPMENT
    });
    // set default config for request helper
    request.defaults(
        // base url
        BASE_URL,
        // Default fetch config. Already uses chaynsAuth if logged in and GET method by default
        {
            credentials: 'omit'
        },
        // helper options
        {
            throwErrors: true,
            responseType: ResponseType.JsonWithStatus,
            statusHandlers: {
                204: (response) => ({ status: response.status, data: null }),
            },
            sideEffects: {
                // check for connection issues on failed to fetch
                1: () => {
                    if (navigator?.onLine === false) {
                        void chayns.dialog.alert(
                            '', 'Verbindung fehlgeschlagen. Bitte überpüfe deine Internetverbindung.'
                        );
                    }
                },
                // login if not yet logged in on 401
                401: () => {
                    if (!chayns.env.user.isAuthenticated) {
                        void chayns.login();
                    }
                }
            }
        }
    );
}
