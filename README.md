# 🏆 Copa do Mundo - Site Oficial

Um site moderno e responsivo dedicado à Copa do Mundo de Futebol, desenvolvido com HTML, CSS e JavaScript puros.

## 📋 Índice

- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Executar](#-como-executar)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Personalização](#-personalização)
- [Licença](#-licença)

## ✨ Funcionalidades

- ⏰ **Contagem Regressiva em Tempo Real** - Timer atualizado a cada segundo para o próximo jogo
- 🗳️ **Sistema de Votação** - Vote nos seus jogos favoritos com persistência em localStorage
- 📱 **Design Responsivo** - Compatível com desktop, tablet e dispositivos móveis
- 🎨 **Tema Escuro** - Interface moderna com cores otimizadas para visualização noturna
- 🔄 **Animações Suaves** - Efeitos de fade-in, parallax e transições ao rolar a página
- 📊 **Tabela de Classificação** - Acompanhamento das posições e estatísticas das seleções
- 📰 **Seção de Notícias** - Últimas atualizações sobre a Copa do Mundo
- 🎯 **Navegação Suave** - Scroll animado entre seções do site

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica do site
- **CSS3** - Estilização com variáveis CSS, Grid, Flexbox e animações
- **JavaScript (ES6+)** - Funcionalidades interativas e dinâmicas
- **Google Fonts** - Tipografia Roboto

## 🚀 Como Executar

1. Clone ou baixe o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```

2. Navegue até a pasta do projeto:
   ```bash
   cd appcopa
   ```

3. Abra o arquivo `index.html` em qualquer navegador moderno:
   - Duplo clique no arquivo, ou
   - Arraste o arquivo para o navegador, ou
   - Use uma extensão como Live Server no VS Code

## 📁 Estrutura do Projeto

```
appcopa/
├── index.html          # Página principal com toda estrutura HTML
├── style.css           # Folha de estilos com tema escuro
├── script.js           # Funcionalidades JavaScript
├── README.md           # Documentação do projeto
└── .gitignore          # Arquivos ignorados pelo Git
```

## 🎨 Personalização

### Cores do Tema

As cores estão definidas como variáveis CSS no arquivo `style.css`. Você pode personalizá-las facilmente:

```css
:root {
    --primary-color: #00d44a;      /* Verde principal */
    --secondary-color: #ffdf00;    /* Amarelo */
    --accent-color: #4dabf7;       /* Azul de destaque */
    --text-dark: #e4e4e4;          /* Texto claro */
    --text-light: #fff;            /* Texto branco */
    --bg-dark: #0d1117;            /* Fundo escuro */
    --bg-card: #161b22;            /* Fundo de cards */
    --bg-light: #1c2333;           /* Fundo alternativo */
}
```

### Contagem Regressiva

Para alterar a data do próximo jogo, edite o arquivo `script.js`:

```javascript
const nextMatchDate = new Date('2026-06-15T16:00:00').getTime();
```

### Seleções e Jogos

Modifique diretamente no `index.html` as seções:
- **Grupos**: Seção `#grupos`
- **Jogos**: Seção `#jogos`
- **Tabela**: Seção `tabela`
- **Notícias**: Seção `#noticias`

## 📱 Recursos Responsivos

O site se adapta automaticamente a diferentes tamanhos de tela:

- **Desktop** (> 768px): Layout completo com todas as colunas
- **Tablet** (481px - 768px): Layout adaptado com menos colunas
- **Mobile** (≤ 480px): Menu hambúrguer e layout em coluna única

## 🎯 Funcionalidades JavaScript

| Função | Descrição |
|--------|-----------|
| `updateCountdown()` | Atualiza o timer da contagem regressiva |
| `voteMatch(matchId)` | Registra voto para um jogo específico |
| `loadVotes()` | Carrega votos salvos no localStorage |
| `saveVotes()` | Salva votos no localStorage |
| `isMobile()` | Detecta se o dispositivo é móvel |
| `compareTeams()` | Compara duas seleções (placeholder) |

## 🔧 Melhorias Futuras

- [ ] Integração com API para dados em tempo real
- [ ] Sistema de comentários nos jogos
- [ ] Galeria de fotos dos estádios
- [ ] Modo claro/escuro alternável
- [ ] Suporte a múltiplos idiomas
- [ ] Animações de entrada mais elaboradas

## 📄 Licença

Este projeto é de uso livre para fins educacionais e pessoais.

## 🤝 Contribuição

Sinta-se à vontade para fazer fork, modificar e melhorar o projeto!

---

**Desenvolvido com ❤️ para os amantes de futebol** ⚽
