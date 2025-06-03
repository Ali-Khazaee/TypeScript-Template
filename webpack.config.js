import PluginHtmlWebpack from 'html-webpack-plugin';

/** @type { import('webpack').Configuration } */
export default
{
    entry: `${ import.meta.dirname }/Source/App.tsx`,
    devServer:
    {
        hot: true,
        open: true,
        historyApiFallback: true,
        static: `${ import.meta.dirname }/Source/Static/`
    },
    performance:
    {
        maxAssetSize: 512_000,
        maxEntrypointSize: 512_000
    },
    output:
    {
        publicPath: '/',
        filename: 'Bundle.js',
        path: `${ import.meta.dirname }/Build`
    },
    plugins:
    [
        new PluginHtmlWebpack({ template: 'Source/Static/index.html', favicon: 'Source/Static/favicon.ico' })
    ],
    module:
    {
        rules:
        [
            {
                test: /\.(ts|tsx)$/i,
                use:
                {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.png$/i,
                type: 'asset/resource'
            },
            {
                test: /\.css$/i,
                use: [ 'style-loader', 'css-loader', 'postcss-loader' ]
            }
        ]
    },
    resolve:
    {
        extensions: [ '.js', '.jsx', '.ts', '.tsx', '.css', '.json', '.png', '.jpg' ]
    },
    watchOptions:
    {
        ignored: /node_modules/
    }
};
