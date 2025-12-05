# Micro Therapy Social - Estrutura de Pastas

## 📁 Estrutura Organizada

```
therapy/
├── marketing/              # 🎯 Landing Page (Marketing)
│   ├── landing/
│   │   └── index.html     # Landing page de divulgação
│   └── server.js          # Servidor dev para a landing (porta 3000)
│
├── app/                    # 🧠 App Real (Frontend)
│   ├── src/
│   │   ├── login.html     # Página de login (magic link)
│   │   └── dashboard.html # Dashboard principal do app
│   └── styles/            # CSS compartilhado (TODO)
│
├── backend/                # ⚙️ Backend (API)
│   ├── src/
│   │   ├── index.js
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── services/
│   │   └── database/
│   └── package.json
│
├── docs/                   # 📚 Documentação
│   ├── ARCHITECTURE.md
│   ├── CONTRIBUTING.md
│   ├── SECURITY.md
│   ├── CHANGELOG.md
│   ├── SPRINT_1_REVIEW.md
│   └── ...
│
├── .github/                # GitHub Actions
│   └── workflows/
│
└── root files (config, README, etc)
```

## 🚀 Como Rodar

### Landing Page (Marketing)
```bash
cd marketing
node server.js
# Abre em http://localhost:3000
```

### App Real (Frontend)
```bash
# Será desenvolvido no Sprint 2
# Por enquanto, copie os arquivos em app/src/ para seu servidor
```

### Backend
```bash
cd backend
npm run dev  # ou npm start
# Abre em http://localhost:3001
```

## 📂 O que cada pasta faz

| Pasta | Propósito | Status |
|-------|-----------|--------|
| **marketing** | Landing page para divulgar o app | ✅ Sprint 1 |
| **app** | Frontend real do app (login, dashboard, etc) | ⏳ Sprint 2 |
| **backend** | API Node.js + BD | ✅ Sprint 1 |
| **docs** | Toda documentação do projeto | ✅ Sprint 1 |
| **.github** | CI/CD, workflows | ✅ Sprint 1 |

## 🎯 Sprint 2 - O que falta

- [ ] Criar app/server.js (dev server para o app)
- [ ] Implementar autenticação (magic link)
- [ ] Criar endpoints CRUD
- [ ] Integrar frontend com backend
- [ ] Sistema de pontos e badges

---

**Criado em:** 04/12/2025  
**Estrutura Final:** ✅ Organizado e pronto!
