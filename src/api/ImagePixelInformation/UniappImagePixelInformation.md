# Class: UniappImagePixelInformation

**`Classdesc`**

JavaScript gets image pixel information

**`Implements`**

ImagePixelInformationInterface

**`Classes`**

UniappImagePixelInformation

**`Param`**

grayscale threshold（default 100）

## Hierarchy

- `ImagePixelInformation`

  ↳ **`UniappImagePixelInformation`**


## Constructors

### constructor

• **new UniappImagePixelInformation**(`grayThreshold`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `grayThreshold` | `number` |

#### Overrides

ImagePixelInformation.constructor

#### Defined in

[components/imagePixelInformation/index.ts:60](https://github.com/Liu-Jinshuai/printease/blob/e9c15cc/src/components/imagePixelInformation/index.ts#L60)

## Properties

### grayThreshold

• **grayThreshold**: `number`

@description: grayscale threshold（default 100）

#### Defined in

[components/imagePixelInformation/index.ts:59](https://github.com/Liu-Jinshuai/printease/blob/e9c15cc/src/components/imagePixelInformation/index.ts#L59)

## Methods

### uniGetImageData

▸ **uniGetImageData**(`canvasId`, `imageResource`, `width?`, `height?`, `callback`): `void`

@description: Uniapp Get image pixel information（rgba）

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `canvasId` | `string` | `undefined` | canvas id |
| `imageResource` | `string` | `undefined` | image path |
| `width` | `number` | `256` | The width of the rectangle from which the pixel data will be retrieved; |
| `height` | `number` | `256` | The height of the rectangle from which the pixel data will be retrieved |
| `callback` | (`pixelInformation`: `object`) => `void` | `undefined` | callback function |

#### Returns

`void`


#### Inherited from

ImagePixelInformation.uniGetImageData

#### Defined in

[components/imagePixelInformation/index.ts:8](https://github.com/Liu-Jinshuai/printease/blob/e9c15cc/src/components/imagePixelInformation/index.ts#L8)