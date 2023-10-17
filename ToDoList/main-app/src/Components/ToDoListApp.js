import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function ToDoListApp({ addTask }) {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim() === '') return;
    addTask(task);
    setTask('');
  };

  return (
    <Form>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Nueva tarea"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" onClick={handleAddTask}>
        Agregar Tarea
      </Button>
    </Form>
  );
}

export default ToDoListApp;
