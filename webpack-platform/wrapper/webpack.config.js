import ModuleFederationPlugin from "webpack/lib/container/ModuleFederationPlugin.js";
import HtmlWebpackPlugin from "html-webpack-plugin";
import apiMap from "./api/index.js";
import mockApiMiddleware from "./api/mockApiMiddleware.js";
import ExternalTemplateRemotesPlugin from "external-remotes-plugin";

export default function webpackConfig(env) {

    return {
        entry: "./src/index.js",
        devtool: "cheap-module-source-map",
        mode: env.mode,
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        experiments: {
            css: true
        },
        plugins: [
            new HtmlWebpackPlugin({ title: "Account Shell", scriptLoading: "module", template: "index.html" }),
            new ModuleFederationPlugin({
                name: "wrapper",
                remotes: {
                    onboarding: "onboarding@[onboardingUrl]/remoteEntry.js",
                    cards: "cards@[cardsUrl]/remoteEntry.js"
                },
                shared: { react: { singleton: true, requiredVersion: "^18" }, "react-dom": { singleton: true, requiredVersion: "^18" } },
            }),
            new ExternalTemplateRemotesPlugin(),
        ],
        module: {
            rules: [
                {
                    test: /\.m?jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            targets: { esmodules: true },
                            presets: ["@babel/preset-env", ["@babel/preset-react", { runtime: "automatic" }]],
                            plugins: ["@babel/plugin-transform-runtime"]

                        }
                    }
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                }
            ]
        },
        devServer: {
            port: 4500,
            client: { progress: true },
            proxy: {
                '/cards/api': 'http://localhost:4501',
                '/onboarding/api': 'http://localhost:4502'
            },
            setupMiddlewares: (middlewares, devServer) => {
                middlewares.unshift({ name: 'mock-api', path: '/api', middleware: mockApiMiddleware(apiMap) });
                return middlewares;
            }
        }
    };
}