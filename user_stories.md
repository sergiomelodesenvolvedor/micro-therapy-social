# 📋 User Stories - Micro Therapy Social

## **O que são User Stories?**
São descrições simples de funcionalidades do ponto de vista de quem vai usar o app. Formato: **"Como [tipo de usuário], eu quero [ação], para [benefício]"**

---

## **👥 Tipos de Usuários**

### 1. **Usuário com Depressão** 😔
Pessoa que sente tristeza constante, falta de energia, desmotivação.

### 2. **Usuário com Ansiedade** 😰
Pessoa com preocupações excessivas, medo, pensamentos acelerados.

### 3. **Usuário Casual** 🙂
Pessoa sem transtornos graves, mas que quer melhorar saúde mental.

### 4. **Usuário Premium** 💎
Pessoa que paga assinatura para ter recursos avançados.

---

## **📝 User Stories - Funcionalidades Principais**

### **Cadastro e Login**

**US-01: Cadastro Simples**
- **Como** um novo usuário
- **Eu quero** criar uma conta apenas com email (sem senha complicada)
- **Para** começar a usar o app rapidamente sem complicação

**Critérios de Aceite:**
- [ ] Usuário digita apenas email
- [ ] Sistema envia link mágico por email
- [ ] Usuário clica no link e já está logado
- [ ] Tempo total < 2 minutos

---

**US-02: Login Rápido**
- **Como** um usuário que já tem conta
- **Eu quero** fazer login sem lembrar senha
- **Para** acessar meu perfil de forma simples

**Critérios de Aceite:**
- [ ] Digita email → recebe link
- [ ] Clica no link → entra automaticamente
- [ ] Login válido por 7 dias

---

### **Criação de Posts**

**US-03: Postar Pensamento Negativo**
- **Como** um usuário deprimido
- **Eu quero** escrever meus pensamentos ruins em texto
- **Para** desabafar e receber ajuda

**Critérios de Aceite:**
- [ ] Campo de texto aceita até 500 caracteres
- [ ] Botão "Postar" bem visível
- [ ] Post aparece imediatamente no feed
- [ ] Usuário ganha +10 pontos ao postar

---

**US-04: Receber Resposta Automática**
- **Como** um usuário ansioso que acabou de postar
- **Eu quero** receber uma resposta de apoio em menos de 1 minuto
- **Para** me sentir acolhido e não sozinho

**Critérios de Aceite:**
- [ ] Bot responde em < 60 segundos
- [ ] Resposta é personalizada ao tipo de problema (ansiedade, depressão, etc)
- [ ] Resposta inclui dica prática (ex: "Respire fundo 5 vezes")
- [ ] Usuário ganha +5 pontos ao receber resposta

---

### **Visualização de Posts**

**US-05: Ver Feed de Posts**
- **Como** um usuário casual
- **Eu quero** ver posts de outras pessoas
- **Para** saber que não estou sozinho e me inspirar

**Critérios de Aceite:**
- [ ] Feed mostra últimos 20 posts
- [ ] Ordenado por mais recente primeiro
- [ ] Mostra: texto do post, nome do usuário, respostas
- [ ] Scroll infinito ou botão "Carregar mais"

---

**US-06: Ler Respostas de um Post**
- **Como** um usuário deprimido
- **Eu quero** clicar em um post e ver todas as respostas
- **Para** aprender técnicas que ajudaram outras pessoas

**Critérios de Aceite:**
- [ ] Clique no post → expande e mostra respostas
- [ ] Respostas aparecem embaixo do post original
- [ ] Mostra quem respondeu (bot ou pessoa)

---

### **Perfil e Pontuação**

**US-07: Ver Meus Pontos**
- **Como** um usuário gamificado
- **Eu quero** ver quantos pontos tenho
- **Para** me sentir motivado a continuar usando

**Critérios de Aceite:**
- [ ] Perfil mostra total de pontos bem visível
- [ ] Mostra como ganhou pontos (histórico)
- [ ] Atualiza em tempo real quando ganha pontos

---

**US-08: Ver Minhas Badges**
- **Como** um usuário casual
- **Eu quero** ver quais conquistas desbloqueei
- **Para** me sentir orgulhoso do meu progresso

**Critérios de Aceite:**
- [ ] Perfil mostra todas as badges conquistadas
- [ ] Cada badge tem ícone e descrição
- [ ] Mostra badges bloqueadas (com cadeado) e como desbloquear

---

**US-09: Ver Ranking Semanal**
- **Como** um usuário competitivo
- **Eu quero** ver quem está no Top 10 da semana
- **Para** me motivar a ganhar mais pontos

**Critérios de Aceite:**
- [ ] Ranking mostra Top 10 usuários
- [ ] Mostra minha posição mesmo que não esteja no Top 10
- [ ] Atualiza a cada hora
- [ ] Diferencia ranking diário vs semanal

---

### **Gamificação**

**US-10: Manter Streak Diário**
- **Como** um usuário casual
- **Eu quero** ver quantos dias seguidos entrei no app
- **Para** manter uma rotina saudável

**Critérios de Aceite:**
- [ ] Sistema detecta login automático
- [ ] Mostra streak no perfil: "🔥 5 dias"
- [ ] Avisa quando streak está em risco de quebrar
- [ ] Ganha +5 pontos por dia de streak

---

