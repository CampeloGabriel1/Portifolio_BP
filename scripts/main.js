// Aguarda o documento HTML ser completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona o botão do menu e o menu móvel pelos seus IDs
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Adiciona um evento de clique no botão
    menuButton.addEventListener('click', () => {
        // Alterna a classe 'hidden' no menu móvel
        // A classe 'hidden' do Tailwind faz o elemento desaparecer (display: none)
        mobileMenu.classList.toggle('hidden');
    });

    // --- Opcional, mas recomendado para melhor experiência do usuário ---
    // Fecha o menu mobile quando um dos links é clicado
    const menuLinks = mobileMenu.querySelectorAll('a');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });
});