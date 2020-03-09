In sliding window problem, we usually have fixed size of sliding window in array that moves left or right.

1. Maximum subarray of size 'K' O(n)

... a. Create a sliding window with the size of K

... b. When sliding window moves

... ... i. Substract removed element from sum

... ... ii. Add inserted element to sum

... c. Find maximum sum and note the index


2. Longest substring with 'K' distinct character O(n)

... a. Create a map and insert character into the map until number of key in the map is larger than K

... ... i. From the leftmost of the string, remove a character from the map until the size of map is K

... b. Insert more characters to the map, note the length of the substring



3. String anagrams O(n)

... a. Create a sliding window the size of the anagram

... b. Counts the number of each character in the sliding window

... ... i. Compare it to the supposed number of characters in the anagram

... ... ii. If it's equal, increase the count (number of matched character)

... ... iii. If it's used to be equal, decrease the count (We can check the equality by having array of matched)



Print the index when the number of matched character is equal to the anagrams length