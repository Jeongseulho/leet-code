class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        if(n == 0) return true;
        int plantCnt = 0;
        for(int i = 0; i < flowerbed.length; i++) {
            if(flowerbed[i] == 0 && checkLeft(flowerbed, i) && checkRight(flowerbed, i)) {
                flowerbed[i] = 1;
                plantCnt += 1;
            }

            if(plantCnt == n) return true;
        }

        return false;
    }

    public boolean checkLeft(int[] flowerbed, int i) {
        if(i == 0 || flowerbed[i - 1] == 0) return true;
        return false;
    }

    public boolean checkRight(int[] flowerbed, int i) {
        if(i == flowerbed.length - 1 || flowerbed[i + 1] == 0) return true;
        return false;
    }
}