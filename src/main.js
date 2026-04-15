document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    const header = document.querySelector('.header');
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    // Esconder/mostrar elementos do header no scroll
    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;
    
        if (posicaoAtual > alturaHero) {
            // Passou do hero: esconde logo e primeiro botão
            header.classList.add('header--is-hidden');
            console.log("Header simplificado - apenas ENTRAR");
        } else {
            // Está no hero: mostra tudo
            header.classList.remove('header--is-hidden');
            console.log("Header completo - logo e botões");
        }    
    });

    // Seção de atrações, programação de abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(event) {
            const abaAlvo = event.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            event.target.classList.add('shows__tabs__button--is-active');
        });
    }

    function removeBotaoAtivo() {
        const buttons = document.querySelectorAll('[data-tab-button]');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('shows__tabs__button--is-active');
        }
    }

    function escondeTodasAbas() {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');
        for (let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove('shows__list--is-active');
        }
    }

    // Seção FAQ, accordion 
    const faqItems = document.querySelectorAll('.faq__questions__item');
    
    for (let i = 0; i < faqItems.length; i++) {
        const pergunta = faqItems[i].querySelector('.faq__questions__item__question');
        
        if (pergunta) {
            pergunta.addEventListener('click', function() {
                const item = this.parentElement;
                item.classList.toggle('faq__questions__item--is-open');
            });
        }
    }
});