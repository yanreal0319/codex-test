const estimateButton = document.getElementById('estimate-btn');
const claimAmountInput = document.getElementById('claim-amount');
const estimateOutput = document.getElementById('estimate-output');

function formatCurrency(amount) {
  return new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency: 'CNY',
    minimumFractionDigits: 2,
  }).format(amount);
}

estimateButton.addEventListener('click', () => {
  const claimAmount = Number(claimAmountInput.value);

  if (!Number.isFinite(claimAmount) || claimAmount <= 0) {
    estimateOutput.textContent = '请输入大于 0 的诉讼标的金额。';
    return;
  }

  // 仅用于前端演示的测试估算规则：按标的金额的 2.5% 计算，并设置最低 50 元。
  const estimatedFee = Math.max(claimAmount * 0.025, 50);

  estimateOutput.textContent = `仅供测试和学习：预估诉讼费约为 ${formatCurrency(estimatedFee)}。`;
});
