# Introdução:

O projeto consiste em um desenvolvimento do aplicativo Web e Mobile da SpaceX, onde é possível efetuar o login com validação e verificar detalhamento de lançamentos, status e gráficos, com regra de paginação, renderização de listagem e filtro. O projeto em si tem como baixa/média escalabilidade, no qual foi adaptado a algumas práticas de Clean Code para otimizar o resultado.

## Deploy do Projeto Front-end: https://spacex-coodesh.netlify.app/

## Deploy da API: https://spacex-coodesh.herokuapp.com/ 

## Inicialização do Projeto:

Para inicializar o projeto baixado pelo Github, primeiro deve executar no terminal o npm install e em seguida executar npm start ou pelo Docker criando a imagem.

## Desenvolvimento:

O projeto teve como arquitetura de desenvolvimento, React + Typescript, no qual foi implementado os componentes reutilizáveis com tipificação dos seus atributos para manter o padrão do projeto. Foi utilizado Jest como teste dos componentes. A estilização foi criada utilizando o styled-components seguindo o design do Figma. A api foi desenvolvida em NodeJs, consumindo o banco de dados no MongoDb, fazendo assim o tratamento dos endpoints. No teste de usabilidade, vi que para garantir uma experiência mais fácil teria que reformular alguns padrões para deixar a usabilidade mais fácil e limpa. As rotas foram autenticadas utilizando o localStorage, sendo necessário o registro na tela de Login. Por fim, foi configurado o Docker na raiz do projeto, como solicitado no teste.

## Imagem da arquitetura desenvolvida no MIRO:

![Arquitetura](https://user-images.githubusercontent.com/82072640/204061541-b9326671-a8ad-4040-b481-665d93ffe2b4.jpg)

## Bibliotecas e pacotes utilizados no Projeto:
• NPM • REACT-ROUTER-DOM • STYLED-COMPONENTS • JEST • AXIOS • GOOGLE CHARTS 

## Protótipo:
O protótipo foi desenvolvido com base no exemplo informado no readme e recriado utilizando o Figma, mantendo um Design System para o projeto.

![Protótipo](https://user-images.githubusercontent.com/82072640/204061576-8c878a00-c0f3-4bb2-a9dd-89c03ac4eb36.jpg)

## Imagens: 
![Login](https://user-images.githubusercontent.com/82072640/204062007-d436f8f8-fa56-4304-83f6-e98b9721e545.jpg)
![Login2](https://user-images.githubusercontent.com/82072640/204062012-27cb879f-9d7a-4b34-b8c6-6deaf26c88dc.jpg)
![Home1](https://user-images.githubusercontent.com/82072640/204062017-1e61133e-d998-4523-9801-6be26188e239.jpg)
![Home2](https://user-images.githubusercontent.com/82072640/204062023-61ff9e47-351c-4c21-b088-a8262b682efd.jpg)

## Vídeo de Usabilidade 

https://user-images.githubusercontent.com/82072640/204061830-b4b215fd-3e53-4efe-b229-e0e8edc5440f.mp4


