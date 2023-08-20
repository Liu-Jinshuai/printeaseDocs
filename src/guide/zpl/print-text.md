# print text <Badge type="danger" text="beta" />

## use

 - [init](/src/api/zpl#init): init the command
 - [setText](/src/api/zpl#settext): print text
 - [setPrint](/src/api/zpl#setprint): execute print

```js
import printease from 'printease'
let zpl = new printease.zpl.ZplLib()
zpl.init()
zpl.setText(10, 10, '世界你好')
zpl.setPrint()
console.log(zpl.getBuffer())
```