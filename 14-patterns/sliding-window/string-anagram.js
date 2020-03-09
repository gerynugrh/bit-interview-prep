/*

	Given a string s and a non-empty string p, 
	find all the start indices of p's anagrams in s.

	Strings consists of lowercase English letters only 
	and the length of both strings s and p will not be larger than 20,100.

	Status: TESTED on LeetCode

*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
	// Let's create a map to record the number of character in an anagram
    const map = {};
    for (let i = 0; i < p.length; i++) {
        if (p[i] in map) {
            map[p[i]]++;
        } else {
            map[p[i]] = 1;
        }
    }

    // Create the boundary for the sliding window
    // The sliding window will be the size of anagram p
    let start = 0, end = p.length - 1;
    if (s.length < p.length) {
        return [];
    }

    // Fill the counts element for the first sliding window
    let counts = {};
    let count = 0;
    for (let i = 0; i <= end; i++) {
    	// Initialize the counts amount of each characters
        if (s[i] in counts) {
            counts[s[i]].val++;
        } else {
            counts[s[i]] = {val: 1, match: false};
        }

        // If the counts of the character is equal to the anagrams, then it's a match
        // We'll count the amount of distinct character that match
        if (counts[s[i]].val === map[s[i]]) {
            counts[s[i]].match = true;
            count++;
        } 
        // If it used to match but it doesn't now we'll decrease the amount of
        // matched distinct character
        else if (counts[s[i]].val !== map[s[i]] && counts[s[i]].match) {
            counts[s[i]].match = false;
            count--;
        }
    }

    // We check the number of supposed matched distinct characters to make the index the start
    // of the anagram
    const result = [];
    const length = Object.keys(map).length;
    if (count === length) {
        result.push(0);
    }

    // Here we move the sliding window
    while (end < s.length) {
    	// Initialize the counts amount of each characters
        if (s[start] in counts) {
            counts[s[start]].val--;
        } else {
            counts[s[start]] = {val: 1, match: false};
        }

        // If the counts of the character is equal to the anagrams, then it's a match
        // We'll count the amount of distinct character that match
        if (counts[s[start]].val === map[s[start]]) {
            counts[s[start]].match = true;
            count++;
        } 
        // If it used to match but it doesn't now we'll decrease the amount of
        // matched distinct character
        else if (counts[s[start]].val !== map[s[start]] && counts[s[start]].match) {
            counts[s[start]].match = false;
            count--;
        }
        start++;
        end++;
        if (s[end] in counts) {
            counts[s[end]].val++;
        } else {
            counts[s[end]] = {val: 1, match: false};
        }
        // If the counts of the character is equal to the anagrams, then it's a match
        // We'll count the amount of distinct character that match
        if (counts[s[end]].val === map[s[end]]) {
            counts[s[end]].match = true;
            count++;
        } 
        // If it used to match but it doesn't now we'll decrease the amount of
        // matched distinct character
        else if (counts[s[end]].val !== map[s[end]] && counts[s[end]].match) {
            counts[s[end]].match = false;
            count--;
        }

        // Now if the amount of distinct character in this sliding window is equal to anagram p
        // we save the index
        if (count === length) {
            result.push(start);
        }
    }
    return result;
};

