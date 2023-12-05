# custom directive

Since printease is still being updated, it may not be able to meet all your needs, so a custom instruction operation has been added

## Instruction set document pdf

[Download](https://github.com/Liu-Jinshuai/printease/tree/master/commandFile)

## start

![zpzl文档](/public/zpzl.png)

For example, when we see this pdf document, we can see that the document describes an instruction, then we can write like this:

```js
import printease from 'printease'
let cude = new printease.customDirective.CustomDirectiveLib()
// cude.setEncoding('GB18030')
cude.setCommand('^XA')
cude.setNewLine()
cude.setCommand('^FO50,50')
cude.setNewLine()
cude.setCommand('^A0,32,25')
cude.setNewLine()
cude.setCommand('^FDZEBRA^FS')
cude.setNewLine()
cude.setCommand('^FO50,150')
cude.setNewLine()
cude.setCommand('^A0,32,25')
cude.setNewLine()
cude.setCommand('^FDPROGRAMMING^FS')
cude.setNewLine()
cude.setCommand('^FO50,250')
cude.setNewLine()
cude.setCommand('^A0,32,25^FDLANGUAGE^FS')
cude.setNewLine()
cude.setCommand('^XZ')
cude.setNewLine()
console.log(cude.getBuffer())
```

That's it, you can do whatever you want with reference to this pdf
Isn’t it convenient to customize instructions? After the buffer data is obtained, it can be transferred to the printer.

## method

 - [setEncoding](/src/api/customDirective#setencoding): Set encoding type
 - [setCommand](/src/api/customDirective#setcommand): set custom command
 - [setNewLine](/src/api/customDirective#setnewline): new line
 - [getCommand](/src/api/customDirective#getcommand): get print command
 - [getBuffer](/src/api/customDirective#getbuffer): Get print command (Buffer)

### setCommand

Set custom command

```js
import printease from 'printease'
let cude = new printease.customDirective.CustomDirectiveLib()
// cude.setEncoding('GB18030')
cude.setCommand('SIZE 60 mm, 40 mm')
cude.setNewLine()
cude.setCommand('GAP 0 mm, 0 mm')
cude.setNewLine()
// ....... other commands
console.log(cude.getBuffer())
```

You can pass this ```buffer``` data to the printer.

### bitmap

If you have custom bitmap data, please pass in an array, otherwise your bitmap data will be encoded, resulting in incorrect

For example, your bitmap data format ```BITMAP 10,20,10,15,30```

```js
import printease from 'printease'
let cude = new printease.customDirective.CustomDirectiveLib()
// cude.setEncoding('GB18030')
cude.setCommand('BITMAP')
cude.setCommand([10,20,10,15,30])
cude.setNewLine()
// ....... other commands
console.log(cude.getBuffer())
```