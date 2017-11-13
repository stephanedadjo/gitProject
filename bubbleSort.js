const bubbleSort = ( arr ) => {
	let temp="";
	for ( let i = 0; i < arr.length; i++ ){
		for ( m = i + 1; m < arr.length; m++){
           if(arr[m] < arr[i]){
           	temp = arr[m];
           	arr[m] = arr[i];
           	arr[i] = temp;
           }
		}
		
	}
	return arr;
}
console.log(bubbleSort([45, 7, 0, 3, -7, 8, 1]))