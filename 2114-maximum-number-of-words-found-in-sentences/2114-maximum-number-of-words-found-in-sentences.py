class Solution:
    def mostWordsFound(self, sentences: List[str]) -> int:
        most = 0
        for sentence in range(len(sentences)):
            test = sentences[sentence].split(' ')
            lengthValue = len(test)
            most = max(most, lengthValue)

        return most