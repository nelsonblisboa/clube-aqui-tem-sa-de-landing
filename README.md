# Clube Aqui Tem Saúde - Landing Page

Landing page de telemedicina do projeto **Clube Aqui Tem Saúde** desenvolvida com React 19, TanStack Start, TypeScript, Vite e TailwindCSS.

## 🚀 Tecnologias e Ferramentas
- **Runtime & Gerenciador de Pacotes:** Bun
- **Framework SPA/SSR:** TanStack Start (React 19)
- **Estilização:** TailwindCSS (v4)
- **Bundler:** Vite

## 📦 Instalação e Configuração

### 1. Instalar o Bun (Caso não tenha instalado)
Selecione o comando correspondente ao seu sistema operacional:
- **Windows (PowerShell):**
  ```powershell
  powershell -c "irm bun.sh/install.ps1 | iex"
  ```
- **macOS / Linux:**
  ```bash
  curl -fsSL https://bun.sh/install | bash
  ```

### 2. Configurar Variáveis de Ambiente
Duplique o arquivo `.env.example` para criar o `.env` de desenvolvimento local:
```bash
cp .env.example .env
```
Abra o arquivo `.env` e configure sua chave secreta do Stripe (`STRIPE_SECRET_KEY`).

### 3. Instalar as Dependências
Instale todas as dependências do projeto respeitando o arquivo de trava `bun.lock`:
```bash
bun install
```

## 🛠️ Scripts Disponíveis

### Executar em Ambiente de Desenvolvimento
Inicia o servidor Vite local:
```bash
bun run dev
```

### Executar Build de Produção
Gera a build otimizada da aplicação na pasta `dist`:
```bash
bun run build
```

### Visualizar a Build Localmente
Roda a aplicação compilada localmente para testes pré-produção:
```bash
bun run preview
```

### Linters e Formatação
- **Verificar erros de linting (ESLint):** `bun run lint`
- **Formatar código automaticamente (Prettier):** `bun run format`
