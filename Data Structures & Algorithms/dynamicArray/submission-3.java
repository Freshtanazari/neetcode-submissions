class DynamicArray {

    private int[] array; // declare an array
    private int length; // the length of the array
    private int capacity; // the size of the array

// constructor
    public DynamicArray(int capacity) {
       this.capacity = capacity;
       this.length = 0;
       this.array = new int[this.capacity];
    }

// return a value for an index
    public int get(int i) {
        return array[i];
    }


// reset an element
    public void set(int i, int n) {
            array[i] = n;
    }

// 
    public void pushback(int n) {
        if(length == capacity){
            resize();
        }
        array[length] = n;
        length++;
    }

    public int popback() {
        if(length > 0){
            length--;
        }
        return array[length];
    }

    private void resize() {
        capacity *= 2;
        int[] newArray = new int[capacity];
        for (int i = 0; i < length; i++){
            newArray[i] = array[i];
        }
        array = newArray;
    }

    public int getSize() {
        return length;
    }

    public int getCapacity() {
        return capacity;
    }
}
