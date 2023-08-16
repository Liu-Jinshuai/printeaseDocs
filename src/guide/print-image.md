# print image

## js use

```js
import printease from 'printease'
let imageData = [0, 0, 0, 0, 0, 0, 7, 255, 3, 255, 17, 255, 24, 255, 28, 127, 30, 63, 31, 31, 31, 143, 31, 199, 31, 227, 31, 231, 31, 255, 31, 255]
let tspl = new printease.tspl.TsplLib()
tspl.init()
tspl.setSize(60, 40)
tspl.setGap(0, 0)
tspl.setCls()
tspl.setBitmap(200, 200, 16, 16, 0, imageData)
tspl.setPrint(1)
console.log(tspl.getBuffer())
```

## js use with imagePixelInformation

If you don't want to organize the image data yourself, you can use ```imagePixelInformation``` for processing, like this:

```js
import printease from 'printease'
import img from './test.png'
let ctx = new printease.imagePixelInformation.JavaScriptImagePixelInformation(100);
ctx.getImageData(img,200,300,(res)=>{
    let tspl = new printease.tspl.TsplLib()
    tspl.init()
    tspl.setSize(60, 40)
    tspl.setGap(0, 0)
    tspl.setCls()
    tspl.setBitmap(10, 10, res.width, res.height, 0, res.data)
    tspl.setPrint(1)
    console.log(tspl.getBuffer())
})
```

## uniapp use with UniappImagePixelInformation

If you use uniapp, please use the ```uniGetImageData``` method of ```UniappImagePixelInformation```. eg: ```ctx.uniGetImageData('myCanvas','./test.png',200,300,(res)=>{})```


```js
let ctx = new printease.imagePixelInformation.UniappImagePixelInformation(100);
ctx.uniGetImageData('myCanvas',img,200,300,()=>{
    let tspl = new printease.tspl.TsplLib()
    tspl.init()
    tspl.setSize(60, 40)
    tspl.setGap(0, 0)
    tspl.setCls()
    tspl.setBitmap(10, 10, res.width, res.height, 0, res.data)
    tspl.setPrint(1)
    console.log(tspl.getBuffer())
})
```

::: warning
Due to some limitations of ```uniapp```, you need to create a canvas in advance. In addition, the width and height of the canvas should be set larger than the width and height of the graphics you want to print
:::
