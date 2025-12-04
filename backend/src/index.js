import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

// Importar rotas
import healthRoutes from './routes/health.js';
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';

// Configurar variáveis de ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares de segurança e logging
app.use(helmet());
app.use(morgan('dev'));

// CORS
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
}));

// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/api/health', healthRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Rota raiz
app.get('/', (req, res) => {
    res.json({
        message: '🧠 Micro Therapy Social API',
        version: '0.1.0',
        status: 'running',
        endpoints: {
            health: '/api/health',
            users: '/api/users',
            posts: '/api/posts'
        }
    });
});

// Tratamento de erros 404
app.use((req, res) => {
    res.status(404).json({
        error: 'Rota não encontrada',
        path: req.path
    });
});

// Tratamento global de erros
app.use((err, req, res, next) => {
    console.error('Erro:', err);
    res.status(err.status || 500).json({
        error: err.message || 'Erro interno do servidor',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`📝 Ambiente: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🌐 Frontend permitido: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
});

export default app;
