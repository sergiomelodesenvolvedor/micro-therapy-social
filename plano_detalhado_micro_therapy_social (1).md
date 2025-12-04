# Plano Detalhado — Micro‑Therapy Social
Autor: sergiomelodesenvolvedor (adaptado)
Data de geração: 2025-12-04

Resumo executivo
- Projeto: Micro‑Therapy Social — plataforma gamificada de micro‑intervenções para saúde mental.
- Disponibilidade do desenvolvedor: 4 horas por dia, 7 dias por semana (28 horas/semana).
- Formato: Sprints de 2 semanas (14 dias). Cada sprint = 28 h/semana × 2 = 56 horas úteis por sprint.
- Opção escolhida: plano full-scope com 12 sprints (24 semanas, ≈ 6 meses), início em 2025-12-08, término previsto: 2026-05-25.
- Objetivo final: MVP robusto + piloto público + base para monetização (assinatura premium) e escalada.

Por que 12 sprints?
- Escopo completo estimado originalmente ~640h. Com 56h/sprint precisamos ≈ 11.4 sprints. Arredondei para 12 sprints para incluir buffers, QA e legal.

Calendário resumido (datas)
- Sprint 1: 2025-12-08 — 2025-12-21
- Sprint 2: 2025-12-22 — 2026-01-04
- Sprint 3: 2026-01-05 — 2026-01-18
- Sprint 4: 2026-01-19 — 2026-02-01
- Sprint 5: 2026-02-02 — 2026-02-15
- Sprint 6: 2026-02-16 — 2026-02-29
- Sprint 7: 2026-03-01 — 2026-03-14
- Sprint 8: 2026-03-15 — 2026-03-28
- Sprint 9: 2026-03-29 — 2026-04-11
- Sprint 10: 2026-04-12 — 2026-04-25
- Sprint 11: 2026-04-26 — 2026-05-09
- Sprint 12: 2026-05-10 — 2026-05-25

Observação de feriados / pausas:
- Você trabalhou que todos os dias; em sprints com feriados locais considere alocar buffer nas tasks finais do sprint. Eu já incluí buffer de ~8–10% de horas ao longo do plano.

Rotina diária (modelo para 4h/dia)
- 09:00–09:10 — Checar board / abrir ambiente (10 min)
- 09:10–11:00 — Bloco profundo (1h50)
- 11:00–11:15 — Pausa curta (15 min)
- 11:15–13:00 — Bloco de integração/testes/commits (1h45)
- 13:00 — Encerramento do dia: push, atualizar issues (5–10 min)
- Observação: ajuste horário conforme sua preferência; manter dois blocos ajuda foco.

Como ler os sprints
- Cada sprint contém: objetivo, lista de tarefas com estimativa em horas (soma aproximada ≤56h), entregáveis e critérios de aceite. Use o final de cada sprint para demo/retrospective e groom do backlog.

Sprint 1 — Descoberta, protótipo Notion/Discord e setup inicial
- Datas: 2025-12-08 — 2025-12-21
- Objetivo: validar fluxo sem usuários reais; infra e repositório prontos.
- Tarefas e estimativas:
  - Planejamento detalhado / user stories / acceptance criteria: 5.5h
  - Protótipo no Notion (flows, páginas, templates): 5.5h
  - Configurar servidor Discord (canais, mensagem auto, roles): 5.5h
  - Criar repositório Git + README + templates: 2.5h
  - Criar contas: Supabase, Render/Railway/Vercel, Stripe (test): 3.5h
  - Documentar arquitetura (diagramas simples): 3.5h
  - Esquema DB inicial (tabelas e relações): 5.5h
  - CI básico + linting + pre-commit: 4.5h
  - Landing estática + formulário HTML simples: 5.5h
  - Revisão, ajustes e buffer: 5.0h
- Entregáveis:
  - Protótipo Notion + servidor Discord com simulação.
  - Repo com CI e esquema DB.
  - Landing estática.
- Critério de aceite:
  - Fluxo protótipo executável (cadastro → post → resposta simulada → pontuação refletida em Notion/Discord).

