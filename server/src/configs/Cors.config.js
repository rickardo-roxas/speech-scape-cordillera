const corsOptions = {
    origin: process.loadEnvFile.CORS_ORIGIN,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
}

export default corsOptions;