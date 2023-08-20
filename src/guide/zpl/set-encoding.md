# set the charset <Badge type="danger" text="beta" />

## use

The default is ```utf-8``` encoding, you need to set it to the encoding you need

 - [init](/src/api/zpl#init): init the command
 - [setEncoding](/src/api/zpl#setencoding): Set encoding type
 - [setPrint](/src/api/zpl#setprint): execute print

```js
import printease from 'printease'
let zpl = new printease.zpl.ZplLib()
zpl.init()
zpl.setEncoding('GB18030')
zpl.setText(10, 10, '世界你好')
zpl.setPrint()
console.log(zpl.getBuffer())
```