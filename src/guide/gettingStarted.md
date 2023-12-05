# gettingStarted
## Install

```bash
npm install printease
```

## Preface

Each printer supports a different set of commands. You should first search for the command set supported by the printer you are using.

**If your printer does not support the ```tspl``` command set, it is recommended that you use a [custom command set](/src/guide/custom-directive)**

 - **[custom command set](/src/guide/custom-directive)**

## use

It is relatively simple to use, for example, we can use the following statement to print a piece of content

### print text

- [tspl command](/src/guide/tspl/print-text)
- [zpl command](/src/guide/zpl/print-text)
- [esc command](/src/guide/esc/print-text)

You can see that we have used ```tspl.getBuffer()``` to get a piece of buffer data, you need to connect to the printer, and then send the buffer content to the printer, and the printer will perform a printing process.

If there is no instruction set that meets your needs, maybe you need a [custom instruction](/src/guide/custom-directive)


::: info more
**Due to the large number of instructions, it is being updated gradually. . .sorry for the inconvenience.**
:::










