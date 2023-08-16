# print QR code

## use
    
```js
import printease from 'printease'
let tspl = new printease.tspl.TsplLib()
tspl.init()
tspl.setSize(60, 40)
tspl.setGap(0, 0)
tspl.setCls()
tspl.setQRCode(10, 10, 'L', 5, 'A', 0, '123456789')
tspl.setPrint(1)
console.log(tspl.getBuffer())
```