const isDevEnv = process.env.NODE_ENV === "development";

module.exports  = {
    mode: isDevEnv ? "development" : "production",
    module: {
        rules: [

        ]
    }
}