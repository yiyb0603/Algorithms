package Level1.폰켓몬;

import java.util.Arrays;

public class Solution {
  public int solution(int[] nums) {
    int count = 1;
    int divide = nums.length / 2;

    Arrays.sort(nums);

    for (int i = 0; i < nums.length - 1; i++) {
      if (nums[i] != nums[i + 1] && count < divide) {
        count++;
      }
    }

    return count;
  }
}
