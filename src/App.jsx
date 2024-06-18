import { useState } from 'react'
import { Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function TodoList({ todos, deleteTodo }) {
  console.log(todos)

  return (
    <ul>
      {todos.map((todo, index) => {
        return <li key={todo.id}>
          {todo.todo}
          <Button variant='danger' className='ms-3 mb-1' onClick={() => deleteTodo(index)}>Delete</Button>
        </li>
      })}
    </ul>
  )
}

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")

  function keyHandler(todos) {
    return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1
  }

  function addTodo() {
    const todoId = keyHandler(todos)
    setTodos([...todos, { id: todoId, todo: newTodo }]);
    setNewTodo("")
  }

  function handleDeleteTodo(index) {
    setTodos([...todos.filter((_, i) => i !== index)])
  }

  return (
    <>
      <div className="main-container m-5">
        <Row className='mx-5'>
          <Col md={4}>
            <input
              type="text"
              value={newTodo}
              onChange={(event) => setNewTodo(event.target.value)}
            />
            <Button variant="primary" className="ms-3" onClick={addTodo}>
              Add
            </Button>
          </Col>
          <Col md={8}>
            <TodoList todos={todos} deleteTodo={handleDeleteTodo} />
          </Col >
        </Row>
      </div>
    </>
  )
}

export default App
