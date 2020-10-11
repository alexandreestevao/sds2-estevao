import React from 'react';

import Card from '../../components/card';
import FormGroup from '../../components/form-group';
import * as messages from '../../components/toastr';

import {withRouter } from 'react-router-dom';

import UserService from '../../app/services/userService';

class RegisterUsers extends React.Component {

    state = {
        id: null,
        name: '',
        email: '',
        age: '',
        salary: '',
        atualizando: false
    }

    constructor() {
        super();
        this.service = new UserService();
    }

    componentDidMount() {
        const params = this.props.match.params
        if(params.id) {
            this.service
                .obterPorId(params.id)
                .then(response => {
                    this.setState({...response.data, atualizando: true}) // Spread operator ...
                }).catch(error => {
                    messages.mensgemErro(error.response.data)
                })
        }

    }

    submit = () => {
        // Destructor operator
        const { name, email, age, salary } = this.state;
        const user = { name, email, age, salary };
        
        if(!this.state.name) {
            messages.mensgemErro('O campo Nome é obrigatório.');
            return false;
        }
        if(!this.state.email) {
            messages.mensgemErro('O campo E-mail é obrigatório.');
            return false;
        }else if(!this.state.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
            messages.mensgemErro('Imforme um E-mail válido.');
            return false;
        }
        if(!this.state.age) {
            messages.mensgemErro('O campo Idade é obrigatório.');
            return false;
        }
        
        this.service
        .insert(user)
        .then(response => {
            this.props.history.push('/consult-user')
            messages.mensgemSucesso('Usuário cadastrado com sucesso.')
        }).catch (error => {
            messages.mensgemErro(error.response.data);
        })
    }

    update = () => {
        // Destructor operator
        const { name, email, age, salary,  id } = this.state;
        const user = { name, email, age, salary, id };

        this.service
        .update(user)
        .then(response => {
            this.props.history.push('/consult-user')
            messages.mensgemSucesso('Usuário atualizado com sucesso.')
        }).catch (error => {
            messages.mensgemErro(error.response.data);
        })
    } 

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name] : value})
    }

    render() {

        return(
            <Card title={this.state.atualizando ? 'Atualizar Usuário' : 'Cadastrar Usuário'}>
                <div className="row">
                    <div className="col-md-12">
                        <FormGroup id="inputName" label="Nome: *">
                            <input  type="text" id="inputName" 
                                    className="form-control"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange} />
                        </FormGroup>
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <FormGroup id="inputEmail" label="E-mail: *">
                            <input type="text" id="inputEmail" 
                                   className="form-control"
                                   name="email"
                                   value={this.state.email}
                                   onChange={this.handleChange} />
                        </FormGroup>
                    </div>
                    <div className="col-md-3">
                        <FormGroup id="inputAge" label="Idade: *">
                            <input type="text" id="inputAge" 
                                   className="form-control"
                                   name="age"
                                   value={this.state.age}
                                   onChange={this.handleChange} />
                        </FormGroup>
                    </div>
                    <div className="col-md-3">
                        <FormGroup id="inputSalary" label="Salário:">
                            <input type="text" id="inputSalary" 
                                   className="form-control"
                                   name="salary"
                                   value={this.state.salary}
                                   onChange={this.handleChange} />
                        </FormGroup>
                    </div>                    
                </div>
                <div className="row">
                    <div className="rows">
                        <div className="col-md-12">
                            {this.state.atualizando ?
                                (
                                    <button onClick={this.update} type="button" className="btn btn-success">Atualizar</button>
                                ) : (
                                    <button onClick={this.submit} type="button" className="btn btn-success">Salvar</button>
                                )
                            }                            
                            <button onClick={e => this.props.history.push('/consult-user')} type="button" className="btn btn-danger">Cancelar</button>
                        </div>
                    </div>
                </div>                
            </Card>
        )
    }
}

export default withRouter(RegisterUsers);