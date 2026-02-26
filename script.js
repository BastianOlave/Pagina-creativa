// --- INICIALIZAR EL FONDO DESENFOCADO ---
window.onload = function() {
    const bgBlur = document.getElementById('page-bg-blur');
    if (bgBlur) {
        bgBlur.style.backgroundImage = "url('foto1.jpg')";
    }
};

// --- LÓGICA DE TRANSICIÓN DE PÁGINAS Y FONDO ---
function nextPage(pageNumber) {
    // Asegurarnos de que la tarjeta sea visible antes de cambiar de página
    showMessage();

    // Ocultar todas las páginas suavemente
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Mostrar la nueva página
    const nextPageElement = document.getElementById(`page${pageNumber}`);
    if (nextPageElement) {
        nextPageElement.classList.add('active');
        
        // Cambiar el fondo desenfocado global
        const bgBlur = document.getElementById('page-bg-blur');
        if (bgBlur) {
            bgBlur.style.backgroundImage = `url('foto${pageNumber}.jpg')`;
        }
    }

    // Disparar flores en cada cambio de página (excepto el primero)
    if (pageNumber > 1) {
        createFlowers();
    }
}

// --- LÓGICA DE LA SORPRESA FINAL (PÁGINA 4) ---
function showSurprise() {
    // 1. Asegurarnos de que el cuadro esté visible si ella estaba viendo la foto
    showMessage();

    // 2. Disparar la lluvia de flores y corazones
    createFlowers();

    // 3. REPRODUCIR LA CANCIÓN ROMÁNTICA
    const music = document.getElementById('bg-music');
    if (music) {
        music.play();
    }

    // 4. Cambiar a la Foto 5 (tanto la nítida como la desenfocada)
    const page4BgImage = document.querySelector('#page4 .bg-image');
    if (page4BgImage) {
        page4BgImage.style.backgroundImage = "url('foto5.jpg')";
    }
    const globalBgBlur = document.getElementById('page-bg-blur');
    if (globalBgBlur) {
        globalBgBlur.style.backgroundImage = "url('foto5.jpg')";
    }

    // 5. Cambiar el texto a la pregunta final
    const finalCard = document.getElementById('final-card');
    const instruction = finalCard.querySelector('.instruction');
    const finalBtn = document.getElementById('final-btn');

    instruction.innerText = "¿Te gustaría que fuera tu novio?";
    instruction.style.color = "#8e44ad"; 
    instruction.style.fontSize = "2.2rem";

    // Ocultar el botón "Ya la tengo!"
    finalBtn.style.display = 'none';
}

// --- LÓGICA PARA CREAR FLORES ---
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
    if (returnBtn) {
        returnBtn.classList.add('visible');
    }
}

function showMessage() {
    // Busca la tarjeta de la página actual y la vuelve a mostrar
    const activeCard = document.querySelector('.page.active .glass-card');
    if (activeCard) {
        activeCard.classList.remove('fade-out');
    }
    
    // Oculta el botón flotante
    const returnBtn = document.getElementById('return-btn');
    if (returnBtn) {
        returnBtn.classList.remove('visible');
    }
}