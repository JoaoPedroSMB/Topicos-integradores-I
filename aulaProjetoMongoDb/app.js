const express = require('express');

export async function createApp(params) {
    
    await connectDB();
    const app = express();
    app.use(express.json());
    app.use('/api/produtos',produtoRoutes);

    app.use((err,req,res,next) => {
        console.error(err);
        res.status(400).json({erro: err.message});
    });

    return app;
}