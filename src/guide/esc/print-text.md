# print text <Badge type="danger" text="beta" />

## use

 - [init](/src/api/esc#init): init the command
 - [setAlign](/src/api/esc#setalign): Set align
 - [setText](/src/api/esc#settext): print text
 - [setPrint](/src/api/esc#setprint): execute print


```js
import printease from 'printease'
let esc = new printease.esc.EscLib()
esc.init()
esc.setAlign(1)
esc.setText('Hello, Printease!')
esc.setPrint()
console.log(esc.getBuffer())
```