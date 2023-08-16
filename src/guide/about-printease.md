# printease


--------
Since there are many ways to connect the front-end to Bluetooth, and the printing commands are basically the same, ```printease``` is mainly used to generate printer commands. For details on how to connect to Bluetooth and send data, please refer to the documentation of the corresponding platform.

If you want to print pdf, it may be a bit difficult, because you may need a special sdk to convert pdf to printer command.

If you don't want to use the sdk, you need to recognize the text of the pdf (style, position, size, etc.) and the image of the pdf (style, position, size, etc.), and then convert them into corresponding commands. This process is very complicated, and it is also what ```printease``` wants to break through. If you have good ideas, welcome to participate. There are some open source libraries that can recognize the content of pdf or convert it into printer commands, such as: ```Ghostscript```、 ```Poppler```、 ```CUPS```、 ```pdf.js``` wait.

### Common Printing Instruction Set

- ***tspl***:Mainly designed for bar code printers of TSC company,The instruction set is mainly related to label design, barcode printing, graphics drawing, etc.
- ***esc/pos***:Primarily designed for POS printers and some types of receipt printers.
- ***PCL***:Developed by Hewlett-Packard (HP). For use with most HP LaserJet printers. Provides a rich set of instructions for controlling text, graphics, bitmaps, and other printing tasks.
- ***PostScript***:Developed by Adobe Systems.Is a page description language that can describe the layout and content of a page.Widely used in professional-grade graphics, publishing, and advanced printing.
- ***ZPL***:Developed by Zebra Technologies. Specifically designed for Zebra barcode printers.
- ***DPL***:Developed by Datamax. For use with Datamax barcode printers.
- ***CPCL***:Used with some mobile barcode printers.
- ***SPL***:A printing control language developed by Samsung.
- ......
   