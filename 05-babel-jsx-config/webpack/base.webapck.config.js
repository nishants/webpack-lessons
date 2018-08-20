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
            }
        ]
    }
}