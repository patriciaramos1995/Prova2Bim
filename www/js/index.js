$(document).ready(function() {
	$.ajax({
	type: 'GET',	
	url: 'http://swapi.co/api/people/',
	dataType: 'json',
	data: { get_param: 'value' },
	error: function(erro) {
		alert("Erro1:" + erro.responseText);
	},
	success: function(data) {
		var contPessoa = document.querySelector("#listagemPessoa");
		contPessoa.innerHTML = "";
		
		$.each(data.results, function(i, obj){
			contPessoa.innerHTML += "<a href='javascript:exibeDadosPersonagem(\""+ obj.url +"\");'>" + obj.name +"</a><br/>";
		});	
	}
	});
});

function exibeDadosPersonagem(urlPessoa){
	$.ajax({
	url: ""+urlPessoa,
	error: function(erro) {
		alert("Erro2:" + erro.responseText, 3000, 'redtext');
	},
	success: function(data) {
		var contPessoa = document.querySelector("#conteudoPessoa");
		contPessoa.innerHTML = "";
		contPessoa.innerHTML = "<br/> Nome: " + data.name + "<br/> Altura: " + data.height + "<br/> Ano Nasc.: " + data.birth_year + "<br/> Genero:"+data.gender;
	}
	});
}


