const button = document.getElementById('show-time-btn');
const output = document.getElementById('time-output');

button.addEventListener('click', () => {
  const now = new Date();
  output.textContent = `当前时间：${now.toLocaleString()}`;
});
