# Solução ao Desafio Frontend - `1STi`

O código desenvolvido tem a pretensão de ser uma proposta de solução ao desafio proposto pela [1STi](https://github.com/1STi/desafio-frontend). 

As instruções fornecidas se encontram no arquivo [`INSTRUCITONS.md`](/thiago-jacinto'/INSTRUCTIONS.md)

## Resumo das atividades:

- Uso de API para desenvolver webapp com a previsão de tempo;
- Javascript / ReactJS (Hooks) + CSS usado para construção de uma página dinâmica;
- ~ ALTERAÇÃO ~: Uso da API da OpenWeather, devido a alterações no acesso da API proposta, do Yahoo Weather;

## Instalação e Uso:

O uso da solução pode ser realizado a partir do setup com [`create-react-app`](https://create-react-app.dev). Então, os arquivos deste repositório deverão ser colocados na pasta 'src' e a organização dos arquivos no seguindo a lógica da estrutura do CRA, modificando o arquivo `App.js` para importar o `index.jsx` contido neste repositório, além de limpar o CSS padrão utilizado pelo CRA.

Utilizando o [Node LTS](https://nodejs.org/pt-br/) & NPM v13+:
```shell npm install create-react-app liteWeatherApp```
Após a instalacão, e reposicionamento dos arquivos aqui contidos, iniciar o servidor (localhost:3000) com:
```shell npm start```