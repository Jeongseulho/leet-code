class Solution {
    public String reverseVowels(String s) {
        char[] words = s.toCharArray();
        int left = 0;
        int right = s.length() - 1;
        String vowels = "aeiouAEIOU";

        while(left < right) {
            while(left < right && vowels.indexOf(words[left]) == -1) left++;
            while(left < right && vowels.indexOf(words[right]) == -1) right--;

            char temp = words[left];
            words[left] = words[right];
            words[right] = temp;

            left++;
            right--;
        }

        return new String(words);
    }
}