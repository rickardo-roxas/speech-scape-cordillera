const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
};

export default corsOptions;