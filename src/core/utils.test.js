import { getAdultStatus, getRepos, greetNow, hexCodeStringOnly } from './utils';

// Mock the fetch function
global.fetch = jest.fn();

describe('greetNow() method', function () {
	// Mock the Date object to control the current hour in tests
	const originalDate = Date;
	const mockDate = new Date('2023-09-09T09:00:00'); // Set the date and time for testing

	beforeAll(() => {
		global.Date = class extends Date {
			constructor() {
				super();
				return mockDate;
			}
		};
	});

	afterAll(() => {
		global.Date = originalDate;
	});

	it('should return "Good morning" when the hour is less than 12', () => {
		const greeting = greetNow();
		expect(greeting).toBe('Good morning');
	});

	it('should return "Good afternoon" when the hour is between 12 and 18', () => {
		// Set the time to 15:00 (3:00 PM)
		mockDate.setHours(15);
		const greeting = greetNow();
		expect(greeting).toBe('Good afternoon');
	});

	it('should return "Good evening" when the hour is greater than or equal to 18', () => {
		// Set the time to 20:00 (8:00 PM)
		mockDate.setHours(20);
		const greeting = greetNow();
		expect(greeting).toBe('Good evening');
	});

	// Tests that greetNow returns 'Good evening' if current hour is greater than or equal to 18
	it(`should return 'Good evening' when current hour is greater than or equal to 18`, () => {
		const mockDate = new Date();
		mockDate.getHours = jest.fn(() => 20);
		const result = greetNow();
		expect(result).toBe('Good evening');
	});
});

describe('hexCodeStringOnly', () => {
	it('should remove the "#" character from a hex code', () => {
		const inputHex = '#FF0000';
		const result = hexCodeStringOnly(inputHex);
		expect(result).toBe('FF0000');
	});

	it('should not modify the string if it does not start with "#"', () => {
		const inputHex = 'FF00FF';
		const result = hexCodeStringOnly(inputHex);
		console.debug(result);
		expect(result).toBe('FF00FF');
	});

	it('should handle lowercase hex codes', () => {
		const inputHex = '#00aabb';
		const result = hexCodeStringOnly(inputHex);
		expect(result).toBe('00aabb');
	});

	it('should handle mixed-case hex codes', () => {
		const inputHex = '#AbCdEf';
		const result = hexCodeStringOnly(inputHex);
		expect(result).toBe('AbCdEf');
	});

	it('should return an empty string if the input is an empty string', () => {
		const inputHex = '';
		const result = hexCodeStringOnly(inputHex);
		expect(result).toBe('');
	});
});

describe('getAdultStatus() method', function () {
	// Tests that the function returns 'adult' when the age is greater than 18
	it(`should return 'adult' when age is greater than 18`, () => {
		expect(getAdultStatus(19)).toBe('adult');
	});

	// Tests that the function returns 'kid' when the age is less than 18
	it(`should return 'kid' when age is less than 18`, () => {
		expect(getAdultStatus(17)).toBe('kid');
	});
});
