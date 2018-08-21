const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevEnv = process.env.NODE_ENV === "development";

module.exports  = {
    mode: isDevEnv ? "development" : "production",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ]
}