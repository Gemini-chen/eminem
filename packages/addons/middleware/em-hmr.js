module.exports = (opts) => (context) => {
    context
        .plugin('HotModuleReplacementPlugin')
        .use(require.resolve('webpack/lib/HotModuleReplacementPlugin'))
        .end();
    return context;
};