**US-11: Reagir a Posts**
- **Como** um usuário casual
- **Eu quero** dar reações em posts (❤️ 💪 🤗 ⭐)
- **Para** apoiar outras pessoas rapidamente

**Critérios de Aceite:**
- [ ] Botões de reação embaixo de cada post
- [ ] 1 reação por usuário por post
- [ ] Quem reage: +2 pontos
- [ ] Quem recebe reação: +3 pontos
- [ ] Contador de reações visível

---

**US-12: Comentar em Posts**
- **Como** um usuário que quer ajudar
- **Eu quero** escrever comentários em posts
- **Para** compartilhar minha experiência e apoiar

**Critérios de Aceite:**
- [ ] Campo de comentário embaixo do post
- [ ] Máximo 500 caracteres
- [ ] Quem comenta: +5 pontos
- [ ] Quem recebe comentário: +3 pontos
- [ ] Comentários aparecem embaixo do post

---

### **Premium**

**US-13: Assinar Premium**
- **Como** um usuário que quer mais recursos
- **Eu quero** assinar o plano premium por R$30/mês
- **Para** ter acesso a IA avançada e relatórios

**Critérios de Aceite:**
- [ ] Botão "Assinar Premium" bem visível
- [ ] Fluxo de pagamento via Stripe
- [ ] Confirmação de assinatura por email
- [ ] Recursos premium desbloqueiam imediatamente

---

**US-14: Relatório de Humor Semanal (Premium)**
- **Como** um usuário premium
- **Eu quero** receber um relatório PDF toda semana
- **Para** acompanhar meu progresso emocional

**Critérios de Aceite:**
- [ ] PDF enviado por email toda segunda-feira
- [ ] Mostra: posts da semana, evolução de humor, dicas personalizadas
- [ ] Gráfico de progresso

---

## **🔄 Fluxos Completos**

### **Fluxo 1: Novo Usuário Completo**
1. Usuário visita landing page
2. Clica "Cadastrar"
3. Digita email
4. Recebe email com link mágico
5. Clica no link → está logado
6. Vê tutorial rápido (onboarding)
7. Escreve primeiro post
8. Recebe resposta do bot em 30s
9. Ganha badge "Primeiro Passo" + 10 pontos
10. Vê perfil com pontos e badge

---

### **Fluxo 2: Usuário Voltando**
1. Usuário abre app (já logado)
2. Sistema detecta login → +5 pontos (streak)
3. Vê feed com posts novos
4. Lê um post interessante
5. Dá reação ❤️ → +2 pontos
6. Escreve comentário → +5 pontos
7. Vê notificação: "Você está em 8º no ranking!"
8. Clica no ranking pra ver posição
9. Volta amanhã pra manter streak

---

### **Fluxo 3: Usuário Assinando Premium**
1. Usuário vê banner "Premium"
2. Clica "Ver benefícios"
3. Lê: IA avançada, relatórios, sem limites
4. Clica "Assinar por R$30/mês"
5. Preenche dados do cartão (Stripe)
6. Pagamento aprovado
7. Vê confirmação: "Bem-vindo ao Premium! 💎"
8. Recursos premium aparecem no menu
9. Testa IA avançada em um post
10. Recebe relatório semanal na segunda-feira

---

## **📊 Resumo de Pontuação**

| Ação | Pontos | Como é detectado |
|------|--------|------------------|
| Cadastrar | +0 | Registro no banco |
| Fazer login diário | +5 | Sistema detecta abertura do app |
| Criar post | +10 | Salva no banco |
| Receber resposta do bot | +5 | Bot responde automaticamente |
| Dar reação ❤️💪🤗⭐ | +2 | Clique registrado |
| Receber reação | +3 | Contador de reações |
| Comentar em post | +5 | Comentário salvo no banco |
| Receber comentário | +3 | Contador de comentários |
| Manter streak 7 dias | +50 | Bônus por milestone |

---

## **🏆 Badges Principais**

1. **🎯 Primeiro Passo** - Criar primeiro post
2. **🔥 Streak 7 dias** - Login 7 dias seguidos
3. **💬 Comunicativo** - Fazer 10 comentários
4. **❤️ Coração Grande** - Dar 50 reações
5. **📝 Escritor** - Criar 30 posts
6. **🏆 Top 10** - Entrar no ranking semanal
7. **💎 Premium** - Assinar plano premium
8. **📈 Progresso** - Usar app por 30 dias

---

## **✅ Checklist de Implementação**

- [ ] Cadastro com magic link funcional
- [ ] Login automático por 7 dias
- [ ] Criar post (máx 500 chars)
- [ ] Bot responde em < 60s
- [ ] Feed mostra últimos 20 posts
- [ ] Perfil mostra pontos + badges
- [ ] Ranking diário e semanal
- [ ] Sistema de streaks automático
- [ ] Reações (❤️💪🤗⭐) funcionais
- [ ] Comentários funcionais
- [ ] Pagamento Stripe (teste)
- [ ] Relatório PDF semanal (premium)

---

**Próximos Passos:**
1. ✅ User stories documentadas
2. ⏭️ Criar protótipo no Notion com essas funcionalidades
3. ⏭️ Configurar servidor Discord para testes
4. ⏭️ Criar repositório Git

---

**Documento criado em:** 2025-12-04  
**Versão:** 1.0  
**Status:** Completo ✅
