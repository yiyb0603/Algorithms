import java.util.Arrays;

class Solution {
  public long solution(long n) {
    String answer = "";
    char[] nums = Long.toString(n).toCharArray();
    Arrays.sort(nums);

    for (int i = nums.length - 1; i >= 0; i--) {
      answer += String.valueOf(nums[i]);
    }

    return Long.parseLong(answer);
  }
}