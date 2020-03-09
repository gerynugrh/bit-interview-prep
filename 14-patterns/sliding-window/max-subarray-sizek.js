/*
	Given an integer array nums, 
	find the contiguous subarray (containing K numbers) 
	which has the largest sum and return its sum.

	Status: NOT TESTED
*/

const maxSubArray = function(nums, k) {
	// Create the starting point of the sliding window
	let start = 0, max = Number.NEGATIVE_INFINITY;
	let startMax = 0;

	// Calculate the sum of the initial window
	for (let i = start; i < start + k; i++) {
		sum += nums[i];
	}

	// Note the start of the subarray with maximum sums
	if (sum > max) {
		max = sum;
		startMax = 0;
	}

	// Move the sliding window to the right
	for (let i = 0; i < nums.length - k; i++) {
		sum -= nums[start + i];
		sum += nums[start + i + k];

		if (sum > max) {
			max = sum;
			startMax = 0;
		}
	}

	return nums.slice(startMax, startMax + k);
}