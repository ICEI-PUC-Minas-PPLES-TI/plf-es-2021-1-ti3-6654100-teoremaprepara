<h1 align="center">
    <img alt="TP" src="Assets/images/logoTeorema.png" width="200px" /> 
</h1>

<h1 align="center"> Teorema Preparatório </h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-CC--BY--4.0-blue">	
</p>

<p align="center">
    Back-End <img alt="Heroku" src="https://heroku-badge.herokuapp.com/?app=teorema-prepara">
</p>

<p align="center">
  O Teorema Preparatório, trata-se de uma plataforma Web da instituição de mesmo nome. A plataforma tem o objetivo de realizar a divulgação da instituição ao publico geral, bem como resolver o problema da falta de um meio oficial de comunicação entre professores e alunos, desta forma a plataforma possibilita a interação entre os mesmos de forma prática e rápida, com funcionalidades que auxiliam na produtividade dos alunos e professores.
</p>

<br>

<h2>Alunos integrantes da equipe</h2>

<p>
  <ul>
    <li>André Luis da Silva</li>
    <li>Arthur Bicalho Lana Corrêa Fernandes</li>
    <li>Érika Márcia Pereira Sardinha</li>
    <li>Guilherme Julio Silva dos Santos</li>
    <li>Ítalo Lélis de Carvalho </li>
  </ul>
</p>

<br>

<h2>Professores responsáveis</h2>

<p>
  <ul>
    <li>Eveline Alonso Veloso</li>
    <li>Juliana Amaral Baroni de Carvalho</li>
  </ul>
</p>

<br>

## Documentos

- [Atas de Reunião com o Cliente](/Artefatos/Atas)
- [Documento de Visão](/Artefatos/Documento-de-Visao.pdf)
- [Interface de Usuário](/Artefatos/Interface-de-Usuario.pdf)
- [Planilha de Planejamento do Sprint (Excel)](/Artefatos/Sprints-TIS-III-noite.xlsx)
- [Planejamento de cada Sprint individual (PDF)](/Artefatos/Sprints)
- [Casos de Uso](/Artefatos/Casos-de-Uso.pdf)

<br>

## Acesso à Aplicação

### Ambiente de Teste (staging)
- Web App (Netlify): https://teoremapreparatorio.netlify.app/
- API (Heroku): https://teorema-prepara.herokuapp.com/

<br>

## Instruções de utilização

<p>
  Assim que a primeira versão do sistema estiver disponível, deverá complementar com as instruções de utilização. Descreva como instalar eventuais dependências e como executar a aplicação.
<p>

### Back-End [📂](/Codigo/backend/) ![Heroku](https://heroku-badge.herokuapp.com/?app=teorema-prepara)

Para a API Web, está sendo utilizado o framework MVC [Sails.js](https://sailsjs.com/). Para rodá-lo localmente na sua máquina, será necessário instalar a última versão LTS (no momento, v14.16) do [Node.js](https://nodejs.org/en/).

Instruções para instalação e execução:
```sh
# Clonar repositório do GitHub
git clone https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2021-1-ti3-6654100-teoremaprepara.git

# Acessar repositório recém baixado
cd plf-es-2021-1-ti3-6654100-teoremaprepara

# Acessar pasta do projeto
cd Codigo/backend

# Executar API Web (pressione Ctrl+C para encerrar)
npm run dev
```

O ambiente de teste da aplicação e o banco de dados de teste estão hospedados no Heroku. Para atualizar a versão do API no Heroku, na pasta `/Codigo/back`, execute o script de deploy com o comando:
```sh
chmod +x ./deploy_heroku.sh
./deploy_heroku.sh
```
