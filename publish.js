const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { project } = require('./package.json');

const {
    subproject,
    internalName
} = project;

const PATH_BUILD_DEBUG = `\\\\tappqa\\www\\tappqa.tobit.com\\${internalName}${subproject
    ? `\\${subproject}`
    : ''}\\Web.Debug`;

if (process.argv[2] === '--debug') {
    exec(`XCOPY /S /I /E /Y build ${PATH_BUILD_DEBUG}`)
        .then(() => console.log(`Debug build successful: ${PATH_BUILD_DEBUG}`));
}
