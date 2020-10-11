import React from 'react'

import currencyFormatter from 'currency-formatter'

export default props => {

    const rows = props.users.map( user => {
        return(
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{currencyFormatter.format(user.salary, {locale: 'pt-BR'})}</td>
                <td>
                    <button type="button" 
                            className="btn btn-primary"
                            onClick={e => props.editar(user.id)}>
                            Editar
                    </button>
                    <button type="button" 
                            className="btn btn-danger"
                            onClick={e => props.deletar(user)}>
                            Deletar
                    </button>
                </td>
            </tr>
        )
    })

    return(
        <table className="table table-hover">
            <thead>
                <tr>
                      <th scope="col">Nome</th>
                      <th scope="col">E-mail</th>
                      <th scope="col">Idade</th>
                      <th scope="col">Salary</th>
                      <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}