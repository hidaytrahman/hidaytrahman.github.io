import { greetNow } from './utils';

describe('greetNow() method', function () {
	// Tests that greetNow returns 'Good morning' if current hour is less than 12
	it(`should return 'Good morning' when current hour is less than 12`, () => {
		const mockDate = new Date();
		mockDate.getHours = jest.fn(() => 10);
		const result = greetNow();
		expect(result).toBe('Good morning');
	});

	// Tests that greetNow returns 'Good afternoon' if current hour is between 12 and 17
	it(`should return 'Good afternoon' when current hour is between 12 and 17`, () => {
		const mockDate = new Date();
		mockDate.getHours = jest.fn(() => 14);
		const result = greetNow();
		expect(result).toBe('Good afternoon');
	});

	// Tests that greetNow returns 'Good evening' if current hour is greater than or equal to 18
	it(`should return 'Good evening' when current hour is greater than or equal to 18`, () => {
		const mockDate = new Date();
		mockDate.getHours = jest.fn(() => 20);
		const result = greetNow();
		expect(result).toBe('Good evening');
	});
});
