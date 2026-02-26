window.onload = function() {
    const bgBlur = document.getElementById('page-bg-blur'); /*cite: 1*/
    if (bgBlur) {
        bgBlur.style.backgroundImage = "url('foto1.jpg')"; /*cite: 1*/
    }
};

function nextPage(pageNumber) {
    // Quitamos la clase 'active' de todas las páginas para ocultarlas suavemente cite: 1, 2
    const pages = document.querySelectorAll('.page'); /*cite: 1*/
    pages.forEach(page => page.classList.remove('active')); /*cite: 1*/

    // Agregamos la clase 'active' a la página que queremos mostrar cite: 1, 2
    const nextPageElement = document.getElementById(`page${pageNumber}`); /*cite: 1*/
    if (nextPageElement) {
        nextPageElement.classList.add('active'); /*cite: 1*/
        
        // --- NUEVA LÓGICA: Cambiar el fondo desenfocado --- cite: 1
        const bgBlur = document.getElementById('page-bg-blur'); /*cite: 1*/
        if (bgBlur) {
            // Reemplazar la imagen de fondo con la de la nueva página cite: 1
            bgBlur.style.backgroundImage = `url('foto${pageNumber}.jpg')`; /*cite: 1*/
        }
    }

    // Disparar flores en cada cambio de página (excepto el primero) cite: 2
    if (pageNumber > 1) {
        createFlowers(); /*cite: 2*/
    }
}

function showSurprise() {
    createFlowers();

    const finalCard = document.getElementById('final-card');
    const instruction = finalCard.querySelector('.instruction');
    const finalBtn = document.getElementById('final-btn');

    // Cambiar la instrucción para la pregunta final
    instruction.innerText = "¿Te gustaría que fuera tu novio?";
    instruction.style.color = "#8e44ad"; 
    instruction.style.fontSize = "2.2rem";

    // Ocultar el botón
    finalBtn.style.display = 'none';
}

function createFlowers() {
    const container = document.getElementById('flower-container');
    const elements = ['💜', '🪻', '💜', '🌸', '✨']; 

    for (let i = 0; i < 70; i++) {
        setTimeout(() => {
            const flower = document.createElement('div');
            flower.classList.add('flower');
            flower.innerText = elements[Math.floor(Math.random() * elements.length)];
            
            flower.style.left = Math.random() * 100 + 'vw';
            flower.style.animationDuration = (Math.random() * 3 + 2) + 's'; 
            
            container.appendChild(flower);
            
            setTimeout(() => {
                flower.remove();
            }, 5000);
        }, i * 100); 
    }
}