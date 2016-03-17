'use strict';

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const
  vscode = require('vscode');

const
  Position = vscode.Position,
  Range = vscode.Range,
  Selection = vscode.Selection;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
  context.subscriptions.push(vscode.commands.registerTextEditorCommand('swapLine.swapLineUp', (textEditor, edit) => {
    moveLines(textEditor, edit, -1);
  }));

  context.subscriptions.push(vscode.commands.registerTextEditorCommand('swapLine.swapLineDown', (textEditor, edit) => {
    moveLines(textEditor, edit, 1);
  }));
}

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}

exports.deactivate = deactivate;

function moveLines(textEditor, edit, direction) {
  const
    selections = textEditor.selections,
    newSelections = [],
    directionDown = direction > 0;

  selections.forEach(selection => {
    const
      startLine = selection.start.line,
      endLine = Math.max(startLine + 1, selection.end.line),
      lineRange = new Range(startLine, 0, endLine, 0),
      text = textEditor.document.getText(lineRange),
      lineNumberToSwap = directionDown ? endLine : (startLine - 1),
      lineToSwap = textEditor.document.getText(new Range(lineNumberToSwap, 0, lineNumberToSwap + 1, 0));

    edit.replace(
      new Range(
        directionDown ? startLine : (startLine - 1),
        0,
        directionDown ? (endLine + 1) : endLine,
        0
      ),
      directionDown ? (lineToSwap + text) : (text + lineToSwap)
    );

    const
      active = selection.active,
      anchor = selection.anchor;

    newSelections.push(new Selection(
      anchor.line + direction,
      anchor.character,
      active.line + direction,
      active.character
    ));
  });

  textEditor.selections = newSelections;
}