components -> board

import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";
import '../App.css'
const TodoBoard = () => {
  const { state } = useTodos();
  const [filter, setFilter] = useState("ALL");

  let filteredTodos = state.todos;

  if (filter === "IN_PROGRESS") {
    filteredTodos = state.todos.filter(
      (t) => t.status === "IN_PROGRESS"
    );
  } else if (filter === "COMPLETED") {
    filteredTodos = state.todos.filter(
      (t) => t.status === "COMPLETED"
    );
  }

  filteredTodos = [...filteredTodos].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div className="w-100">
      <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4">
        <div>
          <h5 className="mb-0">
            {filter === "ALL" ? "All Tasks" : filter === "IN_PROGRESS" ? "In Progress" : "Completed"}
          </h5>
          <small className="total-count"> Total: {filteredTodos.length} </small>
        </div>
        <Form.Select value={filter} onChange={(e) => setFilter(e.target.value)} className="mt-3 mt-md-0" style={{ width: "180px", minWidth: "150px", cursor: 'pointer' }} >
          <option value="ALL">All Tasks</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="COMPLETED">Completed</option>
        </Form.Select>
      </div>

      {filteredTodos.length === 0 ? (
        <p className="text-muted text-center mt-4"> No tasks available</p>) :
        (
          filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        )}
    </div>
  );
};

export default TodoBoard;

form

import React, { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import { useTodos } from "../context/TodoContext";
import '../App.css'
const TodoForm = () => {
  const { dispatch } = useTodos();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [bgColor, setBgColor] = useState("#955f82");
  const [textColor, setTextColor] = useState("#d1d1d1");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [fontFamily, setFontFamily] = useState("inherit");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch({
      type: "ADD_TODO",
      payload: {
        id: Date.now(),
        title,
        description,
        createdAt: new Date().toISOString(),
        status: "IN_PROGRESS",
        style: { bgColor, textColor, bold, italic, fontFamily }
      }
    });

    setTitle("");
    setDescription("");
    setBgColor("#955f82");     
    setTextColor("#d1d1d1");   
    setBold(false);
    setItalic(false);
    setFontFamily("inherit");
  };

  return (
    <Card className="p-3 mb-4 shadow-sm rounded-4">
      <Form onSubmit={handleSubmit}>
        {/* <Form.Group className="mb-2" controlId="titleInput">
          <Form.Label style={{ fontWeight: "bold", cursor: "pointer" }}>
            Title
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group> */}
        <Form.Control className="mb-2" placeholder="Todo Title *" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <Form.Control className="mb-2" as="textarea" rows={2} placeholder="Todo Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        {/* <Row className="mb-2">
          <Col>
            <Form.Label>Background</Form.Label>
            <Form.Control
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Label>Text</Form.Label>
            <Form.Control
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
            />
          </Col>
        </Row> */}
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="bgColorInput">
              <Form.Label style={{ cursor: "pointer" }} className="point">BG Color </Form.Label>
              <Form.Control type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="textColorInput">
              <Form.Label style={{ cursor: "pointer" }} className="point"> Text Color </Form.Label>
              <Form.Control type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} />
            </Form.Group>
          </Col>
        </Row>

        {/* <Row className="mb-2">
          <Col>
            <Form.Check label="Bold" checked={bold} onChange={() => setBold(!bold)} />
          </Col>
          <Col>
            <Form.Check label="Italic" checked={italic} onChange={() => setItalic(!italic)} />
          </Col>
        </Row> */}
        <Row className="mb-2">
          <Col>
            <Form.Check id="bold-checkbox" type="checkbox" style={{ cursor: "pointer" }} checked={bold} onChange={() => setBold(!bold)}
              label={<span style={{ fontWeight: "bold", cursor: "pointer" }} className="point">Bold</span>} />
          </Col>

          <Col>
            <Form.Check id="italic-checkbox" type="checkbox" style={{ cursor: "pointer" }} checked={italic} onChange={() => setItalic(!italic)}
              label={<span style={{ fontStyle: "italic", cursor: "pointer" }} className="point"> Italic</span>} />
          </Col>
        </Row>

        <Form.Select className="mb-3" style={{ cursor: "pointer" }} value={fontFamily} onChange={(e) => setFontFamily(e.target.value)}>
          <option value="inherit">Default</option>
          <option value="monospace">Monospace</option>
          <option value="cursive">Cursive</option>
          <option value="serif">Serif</option>
        </Form.Select>

        <Button type="submit" className="w-100 rounded-pill">Add Task</Button>
      </Form>
    </Card>
  );
};

export default TodoForm;


items

import React, { useState } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { useTodos } from "../context/TodoContext";
import "../App.css";

