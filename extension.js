const vscode = require("vscode");
let anchors = {
  stamp1: {},
  stamp2: {},
  stamp3: {},
  stamp4: {},
  stamp5: {}
};
function activate(context) {
  console.log('Congratulations, your extension "goto-anchor" is now active!');
  let disposable = vscode.commands.registerCommand("gotoAnchor.stamp1", function() {
    var editor = vscode.window.activeTextEditor;
    if (!editor) {
      console.log("aaa");
      vscode.window.showInformationMessage("Hello World!");
    } else {
      anchors.stamp1.line = editor.selection.active.line;
      anchors.stamp1.character = editor.selection.active.character;
      anchors.stamp1.docName = editor.selection.active.docName;
    }
    vscode.window.showInformationMessage("Hello World!");
  });
  let disposable2 = vscode.commands.registerCommand("gotoAnchor.stamp2", function() {
    var editor = vscode.window.activeTextEditor;
    if (!editor) {
      console.log("aaa");
      vscode.window.showInformationMessage("Hello World!");
    } else {
      anchors.stamp1.line = editor.selection.active.line;
      anchors.stamp1.character = editor.selection.active.character;
      anchors.stamp1.docName = editor.selection.active.docName;
    }
    vscode.window.showInformationMessage("Hello World!");
  });
  context.subscriptions.push(disposable);
  context.subscriptions.push(disposable2);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
