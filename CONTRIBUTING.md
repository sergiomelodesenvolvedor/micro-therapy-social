# Guia de Contribuição

Obrigado por se interessar em contribuir com o Micro Therapy Social! 🎉

Este documento fornece diretrizes e instruções para contribuir ao projeto.

---

## 📋 Código de Conduta

Todas as contribuições devem seguir nosso código de conduta (baseado em Contributor Covenant):
- Ser respeitoso com todos
- Aceitar crítica construtiva
- Focar no que é melhor para a comunidade
- Exemplificar comportamento de qualidade

---

## 🐛 Reportando Bugs

Se encontrar um bug, abra uma **Issue** com:

### Template de Bug
```markdown
**Descrição:**
O que aconteceu?

**Como reproduzir:**
1. Passo 1
2. Passo 2
3. Erro ocorre

**Esperado:**
O que deveria ter acontecido?

**Ambiente:**
- SO: Windows 10
- Node: 18.0.0
- Browser: Chrome 120

**Screenshots:**
[Se aplicável]
```

---

## 💡 Sugerindo Features

Abra uma **Issue** com tag `enhancement`:

### Template de Feature
```markdown
**Problema:**
Que problema isso resolve?

**Solução Proposta:**
Como você sugere resolver?

**Alternativas:**
Outras soluções consideradas?

**Contexto Adicional:**
Qualquer outra informação importante?
```

---

## 🔧 Configurando Ambiente de Desenvolvimento

### Pré-requisitos
- Node.js >= 18.0.0
- npm >= 9.0.0
- Git

### Setup
```bash
# 1. Fork no GitHub
# https://github.com/sergiomelodesenvolvedor/micro-therapy-social

# 2. Clone seu fork
git clone https://github.com/SEU-USERNAME/micro-therapy-social.git
cd micro-therapy-social

# 3. Adicione upstream
git remote add upstream https://github.com/sergiomelodesenvolvedor/micro-therapy-social.git

# 4. Instale dependências
npm install

# 5. Configure variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com suas credenciais

# 6. Rode o app
npm run dev
```

---

## 📝 Workflow de Contribuição

### 1. Crie uma Branch
```bash
# Atualize main
git checkout main
git pull upstream main

# Crie nova branch
git checkout -b feature/sua-feature-descritiva

# Nomenclatura sugerida:
# feature/nova-feature
# fix/bug-corrigido
# docs/atualizacao-docs
# refactor/melhorias-codigo
```

### 2. Faça Commits Semânticos
```bash
# Bons commits:
git commit -m "feat: adicionar página de perfil"
git commit -m "fix: corrigir bug de login"
git commit -m "docs: atualizar README"
git commit -m "refactor: simplificar lógica de posts"

# Formato: <tipo>: <mensagem>
# Tipos: feat, fix, docs, style, refactor, perf, test, chore
```

### 3. Push e Abra PR
```bash
git push origin feature/sua-feature
```

Depois abra Pull Request no GitHub:

### Template de PR
```markdown
**Relacionado a:** #123 (número da issue)

**Tipo de mudança:**
- [ ] Bug fix
- [ ] Nova feature
- [ ] Documentação
- [ ] Refactoring

**O que muda?**
Descrição clara das mudanças

**Como testar?**
1. Passo 1
2. Passo 2

**Screenshots:**
[Se aplicável]

**Checklist:**
- [ ] Testei localmente
- [ ] Atualizei documentação
- [ ] Sem console errors/warnings
- [ ] Segui código estilo
```

---

## 📐 Padrões de Código

### JavaScript/Node.js
```javascript
// ✅ Bom
async function fetchPosts() {
  const response = await fetch('/api/posts');
  const data = await response.json();
  return data.posts;
}

// ❌ Evitar
fetch('/api/posts')
  .then(r => r.json())
  .then(d => console.log(d));
```

### React
```javascript
// ✅ Bom
function PostCard({ post, onLike }) {
  const [liked, setLiked] = useState(false);

  const handleLike = useCallback(() => {
    setLiked(!liked);
    onLike(post.id);
  }, [liked, onLike, post.id]);

  return <div onClick={handleLike}>{post.content}</div>;
}

// ❌ Evitar
function PostCard(props) {
  return <div onClick={() => props.onLike(props.post.id)}>
    {props.post.content}
  </div>;
}
```

### CSS
```css
/* ✅ Bom */
.post-card {
  display: flex;
  gap: 1rem;
  border-radius: 0.5rem;
  background: var(--color-bg);
}

/* ❌ Evitar */
.postcard{display:flex;margin-right:10px;background:#fff;}
```

---

## 🧪 Testes

Antes de submeter PR:

```bash
# Rodar testes
npm test

# Rodar linter
npm run lint

# Rodar build
npm run build
```

### Escrevendo Testes
```javascript
// backend/tests/posts.test.js
import { describe, it, expect, beforeEach } from 'vitest';
import { createPost } from '../src/services/posts.js';

describe('Posts', () => {
  let db;

  beforeEach(() => {
    // Setup
  });

  it('deve criar um post com sucesso', async () => {
    const post = await createPost({ content: 'Olá' });
    expect(post.id).toBeDefined();
    expect(post.content).toBe('Olá');
  });
});
```

---

## 📚 Estrutura de Pastas

```
backend/
├── src/
│   ├── routes/        # Endpoints da API
│   ├── services/      # Lógica de negócio
│   ├── middleware/    # Auth, validação
│   ├── db/           # Queries, migrations
│   ├── bot/          # Integração com bot
│   └── utils/        # Funções auxiliares
├── tests/            # Testes unitários
├── migrations/       # Migrations do DB
└── package.json

frontend/
├── src/
│   ├── pages/        # Componentes de página
│   ├── components/   # Componentes reutilizáveis
│   ├── hooks/        # Custom React hooks
│   ├── services/     # Chamadas de API
│   ├── store/        # Estado global
│   └── styles/       # CSS global
├── tests/            # Testes
└── package.json
```

---

## 🚀 Processo de Review

1. **Automático:** GitHub Actions roda linter e testes
2. **Manual:** Maintainers revisam código
3. **Iteração:** Você faz mudanças solicitadas
4. **Merge:** PR aprovado e mergeado em main

### O que buscamos
- ✅ Código limpo e bem estruturado
- ✅ Testes cobrindo nova feature
- ✅ Documentação atualizada
- ✅ Sem conflitos com main
- ✅ Commits semânticos
- ✅ Performance considerada

---

## 📖 Documentação

Ao adicionar feature, atualize:
- `README.md` - Para features visíveis ao usuário
- `docs/API.md` - Para novos endpoints
- `docs/ARCHITECTURE.md` - Para mudanças estruturais
- Comentários no código para lógica complexa

---

## 🎯 Áreas com Demanda

Procurando ajuda em:
- **Backend:** Melhorias em endpoints, otimizações DB
- **Frontend:** Novas páginas, designs, a11y
- **Bots:** Integração com mais plataformas
- **Docs:** Melhorar guides e tutoriais
- **Testing:** Aumentar cobertura de testes

---

## 💬 Comunicação

- **Issues:** Bugs e features
- **Discussions:** Perguntas gerais
- **Discord:** Chat em tempo real (em breve)
- **Email:** seu-email@example.com

---

## 📄 Licença

Ao contribuir, você concorda que suas contribuições são licenciadas sob MIT License.

---

## 🙏 Agradecimentos

Todo contribuidor é um herói! 🦸‍♀️ Obrigado por melhorar o Micro Therapy Social!

---

**Versão:** 1.0  
**Última atualização:** 4 Dec 2025
