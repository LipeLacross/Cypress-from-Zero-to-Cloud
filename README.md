## 🌐 [English Version of README](README_EN.md)

# Cypress, do Zero à Nuvem ☁️

Projeto exemplo do curso **Cypress, do Zero à Nuvem** da Escola Talking About Testing.

Este repositório demonstra como criar, organizar e executar testes automatizados de interface web utilizando o framework Cypress, desde a configuração local até a integração com pipelines de CI/CD e Cypress Cloud.

---

## 🔨 Funcionalidades do Projeto

- Testes E2E completos para uma aplicação web de atendimento ao cliente (CAC TAT)
- Cobertura de todos os fluxos principais do formulário: preenchimento, validação, seleção de produtos, tipos de atendimento, uploads, links e mensagens
- Comandos customizados para fácil manutenção e reutilização de código
- Execução dos testes em múltiplos ambientes: local, mobile, CI/CD e nuvem (Cypress Cloud)
- Integração pronta para pipelines no GitHub Actions

### Exemplo Visual do Projeto

A aplicação simulada traz um formulário de contato com campos obrigatórios, seleção de produtos, tipos de atendimento, upload de arquivos e link para política de privacidade.

---

## ✔️ Técnicas e Tecnologias Utilizadas

| Tecnologia        | Versão    | Finalidade                               |
|-------------------|-----------|------------------------------------------|
| Cypress           | 14.4.1    | Framework principal de testes E2E        |
| Node.js           | 20+       | Ambiente de execução                     |
| npm               | 10+       | Gerenciamento de pacotes e scripts       |
| GitHub Actions    | —         | Pipeline de Integração Contínua (CI)     |
| Cypress Cloud     | —         | Gestão de execuções e analytics na nuvem |
| JavaScript ES6+   | —         | Lógica dos testes e configurações        |

---

## 📁 Estrutura do Projeto

```
.
├── LICENSE
├── README.md
├── README_EN.md
├── cypress/
│   ├── e2e/
│   │   ├── CAC-TAT.cy.js        # Testes E2E da aplicação principal
│   │   └── privacyPolicy.cy.js  # Testes de política de privacidade
│   ├── fixtures/
│   │   └── example.json         # Dados de exemplo para uploads/fixtures
│   └── support/
│       ├── commands.js          # Comandos customizados do Cypress
│       └── e2e.js               # Configuração global de suporte aos testes
├── cypress.config.js            # Arquivo de configuração do Cypress
├── lessons/                     # Materiais e lições do curso
├── package.json                 # Dependências e scripts do projeto
├── package-lock.json
├── src/
│   ├── index.html               # Página principal da aplicação
│   ├── privacy.html             # Página de política de privacidade
│   └── script.js                # Lógica da aplicação
└── .github/
    └── workflows/
        └── ci.yml               # Workflow do GitHub Actions para CI
```
[Veja a estrutura completa][1]

---

## 🛠️ Como rodar o projeto localmente

1. **Certifique-se de que o Node.js está instalado:**
   - O [Node.js](https://nodejs.org/) é necessário. Verifique com:
     ```
     node -v
     ```
   - Se não estiver instalado, baixe e instale a versão recomendada no site oficial.

2. **Clone o repositório:**
   ```
   git clone 
   cd cypress-do-zero-a-nuvem
   ```

3. **Instale as dependências:**
   ```
   npm install
   ```

4. **Abra a aplicação localmente:**
   - Abra o arquivo `src/index.html` no navegador, ou utilize um servidor local (ex: [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VSCode).


pode ser em python
    - Para rodar um servidor local simples, você pode usar:
      ```
      python -m http.server 8000
      ```
    - Acesse `http://localhost:8000/src/index.html` no navegador.
5. **Execute os testes:**

   - **Modo interativo (Cypress App):**
     ```
     npm run cy:open
     ```
   - **Modo headless (linha de comando):**
     ```
     npm test
     ```
   - **Simular mobile (modo interativo):**
     ```
     npm run cy:open:mobile
     ```
   - **Simular mobile (modo headless):**
     ```
     npm run test:mobile
     ```
   - **Execução na nuvem (Cypress Cloud):**
     ```
     npm run test:cloud
     ```

---

## 🌐 Deploy & Integração Contínua

### Execução em CI/CD (GitHub Actions)

O projeto já está configurado para execução automática dos testes em pipelines CI/CD usando GitHub Actions. O arquivo `.github/workflows/ci.yml` realiza:

- Instalação das dependências
- Execução dos testes Cypress em modo headless
- (Opcional) Integração com Cypress Cloud para relatórios e analytics

**Como funciona:**
- A cada push, o workflow é disparado e executa todos os testes automaticamente.
- Resultados ficam disponíveis no GitHub (aba Actions) e no Cypress Cloud (se configurado).

**Para Cypress Cloud:**
- Adicione a variável `CYPRESS_RECORD_KEY` nos segredos do repositório.
- O script `npm run test:cloud` será executado e enviará os resultados para a nuvem.

**Exemplo de configuração do workflow:**
```
name: End-to-end tests
on: push
jobs:
  cypress-run:
    runs-on: ubuntu-22.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Cypress run
        uses: cypress-io/github-action@v6
        env:
          CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}
        with:
          command: npm run test:cloud
```

---

## 📄 Detalhes dos Arquivos

| Arquivo                        | Função                                            |
|--------------------------------|---------------------------------------------------|
| cypress/e2e/CAC-TAT.cy.js      | Testes E2E principais da aplicação                |
| cypress/e2e/privacyPolicy.cy.js| Testes isolados da página de política de privacidade |
| cypress/support/commands.js    | Comando customizado `fillMandatoryFieldsAndSubmit`|
| cypress.config.js              | Configurações do Cypress (viewport, baseUrl, etc) |
| src/index.html / privacy.html  | Páginas HTML da aplicação                         |
| src/script.js                  | Validação, mensagens e regras do formulário       |
| .github/workflows/ci.yml       | Workflow do GitHub Actions para CI/CD             |

---

## 💡 Possibilidades de Execução

- **Local:** Execute os testes durante o desenvolvimento, simulando diferentes dispositivos.
- **CI/CD:** Garanta qualidade contínua rodando os testes a cada alteração no código.
- **Cypress Cloud:** Analise execuções, identifique testes instáveis e compartilhe resultados com o time.
- **Personalização:** Adapte comandos, scripts e configurações para seu contexto real de projeto.
