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