# print text

## use

```js
import printease from 'printease'
let tspl = new printease.tspl.TsplLib()
tspl.init()
tspl.setSize(60, 40)
tspl.setGap(0, 0)
tspl.setCls()
tspl.setText(50,50,'3',0,1,1,'Hello, Printease!')
tspl.setPrint(1)
console.log(tspl.getBuffer())
```