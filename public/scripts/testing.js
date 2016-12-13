function sum(a,b){


	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	var sum = parseInt(a)+parseInt(b);
	document.getElementById('sum').value = sum;
	return sum;
}

function numbers(x)
{
		document.getElementById('result').value = x;
	
	return x;
}