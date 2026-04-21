// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// & Learn: You see below console.log in vscode's Developer Tools
	// &        (open it via: cmd+shift+p > "Toggle Developer Tools" >
	// &		"Console") when you run any command of your extension command
	// &		pallete.
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "lineflow" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const helloWorldCmd = vscode.commands.registerCommand('lineflow.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Lineflow!');
	});
	context.subscriptions.push(helloWorldCmd);

	// & Learn: I added below command to open line flow.
	// & Also, I added a command in package.json file in key:
	// 	 `contributes.commands` as - { "command": "lineflow.open", // "title": "Lineflow: Open Lineflow" }
	const openLineflowCommand = vscode.commands.registerCommand('lineflow.open', () => {
		const panel = vscode.window.createWebviewPanel(
			'lineflowApp',
			'Lineflow',
			vscode.ViewColumn.One,
			{
				enableScripts: true,
				retainContextWhenHidden: true
			}
		);
		panel.webview.html = getWebviewContent();
	});
	context.subscriptions.push(openLineflowCommand);
}

function getWebviewContent(): string {
	return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin: 0; padding: 0; overflow: hidden; }
      </style>
    </head>
    <body>
      <iframe 
        src="https://sahilrajput.com/line-flow"
        style="width:100%; height:100vh; border:none;">
      </iframe>
    </body>
    </html>
  `;
}

// This method is called when your extension is deactivated
export function deactivate() { }
