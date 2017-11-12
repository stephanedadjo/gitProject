// let put the algorithm together
// function( stockPriceYesterday){
     //var max = -Infinity;
     //loop through stockPriceYesterday
          // is index2 - index1 bigger than max?
          // if yes set this number to max
     // return max;
//}

const maxProfit = ( stockPriceYesterday ) =>{
	let max = -Infinity;
	for( let i = 0; i < stockPriceYesterday.length; i++){
		for( let j = 1; j < stockPriceYesterday.length - 1; j++){
			if ( stockPriceYesterday[j] - stockPriceYesterday[i] > max ){
				max = stockPriceYesterday[j] - stockPriceYesterday[i];
			}
		}

	}
	return max;
}

console.log(maxProfit([10, 7, 5, 8, 11, 9]));