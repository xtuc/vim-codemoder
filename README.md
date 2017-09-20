# vim-codemoder

### Installation

Clone this repository somewhere on your machine, launch the following commands to setup the project: `npm install` and `npm run build`.

### Use in Vim

I used the builtin code formater, you need to add the location of the executable in your Vim configuration:

```
set formatprg=/opt/vim-codemoder/bin
```

You can then select some text and hit `gq`.

### Configuration

For the moment there is no real configuration. `babel-plugin-meaningful-logs` is harded [here](https://github.com/xtuc/vim-codemoder/blob/master/src/index.js#L6).

PR are welcomed :)
