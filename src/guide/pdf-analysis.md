# pdf analysis

## javascript pdf analysis

```javascript
import printease from 'printease'
let pdf = new printease.pdfinfo.PdfInformation()
pdf.loadPdfFile(pdfFile)
    .then(res => {
        that.drawImageObj = pdf.getPdfText();
        that.imageArr = pdf.getPdfImage();
    })
```

## uniapp pdf analysis

**uniapp only supports network images,** and will support more types in the future.

```javascript
import printease from 'printease'
let webviews = new printease.webview.UniappWebview()
let pdf = new printease.pdfinfo.PdfInformation()
pdf.loadUniPdfFile('https://xxxxxxxx.cn/static/response.pdf', webviews)
    .then(res => {
        that.drawImageObj = pdf.getPdfText();
        that.imageArr = pdf.getPdfImage();
    })
```
