let secretNumber = Math.floor(Math.random() * 100) + 1
const feedback = document.getElementById("feedback")
const guessInput = document.getElementById("guess")
const guessButton = document.querySelector("button")
const restartButton = document.getElementById("restartButton")

// Array de mensagens de sucesso
const successMessages = [
  "Incrível! Você acertou!",
  "Parabéns, você é um adivinhador nato!",
  "Acertou em cheio, muito bem!",
  "Isso aí! Você conseguiu!",
  "Fantástico! Você acertou o número!",
]

function checkGuess() {
  const guess = guessInput.value
  if (guess == secretNumber) {
    const randomSuccessMessage =
      successMessages[Math.floor(Math.random() * successMessages.length)]
    feedback.textContent = randomSuccessMessage
    feedback.style.color = "green"

    // Desabilita o input e o botão de adivinhação
    guessInput.disabled = true
    guessButton.disabled = true

    // Mostra o botão de reinício
    restartButton.style.display = "block"
  } else if (guess < secretNumber) {
    feedback.textContent = "O número é maior. Tente novamente!"
    feedback.style.color = "red"
  } else {
    feedback.textContent = "O número é menor. Tente novamente!"
    feedback.style.color = "red"
  }
}

// Função para reiniciar o jogo
function restartGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1
  feedback.textContent = ""
  guessInput.disabled = false
  guessButton.disabled = false
  guessInput.value = ""
  guessInput.focus()
  restartButton.style.display = "none"
}

// Adiciona evento de clique ao botão de reinício
restartButton.addEventListener("click", restartGame)
