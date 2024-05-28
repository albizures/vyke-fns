import { describe, expect, it } from 'vitest'
import { compareBy } from './sort'

describe('compareBy', () => {
	it('compares objects by a property', () => {
		const arr = [
			{ name: 'John', age: 25 },
			{ name: 'Jane', age: 22 },
			{ name: 'Doe', age: 30 },
		]
		const sorted = arr.sort(compareBy('age'))
		expect(sorted).toEqual([
			{ name: 'Jane', age: 22 },
			{ name: 'John', age: 25 },
			{ name: 'Doe', age: 30 },
		])
	})
})
