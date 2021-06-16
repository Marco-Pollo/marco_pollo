const fs = require('fs');
const { project } = require('./package.json');
const { plugins: additionalBabelPlugins } = require('./babel.config');

const {
    externalName,
    subproject
} = project;

const toolkitConfig = {
    development: {
        host: '0.0.0.0',
        port: 8080,
    },
    output: {
        singleBundle: false,
        filename: '[package].[contenthash].js'
    },
    webpack(config, { webpack, dev }) {
        const htmlWebpackPlugin = config.plugins.find((p) => p && p.userOptions && p.userOptions.templateContent);
        if (htmlWebpackPlugin) {
            // use index.dev.html
            if (fs.existsSync('./src/index.dev.html')
                && (dev || process.env.NODE_ENV === 'development' || process.env.BUILD_ENV !== 'production')
            ) {
                htmlWebpackPlugin.userOptions.templateContent = fs.readFileSync('src/index.dev.html').toString();
            }
            // set externalName as html title. As an iframe that title will be visible e.g. during mobile media playback
            htmlWebpackPlugin.userOptions.templateContent = htmlWebpackPlugin.userOptions.templateContent.replace(
                '<%= ##PROJECTNAME## %>',
                `chayns | ${externalName}${subproject ? ` ${subproject}` : ''}`
            );
        }

        config.plugins.unshift(new webpack.DefinePlugin({
            'process.env.BUILD_DATE': new Date().getTime()
        }));

        // add additional babel plugins
        const babelRule = config.module.rules.find(
            (rule) => rule.use.loader && rule.use.loader.includes('babel-loader')
        );
        if (!babelRule) return config;
        const babelOptions = babelRule.use.options;
        if (Array.isArray(babelOptions.plugins)) {
            babelOptions.plugins.push(...additionalBabelPlugins);
        } else {
            babelOptions.plugins = [...additionalBabelPlugins];
        }

        // always return config
        return config;
    }
};

module.exports = toolkitConfig;
