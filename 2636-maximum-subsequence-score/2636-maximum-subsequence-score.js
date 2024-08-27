/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    class MinHeap {
        constructor() {
            this.heap = [];
        }

        size() {
            return this.heap.length;
        }

        isEmpty() {
            return this.size() === 0;
        }

        parent(i) {
            return Math.floor((i - 1) / 2);
        }

        leftChild(i) {
            return 2 * i + 1;
        }

        rightChild(i) {
            return 2 * i + 2;
        }

        swap(i, j) {
            [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
        }

        shiftUp(i) {
            while (i > 0 && this.heap[this.parent(i)] > this.heap[i]) {
            this.swap(i, this.parent(i));
            i = this.parent(i);
            }
        }

        shiftDown(i) {
            while (this.leftChild(i) < this.size()) {
            let minChild = this.leftChild(i);

            if (
                this.rightChild(i) < this.size() &&
                this.heap[this.rightChild(i)] < this.heap[minChild]
            )
                minChild = this.rightChild(i);

            if (this.heap[i] <= this.heap[minChild]) break;
            this.swap(i, minChild);
            i = minChild;
            }
        }

        push(value) {
            this.heap.push(value);
            this.shiftUp(this.size() - 1);
        }

        pop() {
            if (this.isEmpty()) return;

            const min = this.heap[0];
            this.swap(0, this.size() - 1);
            this.heap.pop();
            this.shiftDown(0);
            return min;
        }
    }

    const nums = nums1.map((ele, idx) => [ele, nums2[idx]]).sort((a, b) => b[1] - a[1]);

    const minHeap = new MinHeap();
    let ans = 0;
    let sum = 0;

    for(let i = 0; i < nums.length; i++) {
        const [num1, num2] = nums[i];
        minHeap.push(num1);
        sum += num1;
        if(minHeap.size() === k) {
            ans = Math.max(ans, sum * num2);
            sum -= minHeap.pop();
        }
    }

    return ans;
};