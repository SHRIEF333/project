const form = document.getElementById('sugarForm');
const messageDiv = document.getElementById('message');
const historyTable = document.getElementById('historyTable');

const getFeedback = (level) => {
    if (level < 70) return "Low sugar level. Eat something sugary.";
    if (level >= 70 && level <= 140) return "✅ Normal range. Keep it up!";
    if (level > 140 && level <= 200) return "Slightly high. Watch your meals.";
    return "High sugar level! Consult your doctor.";
};

form.onsubmit = (e) => {
    e.preventDefault();

    const level = parseInt(document.getElementById('sugarLevel').value);
    const type = document.getElementById('timeType').value;
    const dateInput = document.getElementById('sugarDate').value || new Date().toISOString();
    const dateObj = new Date(dateInput);

    const row = `<tr>
        <td class="p-2 border">${dateObj.toLocaleDateString()}</td>
        <td class="p-2 border">${dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
        <td class="p-2 border">${level}</td>
        <td class="p-2 border">${type}</td>
      </tr>`;
    historyTable.innerHTML = row + historyTable.innerHTML;
    messageDiv.textContent = getFeedback(level);
};