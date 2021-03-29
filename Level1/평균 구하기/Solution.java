class Solution {
  public double solution(int[] arr) {
    double total = 0.0;

    for (int i = 0; i < arr.length; i++) {
      total += arr[i];
    }

    return total / arr.length;
  }
}