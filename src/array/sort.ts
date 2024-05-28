/**
 * Functions for sorting arrays.
 * @module sort
 *
 */

/**
 * Sorts an array of objects by a property.
 * @example
 * ```ts
 * const arr = [
 * 	{ name: 'John', age: 25 },
 * 	{ name: 'Jane', age: 22 },
 * 	{ name: 'Doe', age: 30 }
 * ]
 * const sorted = arr.sort(compareBy('age'))
 * console.log(sorted)
 * // [
 * //  { name: 'Jane', age: 22 },
 * //  { name: 'John', age: 25 },
 * //  { name: 'Doe', age: 30 }
 * // ]
 * ```
 */
export function compareBy<T, A extends keyof T>(property: A): (a: T, b: T) => number {
	return (a: T, b: T) => {
		if (a[property] < b[property]) {
			return -1
		}

		if (a[property] > b[property]) {
			return 1
		}

		return 0
	}
}
