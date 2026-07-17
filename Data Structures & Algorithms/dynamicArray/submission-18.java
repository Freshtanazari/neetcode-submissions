class DynamicArray {
    private int[] array; // declare a null array 
    private int length;  // declare a length which is one more than the index
    private int capacity; // declare the size of the array


    // constructor 
    public DynamicArray(int capacity) {
        this.capacity = capacity; // set the size of the array
        this.length = 0; // the array has nothing yet
        this.array = new int[this.capacity]; // initialize the array with the new capacity
        
    }

    public int get(int i) {
        return array[i]; // return the array with index i
    }

    public void set(int i, int n) {
        array[i] = n; // set the index i to n 
    }

    public void pushback(int n) {
        if(length == capacity){// first check if the array is full
            resize();
        }

        array[length] = n; 
        length++; // increment the array
        // insert a new element to the end
        // remember that an array of length 5 has the index 4 filled 
        // so the length actually will be the last empty position 
        // so insert the element
    }

    public int popback() {
        if(length > 0){// if the array is not empty
            length--; // decrement the length by one which means one elemement is gone now
        }
        return array[length]; // then return the element at that decremneted position 
        // which actually holds the last element. 
    }

    private void resize() {
        capacity *=2; // double the capacity
        int[] newArray = new int[capacity]; // create a new temp array

        for(int i = 0; i < length; i++){
            newArray[i] = array[i]; // copy all the elements into new array
        }
        array = newArray; // make the array point to the new array
    }

    public int getSize() {
        return length; // return the length
    }

    public int getCapacity() {
        return capacity;  // return the capacity
    }
}
