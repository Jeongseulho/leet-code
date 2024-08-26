/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    class MinHeap {
        constructor() {
            this.heap = [];
        }

        _shiftDown() {
            let targetIdx = 0;

            while (true) {
            let leftChildIdx = targetIdx * 2 + 1;
            let rightChildIdx = leftChildIdx + 1;

            if (leftChildIdx >= this.heap.length) break;

            let smallerChildIdx =
                rightChildIdx < this.heap.length &&
                this.heap[rightChildIdx] < this.heap[leftChildIdx]
                ? rightChildIdx
                : leftChildIdx;

            if (this.heap[smallerChildIdx] >= this.heap[targetIdx]) break;

            [this.heap[targetIdx], this.heap[smallerChildIdx]] = [
                this.heap[smallerChildIdx],
                this.heap[targetIdx],
            ];
            targetIdx = smallerChildIdx;
            }
        }

        push(newItem) {
            this.heap.push(newItem);
            let targetIdx = this.heap.length - 1;

            while (targetIdx > 0) {
            const parentIdx = (targetIdx - 1) >> 1;
            const parent = this.heap[parentIdx];
            if (newItem >= parent) break;
            this.heap[targetIdx] = parent;
            targetIdx = parentIdx;
            }
            this.heap[targetIdx] = newItem;
        }

        pop() {
            const lastItem = this.heap.pop();
            if (this.heap.length) {
            const minItem = this.heap[0];
            this.heap[0] = lastItem;
            this._shiftDown(this.heap);
            return minItem;
            }
            return lastItem;
        }
    }

    const minHeap = new MinHeap();
    for(const num of nums) {
        minHeap.push(num);
        if(minHeap.heap.length > k) minHeap.pop();
    }
    return minHeap.pop();
};