Sprint 2 — Backend inicial: auth, posts, pontuação, DB
- Datas: 2025-12-22 — 2026-01-04
- Objetivo: API básica para autenticação e CRUD de posts; pontuação calculada no backend.
- Tarefas e estimativas:
  - Modelagem final do DB + migrations: 4.5h
  - Auth simples (magic link/JWT): 8h
  - Endpoints: criar post, listar posts, perfil, pontos: 8h
  - Lógica de pontuação (regras iniciais) + testes unitários: 7.0h
  - OpenAPI/Swagger docs: 3.0h
  - Integração com Supabase/Postgres: 5.0h
  - Badges storage e associações: 5.0h
  - Scripts seed (bots) e testes: 5.5h
  - Buffer e ajustes: 5.0h
- Entregáveis:
  - Backend com endpoints documentados e DB populado com seeds.
- Critério de aceite:
  - Operações CRUD + cálculo de pontos corretos em testes automatizados.

Sprint 3 — Bots (Telegram/Discord) e respostas automáticas
- Datas: 2026-01-05 — 2026-01-18
- Objetivo: bot que simula comunidade, responde automaticamente e integra com API.
- Tarefas e estimativas:
  - Definir arquitetura do bot (webhooks/polling): 3.5h
  - Implementar bot Telegram (integração com API): 12h
  - Implementar bot Discord (ou escolher 1 se preferir): 9h
  - Motor simples de respostas (templates + regras): 10h
  - Simulação de comunidade (scripts para gerar respostas com variação): 8h
  - Logs, métricas básicas, retry: 6h
  - Testes + buffer: 7.5h
- Entregáveis:
  - Bot operacional respondendo posts e registrando interações.
- Critério de aceite:
  - Bot responde automaticamente em <60s e grava eventos no backend.

Sprint 4 — Frontend dinâmico: feed, perfil, ranking, badges
- Datas: 2026-01-19 — 2026-02-01
- Objetivo: UI mínima funcional integrada ao backend.
- Tarefas e estimativas:
  - Escolha tech frontend (VanillaJS / Svelte / React minimal): 3.5h
  - Feed: listar posts + ver respostas: 12h
  - Perfil: pontos, badges, histórico: 9h
  - Ranking (daily/weekly): 7h
  - Exibição de badges (SVG + descrições): 5.5h
  - Invite/referral simples (código): 6h
  - Responsividade + testes mobile: 7h
  - Buffer/ajustes: 6h
- Entregáveis:
  - SPA simples com feed, perfil e ranking.
- Critério de aceite:
  - Postar via frontend aciona backend → bot responde → pontos aparecem no perfil.

Sprint 5 — Gamificação avançada: streaks, desafios, micro‑doações
- Datas: 2026-02-02 — 2026-02-15
- Objetivo: reforçar engajamento com mecânicas de jogo.
- Tarefas e estimativas:
  - Implementar streaks (dias seguidos): 8h
  - Desafios (ex.: 7 dias respiração guiada): 9h
  - Micro‑doações simbólicas (saldo interno): 7h
  - Notificações diárias via bot: 10h
  - Micro‑intervenções customizáveis (templates): 8h
  - Testes e QA de gamificação: 6h
  - Buffer: 8h
- Entregáveis:
  - Streaks e desafios ativos; notificações diárias automatizadas.
- Critério de aceite:
  - Streaks contadas corretamente; uso de micro-doações registrado.

Sprint 6 — QA, piloto fechado (20–100 users), instrumentação
- Datas: 2026-02-16 — 2026-02-29
- Objetivo: lançar piloto fechado e coletar métricas iniciais.
- Tarefas e estimativas:
  - Script de recrutamento/test plan: 4h
  - Instrumentação analytics (events): 10h
  - Testes E2E e correções críticas: 18h
  - Sessões de user-testing / entrevistas curtas: 8h
  - Otimização DB e queries: 6h
  - Relatório de métricas e hipóteses: 10h
- Entregáveis:
  - Piloto com coleta de dados; relatório inicial com métricas (D1/D7, DAU, etc).
- Critério de aceite:
  - Piloto com ≥20 usuários reais e tracking funcionando.

