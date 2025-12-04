# 📤 Como Fazer Upload para GitHub

Este arquivo explica como subir o projeto para GitHub passo a passo.

---

## 🔑 Pré-requisitos

1. **Git instalado** - [download](https://git-scm.com)
2. **Conta GitHub** - [criar conta](https://github.com/signup)
3. **Username:** `sergiomelodesenvolvedor`
4. **Email configurado no GitHub**

---

## ✅ Passo 1: Configurar Git Localmente

Abra PowerShell e configure seu Git:

```powershell
git config --global user.name "Sergio Melo"
git config --global user.email "seu-email@example.com"
git config --global user.password "seu-token-github"

# Verificar configuração
git config --global --list
```

### 🔑 Criar Personal Access Token (Recomendado)

1. Vá para https://github.com/settings/tokens
2. Clique em "Generate new token"
3. Escolha "Generate new token (classic)"
4. **Scopes** a selecionar:
   - ✅ `repo` (repositórios privados e públicos)
   - ✅ `workflow` (ações GitHub)
   - ✅ `admin:repo_hook` (webhooks)

5. Copie o token gerado
6. Use como password quando Git pedir

---

## ✅ Passo 2: Criar Repositório no GitHub

1. Vá para https://github.com/new
2. Preencha:
   - **Repository name:** `micro-therapy-social`
   - **Description:** "Plataforma gamificada de micro-intervenções para saúde mental"
   - **Visibility:** Public (ou Private se preferir)
   - **Initialize:** Deixe em branco (não selecione README/gitignore)
3. Clique "Create repository"
4. Você será redirecionado para `https://github.com/sergiomelodesenvolvedor/micro-therapy-social`

---

## ✅ Passo 3: Inicializar Git Localmente

No PowerShell, navegue para a pasta do projeto:

```powershell
# Ir para pasta do projeto
cd "C:\Users\Usuario\OneDrive\Desktop\therapy"

# Verificar arquivos
ls

# Inicializar git (se não existir)
git init
git add .
git commit -m "Initial commit: Sprint 1 setup"
```

---

## ✅ Passo 4: Conectar com GitHub

```powershell
# Adicionar remote do seu repositório
git remote add origin https://github.com/sergiomelodesenvolvedor/micro-therapy-social.git

# Verificar conexão
git remote -v
# Deve mostrar:
# origin  https://github.com/sergiomelodesenvolvedor/micro-therapy-social.git (fetch)
# origin  https://github.com/sergiomelodesenvolvedor/micro-therapy-social.git (push)

# Definir branch main (caso use master)
git branch -M main
```

---

## ✅ Passo 5: Fazer First Push

```powershell
# Fazer push para GitHub
git push -u origin main

# Se pedir autenticação:
# Username: sergiomelodesenvolvedor
# Password: [seu token gerado]
```

---

## ✅ Passo 6: Verificar no GitHub

Acesse: https://github.com/sergiomelodesenvolvedor/micro-therapy-social

Você deve ver:
- ✅ Todos os arquivos (README.md, package.json, etc)
- ✅ Commits recentes
- ✅ README renderizado na página inicial

---

## 📝 Operações Diárias com Git

### Adicionar arquivos novos
```powershell
cd "C:\Users\Usuario\OneDrive\Desktop\therapy"

# Adicionar um arquivo
git add frontend/package.json

# Adicionar tudo
git add .

# Verificar o que vai ser commitado
git status
```

### Fazer Commit
```powershell
# Commit com mensagem
git commit -m "feat: adicionar sprint tracker completo"

# Boas mensagens:
git commit -m "fix: corrigir bug no timer"
git commit -m "docs: atualizar README"
git commit -m "refactor: simplificar código do bot"
```

### Fazer Push
```powershell
# Push para GitHub
git push

# Se tiver conflitos
git pull
# Resolver conflitos
git add .
git commit -m "Resolver conflitos de merge"
git push
```

### Ver Histórico
```powershell
# Ver commits recentes
git log --oneline -10

# Ver mudanças
git status

# Ver diferenças
git diff

# Ver detalhes de um commit
git show abc123
```

---

## 🔄 Workflow com Branches

Para trabalhar em features sem afetar `main`:

```powershell
# Criar branch nova
git checkout -b feature/dashboard

# Trabalhar e fazer commits
git add .
git commit -m "feat: adicionar dashboard com métricas"

# Quando pronto, fazer push
git push -u origin feature/dashboard

# No GitHub, abrir Pull Request
# Depois de revisar, fazer Merge

# Voltar para main
git checkout main
git pull
```

---

## ❌ Problemas Comuns

### Erro: "fatal: 'origin' does not appear to be a 'git' repository"
```powershell
# Solução: verificar pasta
pwd

# Deve estar em: C:\Users\Usuario\OneDrive\Desktop\therapy
# Se não, navegar:
cd "C:\Users\Usuario\OneDrive\Desktop\therapy"
```

### Erro: "Authentication failed"
```powershell
# Solução: verificar credenciais
# 1. Gerar novo Personal Access Token no GitHub
# 2. Usar token como password (não senha da conta)
# 3. Se ainda errado, limpar credenciais:
git credential reject https://github.com
# Depois tentar novamente
```

### Erro: "Please tell me who you are"
```powershell
# Solução: configurar Git
git config user.name "Sergio Melo"
git config user.email "seu-email@example.com"
```

### Erro: "src refspec main does not match any"
```powershell
# Solução: verificar branch atual
git branch

# Se estiver em 'master', renomear:
git branch -M main
```

---

## 🚀 Próximos Passos

Após fazer push:

1. **Proteger `main` branch:**
   - Settings → Branches → Add rule
   - Require pull request reviews

2. **Adicionar Actions (CI/CD):**
   - Actions → New workflow
   - Escolher Node.js template

3. **Configurar Secrets:**
   - Settings → Secrets → New repository secret
   - Adicionar SUPABASE_URL, API_KEYS, etc

4. **Deploy automático:**
   - Conectar com Railway/Vercel
   - Fazer deploy a cada push em `main`

---

## 📊 Estrutura Esperada no GitHub

```
micro-therapy-social/
├── .gitignore ✅
├── .env.example ✅
├── LICENSE ✅
├── README.md ✅
├── CONTRIBUTING.md ✅
├── package.json ✅
├── sprint_tracker.html ✅
├── user_stories.md ✅
├── prototipo_notion_guia.md ✅
├── plano_detalhado_micro_therapy_social.md ✅
└── sprint_tracker.html ✅
```

---

## 💡 Dicas Úteis

1. **Commit frequentemente:** Muitas commits pequenas > poucos commits grandes
2. **Boas mensagens:** Descreva O QUÊ e POR QUE, não COMO
3. **Revise antes de push:** `git diff` mostra o que vai subir
4. **Use .gitignore:** Não commitar `.env`, `node_modules`, etc
5. **Pull antes de push:** Sincronize mudanças antes de fazer push

---

## 📞 Suporte

Se tiver dúvidas:
- [GitHub Docs](https://docs.github.com)
- [Git Cheatsheet](https://git-scm.com/docs)
- Stack Overflow: tag `github` + `git`

---

**Versão:** 1.0  
**Última atualização:** 4 Dec 2025
