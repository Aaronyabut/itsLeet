class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) == 0:
            return 0 
        s += '0'

        start = 0
        end = 1
        longestSubCount = 1

        while end < len(s):
            currentSub = s[start:end]
            currentCount = len(currentSub)
            if s[end] not in currentSub:
                end += 1
            elif s[end] in currentSub:
                start += 1
            else:
                end += 1
            longestSubCount = max(longestSubCount,currentCount)

        return longestSubCount


