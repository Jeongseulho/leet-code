class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        int maxCandies = Arrays.stream(candies).max().getAsInt();
        List<Boolean> ans = new ArrayList<>();

        for (int candy : candies) {
            ans.add(candy + extraCandies >= maxCandies);
        }

        return ans;
    }
}