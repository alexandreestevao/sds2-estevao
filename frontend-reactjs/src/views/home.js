import React from 'react';

class Home extends React.Component {


    render() {
        return(
            <div className="jumbotron">
                <h1 className="display-3">Bem vindo!</h1>
                <p className="lead">Esse é sistema de controle de usuários.</p>
                <hr className="my-4" />
                <p>Utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                <p className="lead">
                <a className="btn btn-primary btn-lg" 
                   href="#/register-user" 
                   role="button"><i className="fa fa-users"></i>  
                   Cadastrar Usuário
                </a>
                <a className="btn btn-danger btn-lg" 
                   href="#/consult-user" 
                   role="button"><i className="fa fa-users"></i>  
                   Consultar Usuário
                </a>
                </p>
          </div>
        )
    }
}


export default Home;