const TodoItem = ({ todo }) => {
  const { dispatch } = useTodos();

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [bgColor, setBgColor] = useState(todo.style.bgColor);
  const [textColor, setTextColor] = useState(todo.style.textColor);
  const [bold, setBold] = useState(todo.style.bold);
  const [italic, setItalic] = useState(todo.style.italic);
  const [fontFamily, setFontFamily] = useState(todo.style.fontFamily);
  const isTitleValid = title.trim() !== "";
  const style = {
    backgroundColor: isEditing ? bgColor : todo.style.bgColor,
    color: isEditing ? textColor : todo.style.textColor,
    fontWeight: isEditing
      ? bold ? "bold" : "normal"
      : todo.style.bold ? "bold" : "normal",
    fontStyle: isEditing
      ? italic ? "italic" : "normal"
      : todo.style.italic ? "italic" : "normal",
    fontFamily: isEditing ? fontFamily : todo.style.fontFamily
  };

  const handleUpdate = () => {
    if (!isTitleValid) return;

    dispatch({
      type: "UPDATE_TODO",
      payload: {
        id: todo.id,
        updatedData: {
          title: title.trim(),
          description,
          style: { bgColor, textColor, bold, italic, fontFamily }
        }
      }
    });

    setIsEditing(false);
  };

  return (
    <Card
      className="mb-3 shadow-sm rounded-4 task-card"
      style={{ backgroundColor: style.backgroundColor }}>
      <Card.Body>
        {isEditing ? (
          <div className="d-flex flex-column gap-2">
            <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} style={style} placeholder="Todo Title (Required *)" />
            <Form.Control as="textarea" rows={2} value={description} onChange={(e) => setDescription(e.target.value)} style={style} placeholder="Todo - Description" />
            <Row className="mt-2">
              <Col>
                <Form.Group controlId={`bgColor-${todo.id}`}>
                  <Form.Label className="cr" htmlFor={`bgColor-${todo.id}`} style={{ cursor: "pointer", fontWeight: "bold" }} > Background </Form.Label>
                  <Form.Control id={`bgColor-${todo.id}`} type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} style={{ cursor: "pointer" }} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId={`textColor-${todo.id}`}>
                  <Form.Label className="cr" htmlFor={`textColor-${todo.id}`} style={{ cursor: "pointer", fontWeight: "bold" }}>Text</Form.Label>
                  <Form.Control id={`textColor-${todo.id}`} type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} style={{ cursor: "pointer" }} />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col>
                <Form.Check id={`bold-${todo.id}`} type="checkbox" checked={bold} onChange={() => setBold(!bold)} style={{ cursor: "pointer" }}
                  label={<span className="cr" style={{ fontWeight: "bold", cursor: "pointer" }} > Bold </span>} />
              </Col>
              <Col>
                <Form.Check id={`italic-${todo.id}`} type="checkbox" checked={italic} onChange={() => setItalic(!italic)} style={{ cursor: "pointer" }}
                  label={<span className="cr" style={{ fontStyle: "italic", cursor: "pointer" }} > Italic </span>} />
              </Col>
            </Row>

            <Form.Select style={{ cursor: "pointer" }} className="mt-2" value={fontFamily} onChange={(e) => setFontFamily(e.target.value)}>
              <option value="inherit">Default</option>
              <option value="monospace">Monospace</option>
              <option value="cursive">Cursive</option>
              <option value="serif">Serif</option>
            </Form.Select>

            <div className="d-flex flex-column flex-sm-row gap-2 mt-3">
              <Button variant="success" className="w-100" onClick={handleUpdate} disabled={!isTitleValid}
                style={{ cursor: !isTitleValid ? "not-allowed" : "pointer" }}>Save
              </Button>

              <Button variant="secondary" className="w-100" onClick={() => setIsEditing(false)} > Cancel </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="d-flex justify-content-between align-items-start align-items-md-center flex-wrap gap-2">
              <h5 className="mb-0 flex-grow-1 text-break" style={style} > {todo.title}</h5>
              <div className="d-flex gap-2">
                <Button size="sm" variant="light" onClick={() => dispatch({ type: "TOGGLE_STATUS", payload: todo.id })} >
                  {todo.status === "COMPLETED" ? (
                    <i className="fa-solid fa-check" title="Completed"></i>
                  ) : (
                    <i className="fa-regular fa-hourglass-half" title="Pending"></i>
                  )}
                </Button>
                <Button size="sm" variant="light" onClick={() => setIsEditing(true)} >
                  <i className="fa-regular fa-pen-to-square" title="Edit"></i>
                </Button>

                <Button size="sm" variant="light" onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}>
                  <i className="fa-solid fa-trash-can" title="Delete"></i>
                </Button>
              </div>
            </div>

            <p className="mt-3 mb-2 text-break" style={style}>
              {todo.description}
            </p>

            <small style={style} className="task-date d-block">
              {new Date(todo.createdAt).toLocaleString()}
            </small>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default TodoItem;


cotext >TodoContext

import React, { createContext, useContext, useReducer, useEffect } from "react";

