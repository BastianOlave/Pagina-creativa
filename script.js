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
    // 1. Disparar la lluvia de flores y corazones
    createFlowers();

    // --- NUEVA LÓGICA: Cambiar a la Foto 5 ---
    
    // Cambiar la foto nítida de fondo de la página 4 por foto5.jpg
    const page4BgImage = document.querySelector('#page4 .bg-image');
    if (page4BgImage) {
        page4BgImage.style.backgroundImage = "url('foto5.jpg')";
    }

    // Cambiar también el fondo desenfocado (global) por foto5.jpg
    const globalBgBlur = document.getElementById('page-bg-blur');
    if (globalBgBlur) {
        globalBgBlur.style.backgroundImage = "url('foto5.jpg')";
    }

    // ----------------------------------------

    const finalCard = document.getElementById('final-card');
    const instruction = finalCard.querySelector('.instruction');
    const finalBtn = document.getElementById('final-btn');
    // El botón secundario "Ver foto" no necesita ocultarse, así ella podrá ver la foto nítida

    // 2. Cambiar la instrucción para la pregunta final
    instruction.innerText = "¿Te gustaría que fuera tu novio?";
    instruction.style.color = "#8e44ad"; // Lila oscuro para resaltar
    instruction.style.fontSize = "2.2rem";

    // 3. Ocultar el botón principal "¡Ya la tengo! 💜"
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

// --- LÓGICA PARA OCULTAR Y MOSTRAR LA TARJETA ---

function hideMessage() {
    // Busca la tarjeta de la página actual y la oculta suavemente
    const activeCard = document.querySelector('.page.active .glass-card');
    if (activeCard) {
        activeCard.classList.add('fade-out');
    }
    
    // Muestra el botón flotante para regresar a la lectura
    const returnBtn = document.getElementById('return-btn');
    returnBtn.classList.add('visible');
}

function showMessage() {
    // Busca la tarjeta de la página actual y la vuelve a mostrar
    const activeCard = document.querySelector('.page.active .glass-card');
    if (activeCard) {
        activeCard.classList.remove('fade-out');
    }
    
    // Oculta el botón flotante
    const returnBtn = document.getElementById('return-btn');
    returnBtn.classList.remove('visible');
}