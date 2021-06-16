const buildEnv = (process.env.BUILD_ENV || 'development').toLowerCase();

export const IS_DEVELOPMENT = buildEnv === 'development';
export const IS_QA = buildEnv === 'qa';
export const IS_STAGING = buildEnv === 'staging';
export const IS_PRODUCTION = buildEnv === 'production';