const TodoContext = createContext();

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  darkMode: JSON.parse(localStorage.getItem("darkMode")) || false
};

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };

    case "TOGGLE_STATUS":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? {
                ...todo,
                status:
                  todo.status === "IN_PROGRESS"
                    ? "COMPLETED"
                    : "IN_PROGRESS"
              }
            : todo
        )
      };

    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, ...action.payload.updatedData }
            : todo
        )
      };

    case "TOGGLE_DARK":
      return {
        ...state,
        darkMode: !state.darkMode
      };

    default:
      return state;
  }
}

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
  }, [state.darkMode]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);


app.jsx

import React from "react";
import { Container, Card, Form, Row, Col } from "react-bootstrap";
import { useTodos } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoBoard from "./components/TodoBoard";

function App() {
  const { state, dispatch } = useTodos();

  return (
    <div className={state.darkMode ? "dark-mode" : "light-mode"}>
      <Container className="py-4">
        <Card className="p-4 rounded-4 shadow-sm">
          <div className="d-flex justify-content-between mb-3">
            <h3>My Todo Board</h3>
            <Form.Check type="switch" id="mode" style={{ cursor: "pointer" }}
              // label={state.darkMode ? "Dark Mode" : "Light Mode"}
              label={<span style={{ fontWeight: "bold" }}>{state.darkMode ? "Dark Mode" : "Light Mode"}</span>}
              checked={state.darkMode}
              onChange={() => dispatch({ type: "TOGGLE_DARK" })}
            />
            {/* <Form.Check id="bold-checkbox" type="checkbox" style={{ cursor: "pointer" }} checked={bold} onChange={() => setBold(!bold)}
              label={<span style={{ fontWeight: "bold", cursor: "pointer" }}>Bold</span>} /> */}
          </div>

          <Row>
            <Col xs={12} md={4}> <TodoForm /> </Col>
            <Col xs={12} md={8}><TodoBoard /></Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default App;


main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TodoProvider } from "./context/TodoContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TodoProvider>
    <App />
  </TodoProvider>
);


index.css

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://kit.fontawesome.com/a4218e0c32.js" crossorigin="anonymous"></script>
    <title>Todo List | Context API</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>


app.css

.light-mode {
  background: #f8f9fa;
  min-height: 100vh;
  transition: 0.3s ease;
}

.light-mode .task-card:hover {
  border: 1px solid #dee2e6;
}

.light-mode .btn-light {
  border-color: #000;
}

/* -------------- dark mode --------- */

.dark-mode {
  background-color: #0f1115;
  min-height: 100vh;
  color: #e4e6eb;
  transition: all 0.3s ease;
}

.dark-mode .task-card:hover {
  border: 1px solid #343a40;
}

.dark-mode .card {
  background-color: #334155;
  color: white;
}

.dark-mode .form-control,
.dark-mode .form-select {
  background-color: #22252b;
  border: 1px solid #343a40;
  color: #ffffff;
}

.dark-mode .cr {
  color: #000;
}

.dark-mode .form-control::placeholder {
  color: #9aa0a6;
}

.dark-mode .form-control:focus,
.dark-mode .form-select:focus {
  background-color: #22252b;
  border-color: #4dabf7;
  box-shadow: 0 0 0 0.2rem rgba(77, 171, 247, 0.25);
  color: #ffffff;
}

.dark-mode .form-select {
  color: #ffffff;
}

.dark-mode .form-select option {
  background-color: #22252b;
  color: #ffffff;
}

.dark-mode .btn-light {
  background-color: #2a2f36;
  border: 1px solid #343a40;
  color: #ffffff;
}


.dark-mode .shadow-sm {
  box-shadow: 0 0 0 1px #2a2f36 !important;
}

.dark-mode .no-task {
  color: #fff !important;
}

/* -------------------other------------------ */
.form-check-input {
  cursor: pointer !important;
}

.form-check-label {
  cursor: pointer !important;
}

.task-date {
  font-size: 0.8rem;
  font-weight: 500;
  opacity: 0.8;
}

.task-card {
  transition: border 0.2s ease;
  border: 1px solid transparent;
}

.form-check-input:focus {
  border-color: #dee2e6 !important;
  outline: 0;
  box-shadow: none !important
}

.form-select:focus {
  border-color: #dee2e6 !important;
  outline: 0;
  box-shadow: none !important;
}

.form-control:focus {
  border-color: #dee2e6 !important;
  outline: 0;
  box-shadow: none !important;
}

.point:hover {
  text-decoration: underline;
}

.form-select:hover,
input[type='color']:hover,
.form-control:hover {
  border-color: #4dabf7 !important;
}


input[type='color'] {
  width: 45px;
  height: 45px;
  padding: 5px;
  border-radius: 50%;

}

input[type='color']::-webkit-color-swatch {
  border-radius: 50%;
}

.light-mode::selection {
  background: #4dabf7;
  color: #fff;
}
.dark-mode::selection {
  background: #fff;
  color: #4dabf7;
}

button:disabled {
  pointer-events: auto !important;
  cursor: not-allowed !important;
  opacity: 0.65;
}
