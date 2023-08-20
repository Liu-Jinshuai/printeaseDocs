# set the charset

## use

The default is ```utf-8``` encoding, you need to set it to the encoding you need

 - [init](/src/api/tspl#init): init the command
 - [setEncoding](/src/api/tspl#setencoding): Set encoding type
 - [setSize](/src/api/tspl#setsize): Set the width and length of the label paper
 - [setGap](/src/api/tspl#setgap): Set the vertical distance between two label papers
 - [setCls](/src/api/tspl#setcls): Clear the data of the image buffer
 - [setText](/src/api/tspl#settext): print text
 - [setPrint](/src/api/tspl#setprint): execute print

```js
import printease from 'printease'
let tspl = new printease.tspl.TsplLib()
tspl.init()
tspl.setEncoding('GB18030')
tspl.setSize(60, 40)
tspl.setGap(3, 0)
tspl.setCls()
tspl.setText(10, 10, 'TSS24.BF2', 0, 1, 1, '世界你好')
tspl.setPrint(1)
console.log(tspl.getBuffer())
```