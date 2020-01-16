const vscode = require("vscode");
let anchors = {
  stamp1: {},
  stamp2: {},
  stamp3: {},
  stamp4: {},
  stamp5: {},
  stamp6: {},
  stamp7: {},
  stamp8: {},
  stamp9: {},
  stamp0: {}
};
let seq = 0;
function encodeLocation(uri, pos) {
  /* console.log(JSON.stringify([vscode.Uri.file(uri).toString(), pos.line, pos.character]))
  const query = JSON.stringify([vscode.Uri.file(uri).toString(), pos.line, pos.character]);
  return vscode.Uri.file(`${query}#${seq++}`); */
  return vscode.Uri.file(uri);
  // return vscode.Uri.parse(uri);
}
function activate(context) {
  function setStamp(index) {
    var editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showInformationMessage("Hello World!");
    } else {
      anchors["stamp" + index].line = editor.selection.active.line;
      anchors["stamp" + index].character = editor.selection.active.character;
      anchors["stamp" + index].docName = editor.document.fileName;
    }
    vscode.window.showInformationMessage("Hello World!" + index);
  }
  function go(index) {
    if (anchors["stamp" + index].docName) {
      const uri = encodeLocation(anchors["stamp" + index].docName, anchors["stamp" + index]);
      console.log(uri);
      vscode.workspace.openTextDocument(uri).then(doc =>
        vscode.window.showTextDocument(doc, {
          selection: new vscode.Range(new vscode.Position(anchors["stamp" + index].line, anchors["stamp" + index].character), new vscode.Position(anchors["stamp" + index].line, anchors["stamp" + index].character)),
          preview: false
        })
      );
    }
    vscode.window.showInformationMessage("Hello World!aaa" + index);
  }
  for (let i = 0; i < 10; i++) {
    let disposable = vscode.commands.registerCommand("gotoAnchor.stamp" + i, function() {
      setStamp(i);
    });
    let disposable2 = vscode.commands.registerCommand("gotoAnchor.go" + i, function() {
      go(i);
    });
    context.subscriptions.push(disposable);
    context.subscriptions.push(disposable2);
  }
}
exports.activate = activate;

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
