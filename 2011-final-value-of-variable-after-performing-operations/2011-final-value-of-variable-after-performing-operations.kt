class Solution {
    fun finalValueAfterOperations(operations: Array<String>): Int {
        var count = 0
        for (item in operations){
            if (item == "++X" || item == "X++") {
                count += 1
            } else if (item == "--X" || item == "X--") {
                count -= 1
            }
        }
        return count
    }
}