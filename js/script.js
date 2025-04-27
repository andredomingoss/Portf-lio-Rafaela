document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Scroll Suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Header Scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Botão Voltar ao Topo
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Animar elementos quando aparecem na tela
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.timeline-item, .project-card, .skill-category');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Configura animações iniciais
    const setupAnimations = function() {
        const elements = document.querySelectorAll('.timeline-item, .project-card, .skill-category');
        
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.6s ease';
        });
    };

    setupAnimations();
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executa uma vez ao carregar para verificar elementos já visíveis
});

document.addEventListener('DOMContentLoaded', function() {
    const whatsappLinks = document.querySelectorAll('.whatsapp-link');
    
    whatsappLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const phone = '5511999999999'; // Seu número com código do país
        const text = encodeURIComponent('Olá, vim pelo seu portfólio');
        
        // Verifica o navegador
        if (navigator.userAgent.indexOf('Chrome') > -1) {
          window.open(`https://web.whatsapp.com/send?phone=${phone}&text=${text}`, '_blank');
        } else {
          window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${text}`, '_blank');
        }
      });
    });
  });

  // Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    // Elementos
    const rhBtn = document.getElementById('rh-btn');
    const financeiroBtn = document.getElementById('financeiro-btn');
    const rhContent = document.getElementById('rh-content');
    const financeiroContent = document.getElementById('financeiro-content');
    
    // Fecha todos os conteúdos
    function closeAll() {
      rhContent.classList.remove('active');
      financeiroContent.classList.remove('active');
    }
    
    // RH Button Click
    rhBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (rhContent.classList.contains('active')) {
        closeAll();
      } else {
        closeAll();
        rhContent.classList.add('active');
      }
    });
    
    // Financeiro Button Click
    financeiroBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (financeiroContent.classList.contains('active')) {
        closeAll();
      } else {
        closeAll();
        financeiroContent.classList.add('active');
      }
    });
    
    // Fecha ao clicar fora
    document.addEventListener('click', closeAll);
    
    // Impede que o container feche ao clicar dentro
    document.querySelector('.specialization-container').addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });