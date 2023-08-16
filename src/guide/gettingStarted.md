# gettingStarted
## Install

```bash
npm install printease
```

## use

It is relatively simple to use, for example, we can use the following statement to print a piece of content

### print text

```js
import printsea from 'printease'
let tspl = new printsea.tspl.TsplLib()
tspl.init()
tspl.setSize(60, 40)
tspl.setGap(0, 0)
tspl.setCls()
tspl.setText(50,50,'3',0,1,1,'Hello, Printease!')
tspl.setPrint(1)
console.log(tspl.getBuffer())
```

You can see that we have used ```tspl.getBuffer()``` to get a piece of buffer data, you need to connect to the printer, and then send the buffer content to the printer, and the printer will perform a printing process.










