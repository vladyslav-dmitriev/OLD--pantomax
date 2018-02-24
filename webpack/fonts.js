module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.(woff|woff2|eot|ttf)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name]/[name].[ext]'
                    },
                },
            ],
        },
    };
};

