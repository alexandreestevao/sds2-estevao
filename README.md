# Projeto Java Spring Boot | ReactJS
Este projeto é um sistema de cadastro de usuários desenvolvido com Java Spring Boot e ReacJS.

- Api RESTFul
- Api Axios
- Database PostgreSQL (dev e prod)
- Database H2 (test)
 
## Projeto
### Tecnologias Utilizadas: 
- [IDE Eclipse](https://www.eclipse.org/ide/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Postman](https://www.getpostman.com/downloads/)
- [Java v11](https://pt.wikipedia.org/wiki/Java_(linguagem_de_programa%C3%A7%C3%A3o))
  - [Spring Boot](https://spring.io/projects/spring-boot)
  - [Maven](http://maven.apache.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [ReacJS](https://reactjs.org/)
- [Bootswatch/Bootstrap](https://bootswatch.com/)
- [Toastr](https://codeseven.github.io/toastr/)
- [PrimeReact](https://www.primefaces.org/primereact/)
- [Heroku](https://www.heroku.com/)
- [Netlify](https://www.netlify.com/)

### Instalações Recomendadas
- [Instalar Git](https://git-scm.com/)
- [Instalar NPM](https://www.npmjs.com/) ou [Instalar Yarn](https://yarnpkg.com/)
- [Instalar Java 11 - JDK 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Spring Tools 4](https://spring.io/tools)
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

### Execução do Projeto
Após baixar o projeto e descompactar na máquina local, serão exibidos os diretórios [backend] e [frontend-react].
- Importar o backend na IDE, para facilitar sugiro utilizar o [Spring Tools](https://spring.io/tools), configurar o Java (JDK 11) e executar (run) a aplicação.
- Depois instalar as recomendações, entrar no diretório frontend-reatjs e executar o projeto:
 
$ yarn start

## Resources do Projeto

<table>
  <tr>
    <th width="200px">HTTP Method</th>
    <th width="300px">URL</th>
    <th width="300px">Descrição</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>http://localhost:8080/users</td>
    <td>Retorna todos os usuários</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>http://localhost:8080/users/1</td>
    <td>Retorna o usuário de Id 1</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>http://localhost:8080/users</td>
    <td>Cria um usuário</td>  
  </tr>
  <tr>
    <td>PUT</td>
    <td>http://localhost:8080/users/1</td>
    <td>Atualizar o usuário de Id 1</td>  
  </tr>
  <tr>
    <td>DELETE</td>
    <td>http://localhost:8080/users/1</td>
    <td>Deleta o usuário de Id 1</td>  
  </tr>

</table>
