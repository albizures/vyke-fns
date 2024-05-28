import { describe, expect, it } from 'vitest'
import { outItem } from './filter'

describe('outItem', () => {
	it('filters out an item from an array', () => {
		const arr = [1, 2, 3, 4, 5]
		const filtered = arr.filter(outItem(3))
		expect(filtered).toEqual([1, 2, 4, 5])
	})
})
