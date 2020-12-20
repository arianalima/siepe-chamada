var alunos_presentes = [3,4,8,10,13,16,19,21,27,28,29,30,32,34,35,38,41,44];

var alunos = document.getElementsByClassName("campoFrequenciaDisciplinaFJ");
var i;

for (i = 0; i < alunos.length; i++) {
    if (alunos_presentes.includes(i+1)){
        alunos[i].checked = false;
    }else{
        alunos[i].click();
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
