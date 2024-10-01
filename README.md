# Lions Seminovos - Desafio Front-End

Passos para executar, clone o repositório:

- git clone https://github.com/jotaMch/lion-seminovos.git -l 'nome-do-seu-repositório'
> Acesse o diretório do projeto:
- cd 'nome-do-seu-repositório'

> Instale as dependências:
- npm install
> Rode o projeto localmente:
- npm run dev
> Acesse no navegador:
- http://localhost:3000

### Descrição do Projeto
Desafio de criar uma página web baseada em uma imagem fornecida pela empresa. A página foi projetada para ser responsiva e conter elementos como barra de navegação e campo de busca.

### Funcionalidades Implementadas
Header com barra de navegação: Inclui scroll suave para as seções principais (Home, Categorias, Serviços).

### Campo de busca
Implementado na barra de navegação para buscar palavras-chave em uma lista de lojas.

### Botão de navegação externa 
Um botão na página que direciona o usuário para uma página externa.

### Responsividade
A página é responsiva, adaptando-se a diferentes tamanhos de tela (desktop, tablet, mobile).

### Footer
Com informações adicionais e links úteis para as redes sociais da Lions.

### Página de lojas
Com filtro de pesquisa em uma lista de lojas da concessionária, exibindo informações detalhadas sobre cada loja.

### Tecnologias Utilizadas
- React com TypeScript: Para construção da interface e organização dos componentes.

- Styled Components: Para estilização da aplicação de forma responsiva e consistente.

- React Router: Para navegação entre as diferentes páginas (Home, Lojas).

- React Icons: Para uso de ícones visuais que enriquecem a interface.

- Vite: Utilizado como ferramenta de build por ser leve e rápida.

## Como foi desenvolver o projeto?
Após fazer a instalação e configuração das ferramentas, resolvi usar o Atomic Design para dividir os componentes de interface e utiliza-los de maneira organizada. Descartei o Chakra UI e optei pelo Style Components para obter mais flexibiilidade no desenvolvimento de interfaces, tomei a decisão de criar um arquivo TypeScript para armazenar as informações sobre as lojas e evitar poluir o componente StoreLayot. Senti que poderia ter explorado mais.