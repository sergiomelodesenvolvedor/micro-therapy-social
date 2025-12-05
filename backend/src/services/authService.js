// src/services/authService.js
import { supabase } from '../database/supabase.js';
import jwt from 'jsonwebtoken';
import { sendMagicLinkEmail } from './emailService.js';
import crypto from 'crypto';

const JWT_SECRET = process.env.JWT_SECRET || 'seu-secret-super-seguro-aqui';
const TOKEN_EXPIRY = 10 * 60 * 1000; // 10 minutos

/**
 * Solicitar magic link (alias para requestMagicLink)
 */
export async function sendMagicLink(email, baseUrl = 'http://localhost:3000') {
  return requestMagicLink(email, baseUrl);
}

/**
 * Solicitar magic link
 */
export async function requestMagicLink(email, baseUrl = 'http://localhost:3000') {
  try {
    // Gerar token único
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + TOKEN_EXPIRY).toISOString();

    // Salvar no banco
    const { error } = await supabase.from('magic_tokens').insert({
      email,
      token,
      expires_at: expiresAt,
      used: false,
      ativo: true,
    });

    if (error) throw error;

    // Enviar email
    await sendMagicLinkEmail(email, token, baseUrl);

    console.log(`✅ Magic link solicitado para ${email}`);
    return { success: true, message: 'Link enviado para o email' };
  } catch (error) {
    console.error(`❌ Erro ao solicitar magic link: ${error.message}`);
    return { success: false, error: error.message };
  }
}

/**
 * Verificar magic link e criar JWT
 */
export async function verifyMagicLink(token) {
  try {
    // Buscar token no banco
    const { data, error } = await supabase
      .from('magic_tokens')
      .select('*')
      .eq('token', token)
      .single();

    if (error || !data) {
      return { success: false, error: 'Token inválido ou expirado' };
    }

    // Verificar se já foi usado
    if (data.used) {
      return { success: false, error: 'Token já foi utilizado' };
    }

    // Verificar se expirou
    if (new Date(data.expires_at) < new Date()) {
      return { success: false, error: 'Token expirado' };
    }

    // Marcar como usado
    await supabase.from('magic_tokens').update({ used: true }).eq('id', data.id);

    // Criar ou atualizar usuário
    let userRow;
    const { data: userData } = await supabase
      .from('users')
      .select('id, email, username, data_criacao')
      .eq('email', data.email)
      .single();

    if (userData) {
      userRow = userData;
    } else {
      // Criar novo usuário
      const username = data.email.split('@')[0];
      const { data: newUser, error: createError } = await supabase
        .from('users')
        .insert({ email: data.email, username })
        .select('id, email, username, data_criacao')
        .single();

      if (createError) throw createError;
      userRow = newUser;
    }

    // Gerar JWT
    const jwtToken = jwt.sign(
      { sub: userRow.id, email: userRow.email, username: userRow.username },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    console.log(`✅ Magic link verificado para ${data.email}`);
    return {
      success: true,
      accessToken: jwtToken,
      user: {
        sub: userRow.id,
        email: userRow.email,
        username: userRow.username || userRow.email?.split('@')[0],
        data_criacao: userRow.data_criacao || null,
      },
    };
  } catch (error) {
    console.error(`❌ Erro ao verificar magic link: ${error.message}`);
    return { success: false, error: error.message };
  }
}

/**
 * Logout (no frontend, deleta o JWT do localStorage)
 */
export function logout() {
  console.log('👋 Usuário realizou logout');
  return { success: true, message: 'Logout realizado com sucesso' };
}

/**
 * Verificar JWT
 */
export function verifyJWT(token) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return { valid: true, data: decoded };
  } catch (error) {
    return { valid: false, error: error.message };
  }
}