document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const themeToggle = document.getElementById('theme-toggle');
    const trailerButtons = document.querySelectorAll('.trailer-btn');
    const trailerModal = document.getElementById('trailer-modal');
    const fecharTrailerModal = trailerModal ? trailerModal.querySelector('.fechar') : null;
    const body = document.body;

    // Carregar tema salvo
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
    }

    // Alternar tema e salvar preferência
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Rolagem suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Header fixo
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });

    // Trailer modal
    trailerButtons.forEach(button => {
        button.addEventListener('click', () => {
            const videoId = button.getAttribute('data-video');
            document.getElementById('trailer-iframe').src = `https://www.youtube.com/embed/${videoId}`;
            trailerModal.style.display = 'block';
        });
    });

    if (fecharTrailerModal) {
        fecharTrailerModal.addEventListener('click', () => {
            trailerModal.style.display = 'none';
            document.getElementById('trailer-iframe').src = '';
        });
    }

    if (trailerModal) {
        window.addEventListener('click', (e) => {
            if (e.target === trailerModal) {
                trailerModal.style.display = 'none';
                document.getElementById('trailer-iframe').src = '';
            }
        });
    }

    // Modal de Personagem
    const characters = document.querySelectorAll('.cartao-personagem');
    const modal = document.getElementById('modal-personagem');
    const closeModalButton = modal ? modal.querySelector('.fechar') : null;

    characters.forEach(character => {
        character.addEventListener('click', () => {
            const name = character.getAttribute('data-name');

            const modalImagensAdicionais = document.getElementById('modal-imagens-adicionais');
            const modalTextoAdicional = document.getElementById('modal-texto-adicional');

            modalImagensAdicionais.innerHTML = '';
            modalTextoAdicional.innerHTML = '';

            if (name === "Ichigo Kurosaki") {
                const imagensAdicionais = [
                    'https://i.pinimg.com/736x/4d/10/eb/4d10eb4d81723343bfc7e3f9dac8f9aa.jpg',
                    'https://i.pinimg.com/736x/3f/5f/1a/3f5f1af620019744e111c23d132a5139.jpg',
                    'https://i.pinimg.com/736x/96/fb/ca/96fbca8ddbbbb8128863b9257cc12aa8.jpg',
                ];
                const textoAdicional ='Shinigami: Ichigo ganha os poderes de um Shinigami (Deus da Morte) ao receber temporariamente os poderes de Rukia Kuchiki. Isso lhe permite combater Hollows, espíritos malignos. Bankai: Sua forma mais poderosa de Shinigami é o Bankai, chamado Tensa Zangetsu. Este poder aumenta significativamente sua velocidade, força e habilidades de combate.  Hollowfication: Ichigo também possui poderes de Hollow, que são manifestados quando ele usa uma máscara de Hollow. Isso lhe dá um aumento de poder, regeneração rápida e novas habilidades de combate. Fullbring: Esta é uma habilidade que ele desperta depois de perder seus poderes de Shinigami, permitindo-lhe manipular a alma dos objetos e usá-los como armas. Poderes Quincy: Mais tarde na série, é revelado que Ichigo também tem poderes Quincy, herdados de sua mãe. Isso lhe dá acesso a técnicas e habilidades únicas dos Quincy. Fusão de Poderes: Eventualmente, Ichigo consegue combinar seus poderes de Shinigami, Hollow e Quincy, tornando-se incrivelmente poderoso e capaz de enfrentar inimigos formidáveis.';

                imagensAdicionais.forEach(src => {
                    const img = document.createElement('img');
                    img.src = src;
                    img.alt = 'Imagem Adicional';
                    img.style.maxWidth = '100%';
                    img.style.margin = '10px 0';
                    modalImagensAdicionais.appendChild(img);
                });

                modalTextoAdicional.textContent = textoAdicional;
            } else if (name === "Kenpachi Zaraki") {
                const imagensAdicionais = [
                    'https://wallpaper.forfun.com/fetch/48/4869048c1f989e870f4c4e553930799c.jpeg',
                    'https://i.pinimg.com/736x/0a/21/ff/0a21ff3dd8dd57ba7715acfa081f1971.jpg',
                    'https://i.pinimg.com/736x/c0/96/2a/c0962aebfcab8e83eeeb4ec57fa9e73b.jpg',
                ];
                const textoAdicional = 'Força Sobre-Humana: Kenpachi possui uma força física extraordinária, capaz de derrotar inimigos com golpes esmagadores. Durabilidade Incrível: Ele tem uma resistência impressionante, sendo capaz de suportar danos significativos sem perder a capacidade de lutar. Habilidade de Combate: Kenpachi é um mestre na arte da espada e no combate corpo a corpo, sem técnicas refinadas, mas com pura ferocidade e habilidade. Reiatsu (Pressão Espiritual): Sua reiatsu é extremamente poderosa e intimidante, muitas vezes suprimida para dar aos seus oponentes uma chance justa de lutar. Nozarashi (Zanpakutō): A zanpakutō de Kenpachi é chamada Nozarashi, uma espada gigantesca que reflete sua força bruta. Em sua forma liberada (Shikai), Nozarashi assume a forma de um enorme machado/espada. Bankai: No arco final, Kenpachi desperta seu Bankai, que transforma sua aparência física, dando-lhe uma aparência mais demoníaca e aumentando drasticamente sua força e capacidades de combate..';

                imagensAdicionais.forEach(src => {
                    const img = document.createElement('img');
                    img.src = src;
                    img.alt = 'Imagem Adicional';
                    img.style.maxWidth = '100%';
                    img.style.margin = '10px 0';
                    modalImagensAdicionais.appendChild(img);
                });

                modalTextoAdicional.textContent = textoAdicional;
            } else if (name === "Sōsuke Aizen") {
                const imagensAdicionais = [
                    'https://i.pinimg.com/originals/1f/3d/38/1f3d38aedf6bc103b452b9cb135943b4.jpg',
                    'https://wallpaper.forfun.com/fetch/e0/e0043f189d8feac704400aa88551a711.jpeg',
                    'https://i.pinimg.com/originals/e5/f9/10/e5f91044d50c3ae0b56e7c1604f18358.jpg',
                ];
                const textoAdicional = 'Shinigami: Aizen é um Shinigami incrivelmente talentoso, com habilidades superiores de combate e controle espiritual. Kyōka Suigetsu (Zanpakutō): A zanpakutō de Aizen é Kyōka Suigetsu, que possui a habilidade de completa hipnose. Qualquer pessoa que veja a liberação de sua zanpakutō está sujeita à sua manipulação ilusória, fazendo com que não possam confiar nos próprios sentidos. Transcendência: Aizen realiza experimentos com a Hōgyoku, um artefato poderoso, e consegue transcender os limites de um Shinigami normal, obtendo poderes imensos e uma forma quase imortal. Regeneração: Após  fundir-se com a Hōgyoku, Aizen adquire habilidades regenerativas, sendo capaz de curar ferimentos graves rapidamente. Habilidades de Kidō: Ele é um mestre nas artes de Kidō (magia espiritual), capaz de lançar poderosos feitiços destrutivos e de contenção com pouca ou nenhuma incantação. Superforça e Velocidade: Aizen possui força e velocidade sobre-humanas, sendo capaz de enfrentar múltiplos oponentes poderosos ao mesmo tempo. Intelecto Brilhante: Além de suas habilidades de combate, Aizen é um estrategista brilhante, capaz de planejar complexas manipulações e esquemas que muitas vezes colocam seus adversários em grandes desvantagens.';

                imagensAdicionais.forEach(src => {
                    const img = document.createElement('img');
                    img.src = src;
                    img.alt = 'Imagem Adicional';
                    img.style.maxWidth = '100%';
                    img.style.margin = '10px 0';
                    modalImagensAdicionais.appendChild(img);
                });

                modalTextoAdicional.textContent = textoAdicional;
            }

            modal.style.display = 'block';
        });
    });

    if (closeModalButton) {
        closeModalButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    if (modal) {
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});
