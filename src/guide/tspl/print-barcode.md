# print barcode

## use

 - [init](/src/api/tspl#init): init the command
 - [setSize](/src/api/tspl#setsize): Set the width and length of the label paper
 - [setGap](/src/api/tspl#setgap): Set the vertical distance between two label papers
 - [setCls](/src/api/tspl#setcls): Clear the data of the image buffer
 - [setBarCode](/src/api/tspl#setbarcode): Draw 1D barcode
 - [setPrint](/src/api/tspl#setprint): execute print

```js
import printease from 'printease'
let tspl = new printease.tspl.TsplLib()
tspl.init()
tspl.setSize(60, 40)
tspl.setGap(0, 0)
tspl.setCls()
tspl.setBarCode(10, 10, '39', 100, 1, 0, 2, 4, '123456789')
tspl.setPrint(1)
console.log(tspl.getBuffer())
```

Similarly, you should send the content obtained by ```tspl.getBuffer()``` to the printer, otherwise it is just a console print