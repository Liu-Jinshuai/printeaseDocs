# set the charset

## use

The default is ```utf-8``` encoding, you need to set it to the encoding you need

```js
import printsea from 'printease'
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