function sum(a,b){


	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	var sum = parseInt(a)+parseInt(b);
	document.getElementById('result').value = sum;
	return sum;
}

var array = [];
var number="";

function numbers(x){

		//number = number + x;
		// array.concat(x+array);
		// x=array + x;
	 	//    array.push(x);
		//	var length = array.length;
		//	for(var i=0; i<length;i++)
		//	array.concat(x+array[i]);

		number= x+number;
		parseInt(number);
		document.getElementById('result').value = number;
		array.push(number);
		return x;
	};

function sign(){

		document.getElementById('result').value = number + "+";
	
}
