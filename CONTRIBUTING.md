## Como Desenvolver

Se você quiser **contribuir com a extensão** ou **modificar para seu próprio uso**, siga os passos abaixo para configurar seu ambiente de desenvolvimento:

### Pré-requisitos

- **Node.js** (versão 18 ou superior recomendada)
- **Yarn** ou **npm** para instalar dependências
- **Visual Studio Code**

---

### Passo 1: Clonar o repositório

Clone o projeto para sua máquina:

```bash
git clone https://github.com/seu-usuario/github-issues-viewer.git
cd github-issues-viewer
```

---

### Passo 2: Instalar dependências

Use Yarn ou npm para instalar tudo que a extensão precisa:

```bash
yarn install
# ou
npm install
```

---

### Passo 3: Compilar o código

Se você estiver usando TypeScript, compile o projeto:

```bash
yarn compile
# ou
npm run compile
```

Isso vai gerar a pasta `dist/` com o código pronto para rodar no VS Code.

---

### Passo 4: Rodar a extensão no VS Code

1. Abra a pasta do projeto no VS Code.
2. Aperte **F5** ou vá em **Run > Start Debugging**.
3. Isso abre uma nova janela do VS Code chamada **Extension Development Host**, com a sua extensão carregada.

> Nessa janela, qualquer alteração que você fizer e recompilar vai refletir imediatamente quando você atualizar o `dist/` ou reiniciar o Extension Host.

---

### Passo 5: Testar funcionalidades

- A extensão deve ativar automaticamente ao abrir a nova janela.
- Uma caixa de input vai pedir o repositório (ex: `microsoft/vscode`).
- Verifique se a lista de issues aparece corretamente.
- Se quiser testar o comando manualmente, abra a **Paleta de Comandos** (`Ctrl+Shift+P` ou `Cmd+Shift+P`) e busque `Mostrar Issues do GitHub`.

---

### Dicas de desenvolvimento

- Use `yarn watch` ou `npm run watch` para compilar automaticamente quando salvar alterações.
- Use `console.log` dentro do `activate()` ou de funções para ver logs no **Debug Console**.
- Sempre faça testes no **Extension Development Host**, nunca no VS Code principal.

---

Se você quiser, posso agora criar o **README completo**, juntando:

- Descrição da extensão
- Funcionalidades
- Como usar
- Como desenvolver
- Contributing
