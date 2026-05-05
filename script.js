const button = document.getElementById('show-time-btn');
const clearButton = document.getElementById('clear-time-btn');
const output = document.getElementById('time-output');

button.addEventListener('click', () => {
  const now = new Date();
  const formattedTime = now.toLocaleString('zh-CN', {
    dateStyle: 'full',
    timeStyle: 'medium',
  });
  output.textContent = `现在是：${formattedTime}`;
});

clearButton.addEventListener('click', () => {
  output.textContent = '';
});
