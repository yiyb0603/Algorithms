package Level1.예산;

import java.util.Arrays;

public class Solution {
  public int solution(int[] d, int budget) {
    int count = 0;
    int sum = 0;

    Arrays.sort(d);

    for (int i = 0; i < d.length; i++) {
      sum += d[i];
      count++;

      if (sum > budget) {
        count--;
        break;
      }
    }

    return count;
  }
}
