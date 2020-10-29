module.exports = {
    publicPath: '/',
    pages: {
        index: {
            entry: 'src/main.ts',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Сайт компании ЧистоПросто',
            chunks: ['chunk-vendors', 'chunk-common', 'index'],
        }
    },
}
