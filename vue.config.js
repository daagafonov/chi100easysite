module.exports = {
    publicPath: '/',
    productionSourceMap: process.env.NODE_ENV !== 'production',
    css: {
        extract: false,
    },
    integrity: true,
    pages: {
        index: {
            entry: 'src/main.ts',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Чисто Просто',
            chunks: ['chunk-vendors', 'chunk-common', 'index'],
        },
        bot: {
            entry: 'src/main.ts',
            minify: false,
            template: 'public/index.html',
            filename: 'bot/index.html',
            title: 'Чисто Просто Бот',
            chunks: ['chunk-vendors', 'chunk-common', 'bot'],
        }
    },

    chainWebpack: config => (config) => {
        config.plugins.delete('prefetch');
        config.plugins.delete('named-chunks');
    },
    pwa: {
        themeColor: '#4dba87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: '4dba87',
        workboxOptions: {
            // exclude: [
            //     /^.*static\/.*/,
            //     /^.*_mocks\/.*/,
            //     /^.*\.css\.map/,
            // ],
        },
    },
}
