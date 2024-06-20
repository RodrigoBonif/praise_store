document.addEventListener('DOMContentLoaded', () => {
    const botaoFiltro = document.querySelector('.select-filter');

    botaoFiltro.addEventListener('click', () => {
        const containerFiltro = document.querySelector('.select-container');
        const containerTitulo = document.querySelector('.select-container-titulo');
        const containerTexto = document.querySelector('.select-container-texto');

        containerFiltro.classList.toggle('active');
        botaoFiltro.classList.toggle('active');
        containerTitulo.classList.toggle('active');
        containerTexto.classList.toggle('active');

        if (botaoFiltro.classList.contains('active')) {
            botaoFiltro.textContent = 'Ocultar filtro ↑';
        } else {
            botaoFiltro.textContent = 'Selecionar filtro ↓';
        }
    });

    const checkboxBotao = document.querySelectorAll('.checkbox');

    checkboxBotao.forEach(button => {
        button.addEventListener('click', (event) => {
            const img = button.querySelector('img');
            const isChecked = img.src.includes('/Images/checkboxAberto.png');

            if (isChecked) {
                img.src = '/Images/checkboxFechado.png';
            } else {
                img.src = '/Images/checkboxAberto.png';
            }
        });
    });
});

const rangeMin = document.getElementById('rangeMin');
const rangeMax = document.getElementById('rangeMax');
const rangeOutput = document.getElementById('rangeOutput');
const sliderTrack = document.querySelector('.slider-track');

function updateRange() {
    const minVal = parseInt(rangeMin.value);
    const maxVal = parseInt(rangeMax.value);

    if (minVal > maxVal - 10) {
        rangeMin.value = maxVal - 1;
    }
    if (maxVal < minVal + 10) {
        rangeMax.value = minVal + 1;
    }

    rangeOutput.textContent = `${rangeMin.value} - ${rangeMax.value}`;
    updateTrack();
}

function updateTrack() {
    const minVal = parseInt(rangeMin.value);
    const maxVal = parseInt(rangeMax.value);
    const percentMin = (minVal / rangeMin.max) * 100;
    const percentMax = (maxVal / rangeMax.max) * 100;

    sliderTrack.style.background = `linear-gradient(to right, #ddd ${percentMin}%, #553324 ${percentMin}%, #553324 ${percentMax}%, #ddd ${percentMax}%)`;
}

rangeMin.addEventListener('input', updateRange);
rangeMax.addEventListener('input', updateRange);

updateRange();