Sprint 7 — Premium: definição, pagamentos (Stripe) e controle de acesso
- Datas: 2026-03-01 — 2026-03-14
- Objetivo: implementar mecanismo de assinatura e features premium protótipo.
- Tarefas e estimativas:
  - Definir features premium (lista objetiva): 4h
  - Integrar Stripe (test): 12h
  - Backend: rotas/flags de premium: 8h
  - Proteção de endpoints e checks: 6h
  - Flows de upgrade/downgrade e webhooks: 8h
  - Testes de billing e documentação: 8h
  - Buffer e ajustes: 10h
- Entregáveis:
  - Assinaturas em ambiente de teste e gating de features.
- Critério de aceite:
  - Usuário pode assinar em modo sandbox e acessar feature premium.

Sprint 8 — IA básica para feedback (premium) e relatórios de humor
- Datas: 2026-03-15 — 2026-03-28
- Objetivo: IA simples (template + API) para relatórios e micro‑intervenções premium.
- Tarefas e estimativas:
  - Definir prompts/templates + fallback heurístico: 6h
  - Integrar serviço de IA (OpenAI/alternativa) com caching: 14h
  - Gerar relatório de humor semanal (HTML/PDF): 8h
  - Testes de qualidade do output e safety filters: 8h
  - Pricing & custo por chamada (simulação): 4h
  - Buffer e refinamentos: 16h
- Entregáveis:
  - Feedback automatizado premium em ambiente de teste; relatório gerado.
- Critério de aceite:
  - Respostas coerentes em 80% dos casos de teste e custos estimados.

Sprint 9 — Segurança, privacidade (LGPD), backups e legal
- Datas: 2026-03-29 — 2026-04-11
- Objetivo: endurecer produto para público maior e preparar documentos legais.
- Tarefas e estimativas:
  - Política de privacidade + termos (rascunho LGPD): 10h
  - Implementar consent flows (checkboxes, logs): 6h
  - Automated backups + export scripts do DB: 8h
  - Rate limiting e proteção básica contra abuse: 8h
  - Revisão de storage de dados sensíveis: 6h
  - Testes de penetração básicos / validação inputs: 6h
  - Buffer/documentação: 12h
- Entregáveis:
  - Policies, backups e controles de segurança ativos.
- Critério de aceite:
  - Backups automatizados e políticas publicadas (rascunho).

Sprint 10 — Growth / onboarding / landing e parcerias
- Datas: 2026-04-12 — 2026-04-25
- Objetivo: preparar crescimento orgânico e conversão.
- Tarefas e estimativas:
  - Landing otimizada + copy + SEO básico: 10h
  - Onboarding no app + emails de retenção: 10h
  - Plano de growth (Discord/Telegram/afiliados/coaches): 8h
  - Material para parcerias (one-pager para terapeutas): 6h
  - Scripts de referral e campaign mechanics (bonificação): 8h
  - Testes A/B iniciais e tracking: 6h
  - Buffer: 8h
- Entregáveis:
  - Landing e plano de captação dos primeiros 1k usuários; fluxo de referral.
- Critério de aceite:
  - Landing medindo conversões, fluxo de convite testado.

Sprint 11 — Escala técnica e otimizações (performance)
- Datas: 2026-04-26 — 2026-05-09
- Objetivo: preparar infra para >1k usuários e reduzir custos/latência.
- Tarefas e estimativas:
  - Revisão queries e índices: 8h
  - Cache de ranking / CDN para assets estáticos: 10h
  - Monitoramento e alertas (Sentry / Prometheus or simple): 8h
  - Autoscaling / planos de infra e estimativas de custo: 8h
  - Revisão de dependências e upgrades: 6h
  - Testes de carga leve: 8h
  - Buffer/finalizações: 8h
- Entregáveis:
  - Infra mais resiliente e monitoramento configurado.
- Critério de aceite:
  - Aplicação sobrevive a teste de carga definido sem erros críticos.

Sprint 12 — Lançamento público e retrospectiva final
- Datas: 2026-05-10 — 2026-05-25
- Objetivo: lançamento público (piloto 2.0), coleta de métricas e planejamento pós‑lançamento.
- Tarefas e estimativas:
  - Checklist final e deploy público: 10h
  - Comunicado/embudos de aquisição (email/discord): 6h
  - Monitoramento pós‑launch e correção rápida de bugs: 12h
  - Recolher métricas inicial (D1) e documentar: 10h
  - Roadmap 3‑6 meses futuro (prioridades): 6h
  - Buffer / contingência: 12h
