class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, t: int) -> int:
        c,j,n=0,0,len(arr)
        s=sum(arr[:k])
        if s>=k*t:
            c=1
        for i in range(k,n):
            s+=arr[i]-arr[j]
            if s>=k*t:
                c+=1
            j+=1
        return c
# class Solution:
#     def numOfSubarrays(self, arr: List[int], k: int, t: int) -> int:
#         total = 0
#         for i in range(len(arr)):
#             left = k
#             increment = 1
#             add = arr[i]
#             while left > 1:
#                 try:
#                     add += arr[i+increment]
#                     increment += 1
#                     left -= 1
#                 except IndexError:
#                     left -= 1
#                     add = -1
#                     pass
#             average = add/k
#             if average >= t:
#                 total += 1
#         return total