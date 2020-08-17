import express, {Application, Response} from 'express';

const application: Application = express();

const PORT = process.env.PORT || 3000;

application.use('/health', (_, res: Response) => {
    res.json({
        status: 'ok',
        message: 'Server is healthy'
    });
});

application.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});