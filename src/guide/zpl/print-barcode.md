# print barcode <Badge type="danger" text="beta" />

## use

 - [init](/src/api/zpl#init): init the command
 - [setBarCode](/src/api/zpl#setbarcode): Draw 1D barcode
 - [setPrint](/src/api/zpl#setprint): execute print

```js
import printease from 'printease'
let zpl = new printease.zpl.ZplLib()
zpl.init() 
zpl.setBarCode(10,10,3,100,'123456')
zpl.setPrint()
console.log(zpl.getBuffer())
```