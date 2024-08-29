/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
    class MinHeap {
        constructor() {
            this.heap = [];
        }

        root() {
            return this.heap[0];
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

                const minChild = this.rightChild(i) < this.size() &&
                    this.heap[this.rightChild(i)] < this.heap[this.leftChild(i)] ? 
                    this.rightChild(i) : this.leftChild(i);

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

    let ans = 0, l = 0, r = costs.length - 1;

    const h1 = new MinHeap(), h2 = new MinHeap();

    for(let i = 0; i < k; i++) {
        while(h1.size() < candidates && l<=r) h1.push(costs[l++]);
        while(h2.size() < candidates && l<=r) h2.push(costs[r--]);

        if (h1.isEmpty()) ans += h2.pop();
        else if (h2.isEmpty()) ans += h1.pop();
        else ans += h1.root() <= h2.root() ? h1.pop() : h2.pop();
    }

    return ans;
};