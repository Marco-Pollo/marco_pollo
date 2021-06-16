import pkg from '../../package.json';
import { IS_DEVELOPMENT, IS_PRODUCTION } from '../constants/environment';

const { project } = pkg;
const { internalName } = project;

const URL_DEV = 'https://localhost:5001';
const URL_QA = `https://tappqa.tobit.com/${internalName}/Web.API/v1.0`;
const URL_PRODUCTION = `https://tapp.tobit.com/${internalName}/Web.API/v1.0`;

// use dev backend as default. Use QA on mobile, but always use dev if w-xx-[surface|laptop] url is used.
// Override with parameter ?backend=[dev|qa]
const shouldUseDevBackend = chayns.env.parameters.backend !== 'qa'
    && (chayns.env.parameters.backend === 'dev'
        || /^https?:\/\/w-[a-z]{2}-(?:(?:surface)|(?:laptop))\.tobit\.ag/i.test(URL_DEV)
        || !chayns.env.isMobile);

// eslint-disable-next-line no-nested-ternary
export const ROOT_URL = IS_PRODUCTION
    ? URL_PRODUCTION
    : (IS_DEVELOPMENT || chayns.env.parameters.backend === 'dev') && shouldUseDevBackend
        ? URL_DEV
        : URL_QA;

// automatic variable replacement with chayns-helper request.fetch
export const BASE_URL = `${ROOT_URL}/##siteId##/`;
