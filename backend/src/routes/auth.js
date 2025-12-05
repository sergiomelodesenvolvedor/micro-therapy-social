import express from 'express';
import { sendMagicLink, verifyMagicLink, logout } from '../services/authService.js';
import { verifyJWT } from '../middleware/auth.js';

const router = express.Router();

/**
 * POST /api/auth/magic-link
 * Enviar magic link para o email
 */
router.post('/magic-link', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email é obrigatório' });
    }

    const result = await sendMagicLink(email);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/auth/verify
 * Validar magic link e retornar JWT
 */
router.post('/verify', async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ error: 'Token é obrigatório' });
    }

    const result = await verifyMagicLink(token);

    if (!result.success) {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
});

/**
 * POST /api/auth/logout
 * Logout do usuário (delete JWT no frontend)
 */
router.post('/logout', verifyJWT, async (req, res) => {
  try {
    const result = await logout();
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/auth/me
 * Retornar dados do usuário autenticado
 */
router.get('/me', verifyJWT, async (req, res) => {
  try {
    return res.status(200).json({ user: req.user });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

export default router;
