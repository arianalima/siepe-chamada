var alunos_presentes = [2,8,26,35,36,37,39];

var alunos = document.getElementsByClassName("campoFrequenciaDisciplinaFJ");
var i;
var posicoes = [];

for (var i = 0; i <= 80; i=i+2) {
    var helper = [i, i+1];
    posicoes.push.apply(posicoes, [helper]);
    
}

for (i = 0; i < alunos.length/2; i++) {
    if (alunos_presentes.includes(i+1)){
        alunos[posicoes[i][0]].checked = false;
        alunos[posicoes[i][1]].checked = false;
    }else{
        alunos[posicoes[i][0]].click();
        alunos[posicoes[i][1]].click();
    }
}

var justificativa = document.getElementsByClassName("selectMotivoFaltaJustificada"); 

for (i = 0; i < justificativa.length; i++) { 
    justificativa[i].selectedIndex = 9;   
}

var confirmar = document.getElementById("chkConclusaoFrequenciaDiaria");
confirmar.checked = true;

var gravar = document.getElementById("btnGravarFrequenciaDisciplina");
gravar.click();
