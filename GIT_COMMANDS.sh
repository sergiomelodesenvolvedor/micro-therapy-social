#!/bin/bash
# 🚀 Script para upload inicial no GitHub
# Este arquivo contém os comandos exatos para fazer push do projeto

# =======================================
# 1. PREPARAR LOCALMENTE
# =======================================

cd "C:\Users\Usuario\OneDrive\Desktop\therapy"

# Inicializar git (execute uma vez)
git init

# Configurar autoria
git config user.name "Sergio Melo"
git config user.email "seu-email@example.com"

# =======================================
# 2. PREPARAR PARA PRIMEIRO COMMIT
# =======================================

# Adicionar todos os arquivos
git add .

# Verificar o que será commitado
git status

# Fazer primeiro commit
git commit -m "Initial commit: Sprint 1 setup with tracker, stories, and docs"

# =======================================
# 3. CONECTAR COM GITHUB
# =======================================

# Adicionar remote (seu repositório no GitHub)
git remote add origin https://github.com/sergiomelodesenvolvedor/micro-therapy-social.git

# Verificar que está conectado
git remote -v

# Garantir que a branch padrão é 'main'
git branch -M main

# =======================================
# 4. FAZER PUSH INICIAL
# =======================================

# Fazer push para GitHub
git push -u origin main

# ✅ PRONTO! Seu projeto está no GitHub!
# Acesse: https://github.com/sergiomelodesenvolvedor/micro-therapy-social

# =======================================
# 5. OPERAÇÕES DIÁRIAS (depois)
# =======================================

# Para próximas mudanças:
git add .
git commit -m "feat: descrição da mudança"
git push

# Para ver histórico:
git log --oneline -10

# Para criar branch de feature:
git checkout -b feature/nova-funcionalidade
# ... fazer mudanças ...
git add .
git commit -m "feat: implementar nova funcionalidade"
git push -u origin feature/nova-funcionalidade
# Depois abrir Pull Request no GitHub
