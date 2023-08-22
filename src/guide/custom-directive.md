# custom directive

Since printease is still being updated, it may not be able to meet all your needs, so a custom instruction operation has been added

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