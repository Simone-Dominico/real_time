const socket = io();

const chatForm = document.getElementById('chatForm');
const chatMessages = document.getElementById('chatMessages');
const msgInput = document.getElementById('msgInput');

// Enviar mensagem
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = msgInput.value;

  if (msg.trim()) {
    socket.emit('message', msg);
    msgInput.value = '';
    msgInput.focus();
  }
});

// Exibir mensagem
socket.on('message', (msg) => {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerText = msg;
  chatMessages.appendChild(div);

  // Scroll para a última mensagem
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

