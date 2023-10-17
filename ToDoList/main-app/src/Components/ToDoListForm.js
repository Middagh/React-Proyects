import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

function ToDoListForm({ tasks, editTask, deleteTask }) {
  return (
    <ListGroup>
      {tasks.map((task, index) => (
        <ListGroup.Item key={index}>
          {task}
          <Button
            className="ml-2"
            variant="info"
            size="sm"
            onClick={() => editTask(index)}
          >
            Editar
          </Button>
          <Button
            className="ml-2"
            variant="danger"
            size="sm"
            onClick={() => deleteTask(index)}
          >
            Eliminar
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ToDoListForm;
