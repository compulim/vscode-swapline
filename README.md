# Swap line up and down with keyboard shortcuts
Moves current line or selection up/down by `Ctrl+Shift+Up/Down` on Windows and Linux, or `Shift+CMD+Up/Down` on OSX)

![Demo showing how swap line works](https://raw.githubusercontent.com/compulim/vscode-swapline/master/demo.gif)

## Usage
By default, swap line up and down is bound to `Ctrl+Shift+Up` and `Ctrl+Shift+Down` respectively. You can still run it thru Command Palette.
* Bring up Command Palette (`F1`, or `Ctrl+Shift+P` on Windows and Linux, or `Shift+CMD+P` on OSX)
* Type or select "Swap Line Up" or "Swap Line Down"

You can also modify keyboard shortcut with JSON below.
```json
{
  "command": "swapLine.swapLineUp",
  "key": "ctrl+shift+up",
  "mac": "shift+cmd+up",
  "when": "editorTextFocus"
}, {
  "command": "swapLine.swapLineDown",
  "key": "ctrl+shift+down",
  "mac": "shift+cmd+down",
  "when": "editorTextFocus"
}
```

## Change log
* 0.0.1 (2016-03-17): First public release

## Contributions
Love this extension? [Star](https://github.com/compulim/vscode-swapline/stargazers) us!

Want to make this extension even more awesome? [Send us your wish](https://github.com/compulim/vscode-swapline/issues/new/).

Hate how it is working? [File an issue](https://github.com/compulim/vscode-swapline/issues/new/) to us.
