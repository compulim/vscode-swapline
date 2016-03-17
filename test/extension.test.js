/* global suite, test */

//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

const
  assert = require('assert'),
  vscode = require('vscode'),
  myExtension = require('../extension');

suite('Extension Tests', function() {
  test('Something 1', function() {
    // vscode.visibleTextEditors.push(new vscode.TextEdit);
    vscode.workspace.openTextDocument(vscode.Uri.parse('swapline-test://dummy'));
  });
});