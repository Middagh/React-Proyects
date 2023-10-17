import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormularioTareas from './FormularioTareas';
import ListaTareas from './ListaTareas';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTask = (task) => {
    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, task]);
    }
  };

  const editTask = (index) => {
    setEditIndex(index);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <h3>Lista de Tareas</h3>
          <FormularioTareas addTask={addTask} />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={6}>
          <ListaTareas tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
