// Função para adicionar e remover o destaque visual
function setupInteraction() {
    const cards = document.querySelectorAll('.logo-card');
    const infoSection = document.querySelector('section');

    cards.forEach(card => {
        // Adiciona um listener para o clique em cada card
        card.addEventListener('click', () => {
            const techName = card.getAttribute('data-tech');
            
            // 1. Remove destaque de todos
            cards.forEach(c => c.classList.remove('highlight', 'border-4', 'border-green-500'));
            
            // 2. Adiciona destaque ao card clicado
            card.classList.add('highlight'); // Mantém o destaque via CSS nativo
            card.style.border = '4px solid var(--color-highlight)'; // Adiciona a borda verde, pois o border-4 do tailwind sumiu.

            // 3. Mostra uma mensagem simples
            let message = `Você clicou em ${techName}. `;
            
            switch (techName) {
                case 'Flask':
                case 'Python':
                    message += 'Esta é uma tecnologia de BACKEND (servidor).';
                    break;
                case 'HTML':
                case 'CSS':
                case 'JavaScript':
                    message += 'Esta é uma tecnologia de FRONTEND (navegador).';
                    break;
            }

            // Atualiza a seção de informações
            infoSection.innerHTML = `
                <h2 class="text-3xl font-bold mb-4" style="color: var(--color-highlight);">Interação com ${techName}</h2>
                <p class="text-xl" style="color: var(--color-text-light);">${message}</p>
                <p class="text-sm" style="color: var(--color-gray-500); margin-top: 0.5rem;">Clique em outro logo para interagir novamente.</p>
            `;
        });
        
        // Remove o destaque após o clique ou ao sair do mouse (opcional)
        card.addEventListener('mouseleave', () => {
            // A remoção de classes de destaque foi comentada anteriormente para manter o estado.
            // Se precisar remover o destaque no mouse leave, você faria:
            // card.classList.remove('highlight');
            // card.style.border = '1px solid var(--color-card-border)'; 
        });
    });
}

// Garante que o script seja executado após o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', setupInteraction);