import React from 'react'
import { withRouter } from 'react-router-dom'

import Card from '../../components/card'
import FormGroup from '../../components/form-group'
import TableUsers from '../users/tableUsers'
import UserService from '../../app/services/userService'

import * as messages from '../../components/toastr';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

class ConsultUsers extends React.Component {

    state = {
        name: '',
        email: '',
        age: '',
        salary: '',
        showConfirmDialog: false,
        userDeletar: {},
        users: []
    }

    constructor() {
        super();
        this.service = new UserService();
    }

    consultar = () => {
        const userFilter = {
            name: this.state.name,
            age: this.state.age,
            salary: this.state.salary
        }

        this.service
                .findByParams(userFilter)
                .then( resposta => {
                    this.setState({users: resposta.data})
                }).catch(error => {
                    console.log(error)
                })
    }

    editar = (id) => {
        this.props.history.push(`/register-user/${id}`)
    }

    confirmar = (user) => {
        this.setState({showConfirmDialog: true, userDeletar: user})
    }

    cancelarDelecao = () => {
        this.setState({showConfirmDialog: false, userDeletar: {}})
    }

    deletar = () => {
        this.service
            .deletar(this.state.userDeletar.id)
            .then (response => {
                const users = this.state.users;
                const index = this.state.users.indexOf(this.state.userDeletar)
                users.splice(index, 1);
                this.setState({users: users, showConfirmDialog: false})
                messages.mensgemSucesso('Usuário excluído com sucesso.')
            }).catch(error => {
                messages.mensgemErro('Ocorreu um erro ao tentar excluir o usuário.')
            })
    }

    preparaFormularioCadastro = () => {
        this.props.history.push('/register-user')
    }

    render() {
        const confirmDialogFooter = (
            <div>
                <Button label="Sim" icon="pi pi-check" onClick={this.deletar} />
                <Button label="Não" icon="pi pi-times" onClick={this.cancelarDelecao} />
            </div>
        );

        return(
            <Card title="Consultar Usuário">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bs-component">
                            <FormGroup htmlFor="inputName" label="Nome:">
                                <input type="text"
                                        className="form-control"
                                        id="inputName"
                                        value={this.state.name}
                                        onChange={e => this.setState({name: e.target.value})}
                                        placeholder="Digite o Nome" />
                            </FormGroup>
                            <FormGroup htmlFor="inputAge" label="Idade:">
                                <input type="number"
                                        className="form-control"
                                        id="inputAge"
                                        value={this.state.age}
                                        onChange={e => this.setState({age: e.target.value})}
                                        placeholder="Digite a Idade" />
                            </FormGroup> 
                            <FormGroup htmlFor="inputSalary" label="Salário:">
                                <input type="number"
                                        className="form-control"
                                        id="inputSalary"
                                        value={this.state.salary}
                                        onChange={e => this.setState({salary: e.target.value})}
                                        placeholder="Digite o Salário" />
                            </FormGroup>                                                                                    
                            <button onClick={this.consultar} type="button" className="btn btn-primary">Buscar</button>
                            <button onClick={this.preparaFormularioCadastro} type="button" className="btn btn-success">Cadastrar</button>
                        </div>
                    </div>
                </div>
                < br />
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <TableUsers users={this.state.users} 
                                              deletar={this.confirmar}
                                              editar={this.editar} />    
                        </div>
                    </div>
                </div>
                <div>
                <Dialog header="Confirmação de Exclusão" 
                        visible={this.state.showConfirmDialog} 
                        style={{ width: '50vw' }} 
                        modal={true}
                        footer={confirmDialogFooter} 
                        onHide={() => this.setState({showConfirmDialog: false})}>
                    <p>Confirma a exclusão do Usuário?</p>
                </Dialog>
                </div>
            </Card>                               
        )
    }

}

export default withRouter(ConsultUsers);