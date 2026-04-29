
// Seleciona as tabs e o título do objetivo
const tabs = document.querySelectorAll('.tab');
const goalTitle = document.getElementById('goal-title');

// Objetivos com títulos
const goals = {
    curso: 'Estudar 4 cursos na Alura',
    projetos: 'Criar 3 projetos em JavaScript',
    portfolio: 'Montar um portfolio online',
    curriculo: 'Atualizar meu currículo'
};

// Função para alternar abas
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        goalTitle.textContent = goals[tab.dataset.target];
    });
});

// Contador regressivo
let targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 7); // 7 dias a partir de agora

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if(diff < 0){
        // Se passou do prazo, zera tudo
        document.getElementById('days').textContent = 0;
        document.getElementById('hours').textContent = 0;
        document.getElementById('minutes').textContent = 0;
        document.getElementById('seconds').textContent = 0;
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Atualiza o contador a cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();
