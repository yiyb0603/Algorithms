function solution(citations) {
	citations.sort();

	for (let i = citations.length; i >= 0; i--) {
		const citationCount = citations.filter((citation) => citation >= i).length;

		if (citationCount >= i) {
			return i;
		}
	}
}
