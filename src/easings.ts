/**
 * Easing functions for animations.
 * @module
 */

/**
 * Easing function that accelerates quickly and then slows down.
 */
export function easeInSine(x: number): number {
	return 1 - Math.cos((x * Math.PI) / 2)
}

/**
 * Easing function that decelerates quickly and then slows down.
 */
export function easeOutSine(x: number): number {
	return Math.sin((x * Math.PI) / 2)
}

/**
 * Easing function that accelerates quickly, slows down, and then accelerates again.
 */
export function easeInOutSine(x: number): number {
	return -(Math.cos(Math.PI * x) - 1) / 2
}

/**
 * Easing function that accelerates quickly and then slows down.
 */
export function easeInQuad(x: number): number {
	return x * x
}

/**
 * Easing function that decelerates quickly and then slows down.
 */
export function easeOutQuad(x: number): number {
	return 1 - (1 - x) * (1 - x)
}

/**
 * Easing function that accelerates quickly, slows down, and then accelerates again.
 */
export function easeInOutQuad(x: number): number {
	if (x < 0.5) {
		return 2 * x * x
	}
	else {
		return 1 - (-2 * x + 2) ** 2 / 2
	}
}

/**
 * Easing function that accelerates quickly and then slows down.
 */
export function easeInCubic(x: number): number {
	return x * x * x
}

/**
 * Easing function that decelerates quickly and then slows down.
 */
export function easeOutCubic(x: number): number {
	return 1 - (1 - x) ** 3
}

/**
 * Easing function that accelerates quickly, slows down, and then accelerates again.
 */
export function easeInOutCubic(x: number): number {
	if (x < 0.5) {
		return 4 * x * x * x
	}
	else {
		return 1 - (-2 * x + 2) ** 3 / 2
	}
}

/**
 * Easing function that accelerates quickly and then slows down.
 */
export function easeInQuart(x: number): number {
	return x ** 4
}

/**
 * Easing function that decelerates quickly and then slows down.
 */
export function easeOutQuart(x: number): number {
	return 1 - (1 - x) ** 4
}

/**
 * Easing function that accelerates quickly, slows down, and then accelerates again.
 */
export function easeInOutQuart(x: number): number {
	if (x < 0.5) {
		return 8 * x * x * x * x
	}
	else {
		return 1 - (-2 * x + 2) ** 4 / 2
	}
}

/**
 * Easing function that accelerates quickly and then slows down.
 */
export function easeInQuint(x: number): number {
	return x ** 5
}

/**
 * Easing function that decelerates quickly and then slows down.
 */
export function easeOutQuint(x: number): number {
	return 1 - (1 - x) ** 5
}

/**
 * Easing function that accelerates quickly, slows down, and then accelerates again.
 */
export function easeInOutQuint(x: number): number {
	if (x < 0.5) {
		return 16 * x * x * x * x * x
	}
	else {
		return 1 - (-2 * x + 2) ** 5 / 2
	}
}

/**
 * Easing function that accelerates quickly and then slows down.
 */
export function easeInExpo(x: number): number {
	if (x === 0) {
		return 0
	}
	else {
		return 2 ** (10 * x - 10)
	}
}

/**
 * Easing function that decelerates quickly and then slows down.
 */
export function easeOutExpo(x: number): number {
	if (x === 1) {
		return 1
	}
	else {
		return 1 - 2 ** (-10 * x)
	}
}

/**
 * Easing function that accelerates quickly, slows down, and then accelerates again.
 */
export function easeInOutExpo(x: number): number {
	if (x === 0) {
		return 0
	}

	if (x === 1) {
		return 1
	}

	if (x < 0.5) {
		return 2 ** (20 * x - 10) / 2
	}

	return (2 - 2 ** (-20 * x + 10)) / 2
}

/**
 * Easing function that accelerates quickly and then slows down.
 */
export function easeInCirc(x: number): number {
	return 1 - Math.sqrt(1 - x ** 2)
}

/**
 * Easing function that decelerates quickly and then slows down.
 */
export function easeOutCirc(x: number): number {
	return Math.sqrt(1 - (x - 1) ** 2)
}

/**
 * Easing function that accelerates quickly, slows down, and then accelerates again.
 */
export function easeInOutCirc(x: number): number {
	if (x < 0.5) {
		return (1 - Math.sqrt(1 - (2 * x) ** 2)) / 2
	}
	else {
		return (Math.sqrt(1 - (-2 * x + 2) ** 2) + 1) / 2
	}
}

/**
 * Easing function that accelerates quickly and then slows down.
 */
export function easeInBack(x: number): number {
	const c1 = 1.70158
	const c3 = c1 + 1

	return c3 * x * x * x - c1 * x * x
}

/**
 * Easing function that decelerates quickly and then slows down.
 */
export function easeOutBack(x: number): number {
	const c1 = 1.70158
	const c3 = c1 + 1

	return 1 + c3 * (x - 1) ** 3 + c1 * (x - 1) ** 2
}

/**
 * Easing function that accelerates quickly, slows down, and then accelerates again.
 */
export function easeInOutBack(x: number): number {
	const c1 = 1.70158
	const c2 = c1 * 1.525

	if (x < 0.5) {
		return ((2 * x) ** 2 * ((c2 + 1) * 2 * x - c2)) / 2
	}
	else {
		return ((2 * x - 2) ** 2 * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2
	}
}

/**
 * Easing function that accelerates quickly and then slows down.
 */
export function easeInElastic(x: number): number {
	const c4 = (2 * Math.PI) / 3

	if (x === 0) {
		return 0
	}
	else if (x === 1) {
		return 1
	}
	else {
		return -(2 ** (10 * x - 10)) * Math.sin((x * 10 - 10.75) * c4)
	}
}

/**
 * Easing function that decelerates quickly and then slows down.
 */
export function easeOutElastic(x: number): number {
	const c4 = (2 * Math.PI) / 3

	if (x === 0) {
		return 0
	}
	else if (x === 1) {
		return 1
	}
	else {
		return 2 ** (-10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1
	}
}

/**
 * Easing function that accelerates quickly, slows down, and then accelerates again.
 */
export function easeInOutElastic(x: number): number {
	const c5 = (2 * Math.PI) / 4.5

	if (x === 0) {
		return 0
	}
	else if (x === 1) {
		return 1
	}
	else if (x < 0.5) {
		return -(2 ** (20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2
	}
	else {
		return (2 ** (-20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1
	}
}

/**
 * Easing function that accelerates quickly and then slows down.
 */
export function easeInBounce(x: number): number {
	return 1 - easeOutBounce(1 - x)
}

/**
 * Easing function that decelerates quickly and then slows down.
 */
export function easeOutBounce(x: number): number {
	const n1 = 7.5625
	const d1 = 2.75

	if (x < 1 / d1) {
		return n1 * x * x
	}
	else if (x < 2 / d1) {
		return n1 * (x -= 1.5 / d1) * x + 0.75
	}
	else if (x < 2.5 / d1) {
		return n1 * (x -= 2.25 / d1) * x + 0.9375
	}
	else {
		return n1 * (x -= 2.625 / d1) * x + 0.984375
	}
}

/**
 * Easing function that accelerates quickly, slows down, and then accelerates again.
 */
export function easeInOutBounce(x: number): number {
	if (x < 0.5) {
		return (1 - easeOutBounce(1 - 2 * x)) / 2
	}
	else {
		return (1 + easeOutBounce(2 * x - 1)) / 2
	}
}
