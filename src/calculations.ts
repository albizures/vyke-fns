/**
 * A module for mathematical calculations.
 * @module calculations
 */

/**
 * Re-maps a number from one range to 0-1 and constrains the value.
 * @param source The incoming value to be converted
 * @param start Lower bound of the value's current range
 * @param stop Upper bound of the value's current range
 * @param withinBounds Constrains the value to the newly mapped range
 * @return The new value mapped to the new range
 * @example
 * ```ts
 * const mapped = mapToUnit(50, 0, 100)
 * console.log(mapped) // 0.5
 * ```
 */
export function mapToUnit(
	source: number,
	start: number,
	stop: number,
	withinBounds = false,
) {
	return map(source, start, stop, 0, 1, withinBounds)
}

/**
 * Re-maps a number from one range to another.
 * @param source The incoming value to be converted
 * @param start1 Lower bound of the value's current range
 * @param stop1 Upper bound of the value's current range
 * @param start2 Lower bound of the value's target range
 * @param stop2 Upper bound of the value's target range
 * @param withinBounds Constrains the value to the newly mapped range
 * @return The new value mapped to the new range
 * @example
 * ```ts
 * const mapped = map(50, 0, 100, 0, 200)
 * console.log(mapped) // 100
 * ```
 */
export function map(
	source: number,
	start1: number,
	stop1: number,
	start2: number,
	stop2: number,
	withinBounds = false,
) {
	const newval
    = ((source - start1) / (stop1 - start1)) * (stop2 - start2) + start2
	if (!withinBounds) {
		return newval
	}
	if (start2 < stop2) {
		return constrain(newval, start2, stop2)
	}
	else {
		return constrain(newval, stop2, start2)
	}
}

/**
 * Constrains a value to not exceed a maximum and minimum value.
 * @param value The value to constrain
 * @param low Minimum limit
 * @param high Maximum limit
 * @return The constrained value
 * @example
 * ```ts
 * const constrained = constrain(150, 0, 100)
 * console.log(constrained) // 100
 * ```
 */
export function constrain(value: number, low: number, high: number) {
	return Math.max(Math.min(value, high), low)
}
