class Solution {
    public String mergeAlternately(String word1, String word2) {
        StringBuilder merged = new StringBuilder();
        int len1 = word1.length(), len2 = word2.length();
        for (int i = 0; i < Math.max(len1, len2); i++) {
            if (i < len1) merged.append(word1.charAt(i));
            if (i < len2) merged.append(word2.charAt(i));
        }
        
        return merged.toString();
    }
}
