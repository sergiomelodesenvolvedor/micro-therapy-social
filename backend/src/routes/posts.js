import express from 'express';

const router = express.Router();

// GET /api/posts - Listar posts (placeholder)
router.get('/', (req, res) => {
    res.json({
        message: 'Endpoint de posts',
        status: 'Em desenvolvimento',
        data: []
    });
});

// GET /api/posts/:id - Obter post específico
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: `Buscando post ${id}`,
        status: 'Em desenvolvimento',
        data: null
    });
});

// POST /api/posts - Criar post
router.post('/', (req, res) => {
    res.status(201).json({
        message: 'Criar post',
        status: 'Em desenvolvimento',
        data: req.body
    });
});

export default router;
