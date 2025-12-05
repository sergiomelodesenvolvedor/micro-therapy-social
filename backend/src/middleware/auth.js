import jwt from 'jsonwebtoken';

/**
 * Middleware para verificar JWT
 */
export async function verifyJWT(req, res, next) {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ error: 'Token não fornecido' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido ou expirado', details: err.message });
  }
}

/**
 * Middleware para verificar se é usuário autenticado (opcional)
 */
export async function optionalAuth(req, res, next) {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
    }
  } catch (err) {
    // Ignorar erro, usuário não autenticado
  }
  next();
}
