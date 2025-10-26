import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Extensão "github-issues-viewer" ativada.');

  const fetchIssues = async () => {
    const repo = await vscode.window.showInputBox({
      prompt: "Digite o repositório (ex: owner/repo)",
    });
    if (!repo) return;

    try {
      const response = await fetch(
        `https://api.github.com/repos/${repo}/issues`
      );
      const issues = await response.json();

      if (!Array.isArray(issues)) {
        vscode.window.showErrorMessage("Erro ao obter issues.");
        return;
      }

      const issueList = issues
        .map((i: any) => `#${i.number} - ${i.title}`)
        .join("\n");

      vscode.window.showInformationMessage(`Issues de ${repo}:\n${issueList}`);
    } catch (err) {
      vscode.window.showErrorMessage("Erro ao buscar issues: " + err);
    }
  };

  // registra o comando normalmente
  const disposable = vscode.commands.registerCommand(
    "githubIssues.showIssues",
    fetchIssues
  );

  context.subscriptions.push(disposable);

  // chama automaticamente ao ativar a extensão
  fetchIssues();
}
