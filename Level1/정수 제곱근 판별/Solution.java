class Solution {
  public long solution(long n) {
    long sqrtNum = (long) Math.sqrt(n);

    if ((int) sqrtNum != Math.sqrt(n)) {
      return -1;
    }

    return (sqrtNum + 1) * (sqrtNum + 1);
  }
}