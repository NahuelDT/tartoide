const sendBtn = document.getElementById('send-btn');
sendBtn.addEventListener('click', async () => {
  const userInput = document.getElementById('user-input').value;
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: userInput }),
  });
  const data = await response.json();
  const chatOutput = document.getElementById('chat-output');
  chatOutput.innerHTML += `<p class="user-message">User: ${userInput}</p><p class="bot-message">Bot: ${data.reply}</p>`;
});

