# print text

## use

 - [init](/src/api/tspl#init): init the command
 - [setSize](/src/api/tspl#setsize): Set the width and length of the label paper
 - [setGap](/src/api/tspl#setgap): Set the vertical distance between two label papers
 - [setCls](/src/api/tspl#setcls): Clear the data of the image buffer
 - [setText](/src/api/tspl#settext): print text
 - [setPrint](/src/api/tspl#setprint): execute print


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

You can see that we have used ```tspl.getBuffer()``` to get a piece of buffer data, you need to connect to the printer, and then send the buffer content to the printer, and the printer will perform a printing process.