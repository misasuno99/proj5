// Contagem regressiva para o próximo jogo
function updateCountdown() {
    const nextMatchDate = new Date('2026-06-15T16:00:00').getTime();
    const now = new Date().getTime();
    const difference = nextMatchDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    } else {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }
}

// Atualizar contagem regressiva a cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();

// Menu mobile toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Sistema de votação para os jogos
let votes = {};

function voteMatch(matchId) {
    if (!votes[matchId]) {
        votes[matchId] = 0;
    }
    votes[matchId]++;
    
    const buttons = document.querySelectorAll('.vote-btn');
    const button = buttons[matchId - 1];
    
    button.textContent = `Votado! (${votes[matchId]})`;
    button.style.background = 'linear-gradient(135deg, #ffdf00 0%, #ffc107 100%)';
    button.style.color = '#002776';
    button.disabled = true;
    button.style.cursor = 'not-allowed';
    
    // Mostrar mensagem de agradecimento
    alert(`Obrigado pelo seu voto no jogo ${matchId}!`);
}

// Animação de scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Efeito de fade-in ao rolar a página
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.group-card, .match-card, .news-card, tbody tr');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('fade-in', 'visible');
        }
    });
}

// Adicionar classe fade-in aos elementos
document.querySelectorAll('.group-card, .match-card, .news-card, tbody tr').forEach(el => {
    el.classList.add('fade-in');
});

window.addEventListener('scroll', handleScrollAnimation);
handleScrollAnimation();

// Efeito de parallax na bola de futebol
window.addEventListener('scroll', () => {
    const soccerBall = document.querySelector('.soccer-ball');
    const scrolled = window.pageYOffset;
    
    if (soccerBall && scrolled < window.innerHeight) {
        soccerBall.style.transform = `translateY(${scrolled * 0.3}px) rotate(${scrolled * 0.5}deg)`;
    }
});

// Mudar cor do header ao rolar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 39, 118, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #002776 0%, #003da5 100%)';
        header.style.backdropFilter = 'none';
    }
});

// Carregar dados de localStorage se existirem
function loadVotes() {
    const savedVotes = localStorage.getItem('matchVotes');
    if (savedVotes) {
        votes = JSON.parse(savedVotes);
        
        // Restaurar estado dos botões
        Object.keys(votes).forEach(matchId => {
            const buttons = document.querySelectorAll('.vote-btn');
            const button = buttons[parseInt(matchId) - 1];
            
            if (button) {
                button.textContent = `Votado! (${votes[matchId]})`;
                button.style.background = 'linear-gradient(135deg, #ffdf00 0%, #ffc107 100%)';
                button.style.color = '#002776';
                button.disabled = true;
                button.style.cursor = 'not-allowed';
            }
        });
    }
}

// Salvar votos no localStorage
function saveVotes() {
    localStorage.setItem('matchVotes', JSON.stringify(votes));
}

// Sobrescrever função voteMatch para salvar no localStorage
const originalVoteMatch = voteMatch;
voteMatch = function(matchId) {
    originalVoteMatch(matchId);
    saveVotes();
};

// Carregar votos ao iniciar
loadVotes();

// Interação com a tabela - destacar linha ao passar o mouse
document.querySelectorAll('tbody tr').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.fontWeight = 'bold';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.fontWeight = 'normal';
    });
});

// Adicionar efeito de digitação no título principal
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Aplicar efeito ao carregar (opcional - descomente para usar)
// window.addEventListener('load', () => {
//     const heroTitle = document.querySelector('.hero h2');
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 50);
// });

// Simulação de atualização de resultados em tempo real
function simulateLiveUpdate() {
    console.log('🏆 Copa do Mundo - Sistema de atualizações ativo');
    console.log('⚽ Próxima atualização em 30 segundos...');
}

simulateLiveUpdate();

// Mensagem de boas-vindas no console
console.log('%c🏆 Bem-vindo à Copa do Mundo! ⚽', 'font-size: 20px; color: #009c3b; font-weight: bold;');
console.log('%cSite desenvolvido com HTML, CSS e JavaScript', 'font-size: 14px; color: #002776;');

// Prevenir comportamento padrão do botão de ingressos
document.querySelector('.cta-button').addEventListener('click', function() {
    alert('🎟️ Sistema de ingressos será implementado em breve!\n\nEm breve você poderá comprar seus ingressos para assistir aos jogos da Copa do Mundo.');
});

// Adicionar ano dinâmico no footer
function updateFooterYear() {
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer-bottom p');
    if (footerText) {
        footerText.textContent = `© ${currentYear} Copa do Mundo. Todos os direitos reservados.`;
    }
}

updateFooterYear();

// Detectar se é dispositivo móvel
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Otimizações para mobile
if (isMobile()) {
    document.body.classList.add('mobile-device');
    console.log('📱 Dispositivo móvel detectado');
}

// Performance: Lazy loading para imagens (se houver)
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback para browsers antigos
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.add('loaded');
        });
    }
});

// Estatísticas de acesso (simulação)
let pageViews = localStorage.getItem('pageViews') || 0;
pageViews++;
localStorage.setItem('pageViews', pageViews);

console.log(`👁️ Número de visualizações desta página: ${pageViews}`);

// Feature: Comparação de times (funcionalidade extra)
function compareTeams(team1, team2) {
    console.log(`Comparando ${team1} vs ${team2}`);
    console.log('Esta funcionalidade estará disponível em breve!');
}

// Exportar funções para uso global (se necessário)
window.CopaDoMundo = {
    voteMatch,
    compareTeams,
    updateCountdown,
    isMobile
};

console.log('✅ Site da Copa do Mundo carregado com sucesso!');
