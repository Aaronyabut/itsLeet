class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        answer = []
        for i in range(n):
            position = i+1
            if position % 3 == 0 and position % 5 == 0:
                answer.append("FizzBuzz")
            elif position % 3 == 0:
                answer.append("Fizz")
            elif position % 5 == 0:
                answer.append("Buzz")
            else:
                answer.append(str(position))
        return answer