# Interface: CustomDirective

### command

• **command**: `number`[]

#### Defined in

interface/CustomDirective.ts:2

___

### encoding

• **encoding**: `string`

#### Defined in

interface/CustomDirective.ts:3

___

### getBuffer

• **getBuffer**: () => `ArrayBuffer`

#### Type declaration

▸ (): `ArrayBuffer`

@description: Get print command (Buffer)

##### Returns

`ArrayBuffer`

Returns the print command (Buffer)

#### Defined in

interface/CustomDirective.ts:13

___

### getCommand

• **getCommand**: () => `number`[]

#### Type declaration

▸ (): `number`[]

@description: get print command

##### Returns

`number`[]

return print command

#### Defined in

interface/CustomDirective.ts:8

___

### setCommand

• **setCommand**: (`command`: `string` \| `number`[]) => `void`

#### Type declaration

▸ (`command`): `void`

@description: set custom command

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` \| `number`[] | set print command |

##### Returns

`void`

#### Defined in

interface/CustomDirective.ts:19

___

### setEncoding

• **setEncoding**: (`encoding`: `string`) => `void`

#### Type declaration

▸ (`encoding`): `void`

@description: Set encoding type

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | `string` | encoding type |

##### Returns

`void`

#### Defined in

interface/CustomDirective.ts:25

___

### setNewLine

• **setNewLine**: () => `void`

#### Type declaration

▸ (): `void`

@description: new line

##### Returns

`void`

#### Defined in

interface/CustomDirective.ts:30
