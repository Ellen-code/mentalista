var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3

while (tentativas > 0) {
    var chute = parseInt(prompt("Digite um número entre 0 e 10"))

    if (numeroSecreto == chute) {
        document.querySelector(".resp").innerHTML = ("Parabéns, você acertou!")
        break
    } else if (chute > numeroSecreto) {
        alert("O número secreto é menor.")
        tentativas = tentativas - 1
    } else if (chute < numeroSecreto) {
        alert("O número secreto é maior.")
       // tentativas = tentativas - 1
       tentativas --
    } if (chute != numeroSecreto) {
        document.querySelector(".resp").innerHTML = ("Suas tentativas acabaram. O número era " + numeroSecreto)
    }
}
