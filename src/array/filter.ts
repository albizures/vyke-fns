/**
 * Functions for filtering arrays
 * @module filter
 */

/**
 * Filter out an item from an array
 * @example
 * ```ts
 * const arr = [1, 2, 3, 4, 5]
 * const filtered = arr.filter(outItem(3))
 * console.log(filtered) // [1, 2, 4, 5]
 * ```
 */
export function outItem<T>(item: T): (current: T) => boolean {
	return (current: T) => {
		return item !== current
	}
}
