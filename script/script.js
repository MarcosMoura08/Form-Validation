function isValidate()
{
	var x = document.getElementById('usuario');
	var y = document.getElementById('senha');
	var text1 = document.getElementById('user');
	var text2 = document.getElementById('password');

	if(x.value == "" || x.value == null)
	{	
		text1.style.fontSize = "12px"
		text1.style.color = "red";
		text1.style.fontWeight = "bolder";
		text1.innerText = "Preencha o campo usuario";
	}

	if(y.value == "" || y.value == null)
	{
		text2.style.fontSize = "12px"
		text2.style.color = "red";
		text2.style.fontWeight = "bolder";
		text2.innerText = "Preencha o campo senha";
	}

}