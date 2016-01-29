var dispVal = document.getElementById("input1"),         	 	//Getting TextBox
	element = document.querySelectorAll("#default"),			//Getting NumbersButtons & OperatorsButtons
	elements1 =  document.querySelectorAll("#default1"),		//Getting '=','<<--','C'
	duplicate = 0, 
 	operator = 0,	
 	dot = 0;
 	for(var i = 0 , len = element.length ; i < len ; i++){   	//looping all elements in DOM with 'id = default'
 	element[i].addEventListener("click", function(){
 		var x = this.value;										//Gets the value(Attribute) of the element using 'this'.

	if(x === '+' || x === '-' || x === '*' || x === '/' || x === '.' || x === '%')
	{	
		duplicate = 1;	
	}
	if(x === '1'|| x === '2' || x === '3'|| x === '4'|| x === '5'|| x === '6'|| x === '7'|| x === '8'|| x ==='9'|| x=== '0')
	{
		duplicate = 0;
		operator = 0;											//If we press on 'Numbers' the controller goes to line
	}															//Number 20, If we press 'Operators' the controller goes
	if(duplicate == 0)											//line Number 24. 		
	{
		dispVal.value += x;			
	}
	if(duplicate == 1 && operator == 0)					
	{
		if(x === '+' || x === '-' || x === '*' || x == '/' || x === '%')	
		{
			dot=0;           
		}
		if(x == '.' && dot == 1)
		{
			dispVal.value = dispVal.value;    					//If 'operator' > 0 then it will not accept operators
		}														//If 'dot' > 1 then it will not accept '.'
		else
		{
			dispVal.value = dispVal.value + x;		
			operator += 1;
			if(x === '.')
			{
				dot = 1;
			}
		}      			
	}
});  
}
for(var i = 0 , len = elements1.length ; i < len ; i++){		//looping all elements in DOM with 'id = default1'
 	elements1[i].addEventListener("click", function(){
 		var x = this.value;										//Gets the value(Attribute) of the element using 'this'.
 		if( x === '<<--')
		{
			var old = dispVal.value;
			var	len = old.length;
			var	newValue = old.substring(0,len-1);		
			dispVal.value = newValue;
		}
		if( x === '=')
		{
			var temp = dispVal.value,
			len = temp.length;
			if(len > 0)
			{						
				temp = eval(temp);
				dispVal.value = temp;
			}
		}
		if( x === 'C')
		{
			dispVal.value = '';	
			opp =1;	
			dot = 0;					
		}
});
}