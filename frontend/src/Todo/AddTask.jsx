import React, { useEffect, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { AddTaskForm } from "./AddTaskForm";
import { useNavigate } from "react-router-dom";
import { URL } from "./Url_task";
import axios from "axios";

function AddTask() {
  const navigate = useNavigate();
  // const [data, setdata] = useState({
  //   sana: "",
  //   javobgar: "",
  //   topshiriq_turi: "",
  //   topshiriq_nomer: "",
  //   topshiriq_sana: "",
  //   topshiriq_otdel: "",
  //   topshiriq_mavzu: "",
  //   topshiriq_muddat: "",
  // });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleChange = (e) => {
  //   setdata({ ...data, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  // axios.post(URL, data).then((res) => {
  //   console.log(res.data);
  //   navigate("/");
  // });
  // };
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
          {/* <Button variant="primary" type="submit" onClick={handleSubmit}>
            Add Task
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddTask;
