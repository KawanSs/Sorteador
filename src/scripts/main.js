document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit',function(evento){
        evento.preventDefault();
        let nummax = document.getElementById('num').value;
        nummax = parseInt(nummax);

        let numrandom = Math.random() * nummax;
        numrandom = Math.floor(numrandom + 1);
        // Math.round arredonda certo
        // Math.floor arredonda pra baixo
        // Math.ceil arredonda pra cima

        document.getElementById('result').innerText = numrandom;
        document.querySelector('.resultado').style.display='block';
    })
})