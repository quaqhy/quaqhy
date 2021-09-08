# Extension in Vscode

## how to show all your extensions

### linux/max:

```
code --list-extensions | xargs -L 1 echo code --install-extension
```

### window:

```
code --list-extensions | % { "code --install-extension $\_" }
```

## list

-   code --install-extension be5invis.vscode-custom-css
-   code --install-extension CoenraadS.bracket-pair-colorizer
-   code --install-extension donjayamanne.githistory
-   code --install-extension donjayamanne.jquerysnippets
-   code --install-extension eamodio.gitlens
-   code --install-extension ecmel.vscode-html-css
-   code --install-extension esbenp.prettier-vscode
-   code --install-extension evondev.html-to-css-class
-   code --install-extension formulahendry.auto-close-tag
-   code --install-extension formulahendry.auto-rename-tag
-   code --install-extension formulahendry.code-runner
-   code --install-extension formulahendry.terminal
-   code --install-extension GitHub.copilot
-   code --install-extension hoovercj.vscode-power-mode
-   code --install-extension ionutvmi.path-autocomplete
-   code --install-extension mkaufman.HTMLHint
-   code --install-extension ms-python.python
-   code --install-extension ms-python.vscode-pylance
-   code --install-extension ms-toolsai.jupyter
-   code --install-extension ms-toolsai.jupyter-keymap
-   code --install-extension ms-vscode.cpptools
-   code --install-extension ms-vscode.live-server
-   code --install-extension msjsdiag.debugger-for-chrome
-   code --install-extension oderwat.indent-rainbow
-   code --install-extension PKief.material-icon-theme
-   code --install-extension pnp.polacode
-   code --install-extension redhat.java
-   code --install-extension ritwickdey.live-sass
-   code --install-extension ritwickdey.LiveServer
-   code --install-extension solnurkarim.html-to-css-autocompletion
-   code --install-extension streetsidesoftware.code-spell-checker
-   code --install-extension thekalinga.bootstrap4-vscode
-   code --install-extension VisualStudioExptTeam.vscodeintellicode
-   code --install-extension vscjava.vscode-java-debug
-   code --install-extension vscjava.vscode-java-dependency
-   code --install-extension vscjava.vscode-java-pack
-   code --install-extension vscjava.vscode-java-test
-   code --install-extension vscjava.vscode-maven
-   code --install-extension vscodevim.vim
-   code --install-extension wesbos.theme-cobalt2
-   code --install-extension xabikos.JavaScriptSnippets
