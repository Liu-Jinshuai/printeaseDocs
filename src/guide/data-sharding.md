# data sharding

When using Bluetooth for data transmission, sometimes due to the limitation of low-power Bluetooth data size, we may need to fragment the data for each transmission, otherwise problems may occur

## 1. fetchCallback

```js
import printease from 'printease'
const fragmentSize = 20;
const dataBuffer = new ArrayBuffer(100);
function processBuffer(theBuffer, next) {
    if (!theBuffer.byteLength) {
        console.error('send data complete')
        return;
    }
    // Here is just an example of sending Bluetooth data, please modify it according to your own situation.
    writeBLECharacteristicValue({
        deviceId: deviceId,
        serviceId: serviceId,
        characteristicId: characteristicId,
        value: theBuffer,
        success: () => {
            const nextChunk = next.next();
            processBuffer(nextChunk.value, next);
        }
    })
    
}
printease.dataProcessing.fetchCallback(dataBuffer, fragmentSize, processBuffer);

```

"fragmentSize" is the fragment size, it is recommended to set 20.

***writeBLECharacteristicValue*** is the method of sending data for you, you can modify it according to your own situation, here is just an example.