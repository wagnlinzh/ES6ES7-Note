class SortCollector {
  constructor() {
    this.arr = [];
    for (let i = 0; i < 10; i++) {
      let max = 10000,
        min = 1;
      this.arr.push(parseInt(Math.random() * (max - min) + min));
    }
  }

  //冒泡排序
  bubblesort() {
    let arr = this.arr;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = temp;
        }
      }
    }
    console.log('bubblesort >>>    ');
    console.log(arr)
    return arr;
  }

  //选择排序
  selectionSort() {
    let arr = this.arr;

    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      let min = arr[i];
      let temp_index;
      for (let j = i + 1; j < len; j++) {
        if (min > arr[j]) {
          min = arr[j];
          temp_index = j;
        }
      }

      //swap(min,arr[i])
      let temp = arr[i];
      arr[i] = min;
      arr[temp_index] = temp;
    }


    console.log('selectionSort >>>    ');
    console.log(arr)

    return arr;
  }

  //插入排序
  insertSort() {
    let arr = this.arr;
    let len = arr.length;
    let current, preIndex;
    for (let i = 1; i < len; i++) {
      preIndex = i - 1;
      current = arr[i];
      while (preIndex >= 0 && arr[preIndex] > current) {
        arr[preIndex + 1] = arr[preIndex];
        preIndex--;
      }
      arr[preIndex + 1] = current;
    }
    console.log('insertSort >>>    ')
    console.log(arr);
    return arr;
  }

  //希尔排序 -> 插入排序的一种优化 


  // 归并排序
  mergeSort(arr) {
    let len = arr.length;
    if (len < 2) {
      return arr;
    }

    let middle = Math.floor(len / 2),
      left = arr.slice(0, middle),
      right = arr.slice(middle);

    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  merge(left, right) {
    let result = [];

    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    }

    while (left.length) {
      result.push(left.shift())
    }

    while (right.length) {
      result.push(right.shift())
    }

    console.log('mergeSort >>>>    ')
    console.log(result);
    return result;
  }

  //快速排序
  quickSort(arr, left, right) {

    let len = arr.length,
      partitionIndex;
    left = typeof left != 'number' ? 0 : left;
    right = typeof right != 'number' ? len - 1 : right;

    if (left < right) {
      partitionIndex = this.partition(arr, left, right);
      this.quickSort(arr, left, partitionIndex - 1);
      this.quickSort(arr, partitionIndex + 1, right);
    }


    console.log('quickSort>>> ');
    console.log(arr);
    return arr;
  }

  partition(arr, left, right) {
    var pivot = left,
      index = pivot + 1;
    for (let i = index; i <= right; i++) {
      if (arr[i] > arr[pivot]) {
        this.swap(arr, i, index);
        index++;
      }

    }
    this.swap(arr, pivot, index - 1)
    return index - 1;
  }

  swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }





}


let sortDemo = new SortCollector();
sortDemo.bubblesort();
sortDemo.selectionSort();
sortDemo.insertSort();
sortDemo.mergeSort(sortDemo.arr);
sortDemo.quickSort(sortDemo.arr, 0, sortDemo.arr.length - 1)
