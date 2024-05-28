import { describe, expect, it } from 'vitest'
import { constrain, map, mapToUnit } from './calculations'

describe('mapToUnit', () => {
	it('maps a number to a unit value', () => {
		expect(mapToUnit(50, 0, 100)).toBe(0.5)
	})
})

describe('map', () => {
	it('maps a number to a new range', () => {
		expect(map(50, 0, 100, 0, 200)).toBe(100)
	})
})

describe('constrain', () => {
	it('constrains a value within a range', () => {
		expect(constrain(150, 0, 100)).toBe(100)
	})
})
