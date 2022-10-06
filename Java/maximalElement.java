int find_max(const int *array, size_t len) {
    int max = INT_MIN; // O(1)
    for (size_t i = 0; i < len; i++) { // O(n)
        if (max < array[i]) { // O(1)
            max = array[i]; // O(1)
        }
    }
    return max; // O(1)
}

// len -- input size 
// 3n + 2 

find_max([1,2,3,66,55,44,33,22,5], 5)

