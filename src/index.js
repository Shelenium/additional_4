module.exports = function multiply(first, second) {
	
	function stringToNumber (str) {
		var arrstr = str.split('');
		var arrnum = arrstr.map(function(e,i){ return parseFloat(e) });
		return (arrnum);
	}
	var number1 = stringToNumber (first);
	var number2 = stringToNumber (second);

	var array = [];
	for (var i = 0; i < number1.length; i++){
		for (var j = 0; j < number2.length; j++){
			if (!array[i+j]) { 
				array[i+j] = 0; 
			}
			array[i+j] += number1[i]*number2[j]; 
		}
	}
	
	function toRightPlace(arr) {
		for (var i = arr.length-1; i >=1; i--){
			if (arr[i] > 9) {
				arr[i-1] += (arr[i] - arr[i]%10)/10;
				arr[i] = arr[i]%10;
			} 
		}
		if (arr[0] > 9) { 
			var oneMore = [];
			oneMore.push((arr[0]-arr[0]%10)/10);
			arr[0] = arr[0]%10; 
			arr = oneMore.concat(arr);

		}

		return (arr);
	}

	var rez = toRightPlace(array).join('');


return (rez);
}
