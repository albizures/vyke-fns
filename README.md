<div align="center">
	<h1>
		@vyke/fns
	</h1>
</div>

Several functions with different scope with small in nature

## Installation
```sh
npm i @vyke/fns -D
```

## API
### outItem
Filter out an item from an array

```ts
const arr = [1, 2, 3, 4, 5]
const filtered = arr.filter(outItem(3))
console.log(filtered) // [1, 2, 4, 5]
```

### compareBy
Sorts an array of objects by a property.

```ts
const arr = [
	{ name: 'John', age: 25 },
	{ name: 'Jane', age: 22 },
	{ name: 'Doe', age: 30 }
]
const sorted = arr.sort(compareBy('age'))
console.log(sorted)
// [
//  { name: 'Jane', age: 22 },
//  { name: 'John', age: 25 },
//  { name: 'Doe', age: 30 }
// ]
```

### mapToUnit
Re-maps a number from one range to 0-1 and constrains the value.

### map
Re-maps a number from one range to another.

### constrain
Constrains a value to not exceed a maximum and minimum value.

## Others vyke projects
- [Flowmodoro app by vyke](https://github.com/albizures/vyke-flowmodoro)
- [@vyke/results](https://github.com/albizures/vyke-results)
- [@vyke/val](https://github.com/albizures/vyke-val)
- [@vyke/dom](https://github.com/albizures/vyke-dom)
