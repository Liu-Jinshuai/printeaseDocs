# print barcode

## use

```js
import printsea from 'printease'
let tspl = new printsea.tspl.TsplLib()
tspl.init()
tspl.setSize(60, 40)
tspl.setGap(0, 0)
tspl.setCls()
tspl.setBarCode(10, 10, '39', 100, 1, 0, 2, 4, '123456789')
tspl.setPrint(1)
console.log(tspl.getBuffer())
```

Similarly, you should send the content obtained by ```tspl.getBuffer()``` to the printer, otherwise it is just a console print