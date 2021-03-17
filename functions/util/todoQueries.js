const GET_TODO = `
query {
 allTodos {
   data {
     name
     description
     urls
     finished 
     _id
   }
 }
}`;
const CREATE_TODO = `
    mutation($name: String!, $urls: String!, $description: String! ) {
        createTodo( data: { name:$name, urls: $urls, description: $description, finished: false }) {
            name
            description
            urls
            finished
            _id
        }
    }
`; 
const UPDATE_TODO = `
  mutation($id: ID!, $finished: Boolean!, $name: String!, $urls: String!, $description: String!  ) {
        updateTodo( id: $id, data: { name:$name, urls: $urls, description: $description, finished: $finished }) {
            name
            _id
            urls
            description
            finished
        }
    }
`;

const DELETE_TODO = `
  mutation($id: ID!) {
        deleteTodo( id: $id) {
            _id
        }
    }
`;
module.exports = {
  GET_TODO,
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO
};
