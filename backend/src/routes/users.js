import express from 'express';

const router = express.Router();

// GET /api/users - Listar usuários (placeholder)
router.get('/', (req, res) => {
  res.json({
    message: 'Endpoint de usuários',
    status: 'Em desenvolvimento',
    data: [],
  });
});

// GET /api/users/:id - Obter usuário específico
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: `Buscando usuário ${id}`,
    status: 'Em desenvolvimento',
    data: null,
  });
});

// POST /api/users - Criar usuário
router.post('/', (req, res) => {
  res.status(201).json({
    message: 'Criar usuário',
    status: 'Em desenvolvimento',
    data: req.body,
  });
});

export default router;
