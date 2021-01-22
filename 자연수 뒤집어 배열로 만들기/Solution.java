class Solution {
  public int[] solution(long n) {
    String nums = String.valueOf(n);
    int[] answer = new int[nums.length()];

    int count = 0;

    for (int i = nums.length() - 1; i >= 0; i--) {
      answer[count++] = Integer.parseInt(String.valueOf(nums.charAt(i)));
    }

    return answer;
  }
}