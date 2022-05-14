import {gql} from 'apollo-angular'

const GET_TODOS = gql`
  query {
    todos {
      id
      name
      description
    }
  }
`

const ADD_TODO = gql`
  mutation addTodo($name: String!, $description: String!) {
    addTodo(name: $name, description: $description) {
      id
      name
      description
    }
  }
`

const DELETE_TODO = gql`
  mutation deleteTodo($id: Int!) {
    deleteTodo(id: $id) {
      id
    }
  }
  `

export {GET_TODOS, ADD_TODO, DELETE_TODO}
