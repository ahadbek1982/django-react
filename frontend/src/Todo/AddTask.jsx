import React, { useEffect, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { AddTaskForm } from "./AddTaskForm";
function AddTask() {
  const [tasks, settasks] = useState({
    sana: "",
    javobgar: "",
    topshiriq_turi: "",
    topshiriq_nomer: "",
    topshiriq_sana: "",
    topshiriq_otdel: "",
    topshiriq_mavzu: "",
    topshiriq_muddat: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddTaskForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Add Task
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddTask;
