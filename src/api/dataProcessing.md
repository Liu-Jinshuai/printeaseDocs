# Module: types/dataProcessing

### Fragmentation

Ƭ **Fragmentation**: (`buffer`: `ArrayBuffer`, `fragmentSize`: `number`, `callback`: (`fragment`: `ArrayBuffer`, `iterator`: `Iterator`<`ArrayBuffer`\>) => `void`) => `void`

#### Type declaration

▸ (`buffer`, `fragmentSize`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBuffer` |
| `fragmentSize` | `number` |
| `callback` | (`fragment`: `ArrayBuffer`, `iterator`: `Iterator`<`ArrayBuffer`\>) => `void` |

##### Returns

`void`

**`Description`**

Shard the arraybuffer data

#### Defined in

types/dataProcessing.ts:8
