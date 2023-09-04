import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Stack,
  Dropdown,
  Form,
  Button,
  Table,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { URL } from "./Url_task";
import AddTask from "./AddTask";

function UserPage() {
  const [tasks, settasks] = useState([]);
  const [column, setcolumn] = useState([]);

  useEffect(() => {
    axios.get(URL).then((res) => {
      settasks(res.data);
      const columns = Object.keys(res.data[0]);
      setcolumn(columns);
    });
  }, []);

  // get table heading data
  const ThData = () => {
    return column.map((data) => {
      return <th key={data}>{data}</th>;
    });
  };

  // get table row data
  const TdData = () => {
    return tasks.map((task) => {
      return (
        <tr>
          {column.map((v) => {
            return <td>{task[v]}</td>;
          })}
        </tr>
      );
    });
  };
  const [showaddtask, setShowAddtask] = useState(false);

  const addtaskShow = () => setShowAddtask(true);
  return (
    <Container fluid>
      <Row>
        <Stack direction="horizontal" gap={3}>
          <div className="p-2">
            <Image src="uzauto.png" />
          </div>
          <div className="p-2 ms-auto">
            <Link className="btn btn-sm btn-primary me-2" to={"/"}>
              Sign out
            </Link>
          </div>
          <div className="vr" />
          <div className="p-2">Third item</div>
        </Stack>
      </Row>
      <Row>
        <Col lg="2" className="bg-secondary bg-opacity-20">
          {/* topshiriqlar */}
          <div className="dropdown"></div>
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              className="w-100"
            >
              TOPSHIRIQ
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100 ">
              <Dropdown.Item>
                <AddTask />
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <div className="border-top  p-1">Reja</div>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <div className="border-top  p-1">Samara</div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* xisobotlar
     <Dropdown >
      <Dropdown.Toggle variant="light" id="dropdown-basic" className='w-100'>
        XISOBOTLAR
      </Dropdown.Toggle>

      <Dropdown.Menu className='w-100 '>
        <Dropdown.Item href="#/action-1"><div className='border-top  p-1'>KUNLIK</div></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><div className='border-top  p-1'>HAFTALIK</div></Dropdown.Item>
        <Dropdown.Item href="#/action-3"><div className='border-top  p-1'>OYLIK</div></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}
        </Col>

        <Col className="min-vh-100 bg-info bg-opacity-10">
          <Table striped className="border">
            {/* <DynamicTable/> */}

            <thead>
              {" "}
              <tr>{ThData()}</tr>
            </thead>
            <tbody>{TdData()}</tbody>
          </Table>
        </Col>
        <Col lg="2" className="bg-secondary bg-opacity-20">
          right
        </Col>
      </Row>
      <Row>
        <p className="p-2 bg-secondary text-center text-light border">
          Asaka 2023
        </p>
      </Row>
    </Container>
  );
}

export default UserPage;
