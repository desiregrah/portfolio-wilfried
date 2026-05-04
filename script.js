document.addEventListener("DOMContentLoaded", function() {

    // 1. GESTION DU MENU MOBILE (HAMBURGER)
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.sh-nav-item a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // 2. EFFET MACHINE À ÉCRIRE
    const shWords = ["Développeur Full-Stack", "Administrateur Système", "Infographiste UI/UX", "Technicien Électronique"];
    let shIndex = 0;

    function typeEffect() {
        let word = shWords[shIndex].split("");
        let loop = function() {
            if (word.length > 0) {
                document.getElementById('sh-typewriter').innerHTML += word.shift();
            } else {
                setTimeout(deleteEffect, 2000);
                return false;
            }
            setTimeout(loop, 80);
        };
        loop();
    }

    function deleteEffect() {
        let word = shWords[shIndex].split("");
        let loop = function() {
            if (word.length > 0) {
                word.pop();
                document.getElementById('sh-typewriter').innerHTML = word.join("");
            } else {
                shIndex = (shIndex + 1) % shWords.length;
                typeEffect();
                return false;
            }
            setTimeout(loop, 40);
        };
        loop();
    }
    setTimeout(typeEffect, 1000);

    // 3. EFFET 3D TILT SUR LA PHOTO
    const card = document.getElementById('sh-3d-card');
    if(card) {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top;  
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -20; 
            const rotateY = ((x - centerX) / centerX) * 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    }

    // 4. APPARITION AU DÉFILEMENT (SCROLL REVEAL)
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 100;
            
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }
    window.addEventListener("scroll", reveal);
    reveal(); // Appel initial pour vérifier les éléments déjà visibles

});