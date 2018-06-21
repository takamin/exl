Exl
===

The command-line XLSX operator.

COMMANDS
--------

Usage: `exl <operating-address> [<new-value> [value-type]]`

To echo a value at a cell:

```bash
$ exl [foo.xlsx]Sheet1!A1
```

To set a string to a cell:
 
```bash
$ exl [foo.xlsx]Sheet1!A1 'Hello Excel'
```

To set a number:

```bash
$ exl [foo.xlsx]Sheet1!A1 '1234' number
```

INSTALLATION
------------

```bash
$ npm i -g exl
```

LICENSE
-------

This software is released under the MIT License, see [LICENSE](LICENSE)