- Entregáveis:
  - Lançamento público; relatório inicial de performance.
- Critério de aceite:
  - Lançamento sem downtimes críticos; dados de engajamento coletados.

Backlog essencial (priorizado)
1. Cadastro / Login / Segurança
2. Postar micro‑problema / Feed
3. Bot com resposta automática
4. Pontuação básica e badges
5. Perfil / Ranking
6. Notificações via Telegram/Discord
7. Simulação de comunidade (bots) para fase inicial
8. Analytics / métricas
9. Premium (pagamento) e IA simples
10. Escala e segurança

Esquema de banco (sugestão básica)
- users: id, name, email, created_at, is_premium (bool), premium_until (datetime), referral_code
- posts: id, user_id, content, created_at, status, sentiment (opcional)
- interactions: id, post_id, actor_id (user or bot), type (reply/intervention/like), content, created_at
- points_events: id, user_id, points, reason, created_at
- badges: id, key, name, description, criteria_json
- user_badges: id, user_id, badge_id, awarded_at
- payments: id, user_id, provider, provider_id, amount, status, created_at

Métricas (instrumentar desde Sprint 6)
- DAU / MAU
- Retenção D1 / D7 / D30
- Posts / usuário / dia
- Tempo médio até primeira resposta
- Conversão convite → registro
- Taxa de upgrade para premium
- Churn premium
- Custo por user acquisition (quando rodar campanhas)

Política de monetização (resumo)
- Modelo freemium: features básicas gratuitas; premium com IA avançada, relatórios e micro‑intervenções mais personalizadas.
- Preço de referência: R$30/mês (exemplo no planejamento original)
- Cobrar o premium para cobrir custo de chamadas à API de IA.

Riscos e mitigação
- Baixa adesão inicial: usar bots para simular comunidade e bonificar convites.
- Abuso / spam: rate limits, moderação manual inicialmente.
- Custos de IA altos: usar heurísticas gratuitas para o core; IA somente no premium.
- Privacidade / LGPD: minimizar dados coletados, expor políticas e rotas de deleção.
- Dependência de serviços free: ter plano de backup e export de dados.

Estimativa de custo mensal aproximada (inicial)
- Supabase (free): R$0
- Render / Railway / Vercel (free): R$0 (limites)
- Stripe: taxas por transação (~R$0 por test)
- OpenAI (se usado): variável (reserve um orçamento)
- Domínio: R$30–100/ano
- Reserva para infra (quando crescer): R$200–800/mês

Checklist mínimo pré‑lançamento
- [ ] Testes end‑to‑end e correções
- [ ] Política de privacidade e termos
- [ ] Backups automáticos configurados
- [ ] Monitoramento/alertas básicos
- [ ] Planos de rollback/deploy
- [ ] Scripts de seed para simular comunidade

Critérios de aceite de MVP
- Usuário consegue se cadastrar, postar micro‑problema e receber resposta (bot) que gera pontos.
- Pontuação e badges são exibidos no perfil.
- Ranking diário/semana atualiza.
- Notificações via bot chegam ao usuário.
- Sistema de analítica registra eventos mínimos.

Como eu recomendo usar este plano (prático)
- Use um board Kanban (GitHub Projects / Trello). Crie 12 epics (1 por sprint) e dentro deles issues correspondendo às tasks listadas.
- Priorize Sprint 1–4 para chegar ao MVP com bot respondendo e frontend mínimo.
- Lance piloto fechado (sprint 6) para validar hipóteses antes de investir em IA paga.

O que eu já gerei para você
- Este documento Markdown detalhado (abaixo).
- Se quiser eu converto para PDF e entrego o arquivo pronto para baixar, ou crio issues no seu repositório GitHub (se me fornecer o owner/repo e permissões).

Próximos passos recomendados (parte prática)
- Confirme data de início (usei 2025-12-08 por padrão).
- Quero saber se prefere que eu gere o CSV/Issues para importar no GitHub (posso preparar os issues por sprint).
- Posso também gerar um PDF pronto para impressão com este conteúdo.

--- fim do documento ---