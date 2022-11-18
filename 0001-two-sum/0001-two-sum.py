class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash = {}
        for i in range(len(nums)):
            hash[nums[i]] = i
        for j in range(len(nums)):
            value = target-nums[j]
            if value in hash and hash[value] != j:
                return [j, hash[value]]