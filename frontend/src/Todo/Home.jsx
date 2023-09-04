import React, { useEffect, useState } from "react";
import {
  Col,
  Form,
  Button,
  Container,
  Row,
  Stack,
  Modal,
  InputGroup,
  Alert,
} from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import UserPage from "./UserPage";
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function Home() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const tabrikShow = () => setShow2(true);
  const tabrikclose = () => setShow2(false);

  const [register, setRegister] = useState({});
  const [regshow, setregshow] = useState(false);
  const registerShow = () => setregshow(true);
  const registerClose = () => setregshow(false);

  const [users, setUsers] = useState({
    username: "",
    email: "",
    password: "",
    newpassword: "",
  });
  const [userindb, setuserindb] = useState({});
  // const psw = users.password
  // const psw2 = users.newpassword
  // console.log(psw,psw2)
  const [lsuser, setlsuser] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get("http://127.0.0.1:8000/api/users/")
      .then((res) => setlsuser(res.data));

    const lsusers = lsuser.map((user) => user.username);
    const lsemail = lsuser.map((mail) => mail.email);

    // console.log(lsusers, lsemail)

    if (lsusers.includes(users.username) || lsemail.includes(users.email)) {
      window.alert("Bu user oyki email bazada bor!!1");
    } else if (!(users.password == users.newpassword)) {
      window.alert("Parolni qaytatdan kiriting!!!");
    } else {
      // window.alert('ok')
      axios
        .post("http://127.0.0.1:8000/api/users/", users)
        .then((res) => {
          console.log(res);
          handleClose();
          tabrikShow();
        })

        .then(tabrikclose());
    }

    // use and email check
    // if(lsuser.icludes(users.username)){
    //   window.alert("Bu user basada bor!!! ")
    //   handleClose()

    //       // password check
    //   } else if (users.password==users.newpassword){
    //     axios.post('http://127.0.0.1:8000/api/users/', users)
    //     .then(res=> {
    //       console.log(res);
    //       handleClose()
    //       tabrikShow()

    //     })
    //     .catch(
    //       window.alert('no server')

    //     )
    //    .then(tabrikclose());

    // }else{
    //   axios.post('http://127.0.0.1:8000/api/users/', users)
    //     .then(res=> {
    //       console.log(res);
    //       handleClose()
    //       tabrikShow()

    //     })
    //     .catch(
    //       window.alert('no server')

    //     )
    //    .then(tabrikclose());
    //    console.log(psw, psw2)

    // }
  };

  const handleRegister = (event) => {
    // console.log(register.username)
    event.preventDefault();
    axios
      .get("http://127.0.0.1:8000/api/users/")

      .then((res) => {
        setUsers(res.data);
        const lsuser = users.map(
          (user) =>
            // console.log(user.username)
            user.username
        );

        const lspassword = users.map((pass) => pass.password);

        if (
          lsuser.includes(register.username) &&
          lspassword.includes(register.password)
        ) {
          navigate("userpage/");
        } else {
          window.alert("Sorry no user in db");
          // registerShow()
          registerClose();
          navigate("/");
        }
      });
    // .catch(
    //   window.alert('no server')
    // )

    // if(user.includes('user1')){
    //   window.alert('yes it is')
    //   } else{
    //     window.alert('no sorry')
    //   }
  };

  return (
    <Container fluid>
      <Row>
        <Stack direction="horizontal" gap={3}>
          <div className="p-2">First item</div>
          {/* <div className="p-1 ms-auto"><Button className='btn-primary'  onClick={ handleShow} >Register</Button></div> */}
          <div className="p-1 ms-auto">
            <Link className="btn btn-sm btn-primary me-2" onClick={handleShow}>
              Register
            </Link>
          </div>
          {/* <div className="p-1 "><Link to={`read/${d.id}`} className='btn btn-sm btn-primary me-2'>Sign in </Link></div> */}
          <div className="p-1 ">
            <Link
              className="btn btn-sm btn-primary me-2"
              onClick={registerShow}
            >
              Sign in{" "}
            </Link>
          </div>
          <div className="vr" />
          <div className="p-2">Third item</div>
        </Stack>

        {/* this is register model */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="username">Username</InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Enter username"
                //   value={users.username}
                onChange={(e) =>
                  setUsers({ ...users, username: e.target.value })
                }
              />
            </InputGroup>
            <p id="checkuser">test</p>
            {/* <br /> */}
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="email">Email</InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="example@mail.com"
                //   value={users.email}
                onChange={(e) => setUsers({ ...users, email: e.target.value })}
              />
            </InputGroup>

            <br />
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="password">Password</InputGroup.Text>
              <Form.Control
                id="password"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="password"
                //   value={users.password}
                onChange={(e) =>
                  setUsers({ ...users, password: e.target.value })
                }
              />
            </InputGroup>
            <br />
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="password2">Password again</InputGroup.Text>
              <Form.Control
                id="newpassword"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="password2"
                //   value={users.newpassword}
                onChange={(e) =>
                  setUsers({ ...users, newpassword: e.target.value })
                }
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        {/* this is register model */}
        <Modal show={regshow} onHide={registerClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign in</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="username">Username</InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Enter username"
                //   value={users.username}
                onChange={(e) =>
                  setRegister({ ...register, username: e.target.value })
                }
              />
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="password">Password</InputGroup.Text>
              <Form.Control
                id="password"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="password"
                //   value={users.password}
                onChange={(e) =>
                  setRegister({ ...register, password: e.target.value })
                }
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={registerClose}>
              Close
            </Button>
            <Link
              className="btn btn-sm btn-primary me-2"
              onClick={handleRegister}
              to={"userpage/"}
            >
              Login in
            </Link>
          </Modal.Footer>
        </Modal>

        {/* to show aler */}
        <Modal show={show2} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Tabriklaymi!!!!z</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Siz bizning saytimizga a'zo bo'ldingiz! Sign in tugmachasini posib
            user va parolni kiriting.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={tabrikclose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* <Alert show={show} variant="success">
        <Alert.Heading>My Alert</Alert.Heading>
        <p>
          Tabriklaymiz! Siz muvoffaqiytli ro'hatdan o'tdingiz
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert> */}
      </Row>

      <Row>
        <Col lg="2" className="bg-secondary bg-opacity-20">
          Left
        </Col>
        <Col className="min-vh-100 bg-info bg-opacity-10">
          {/* <UserContext.Provider>
            <ChannelContext.Provider>
              <UserPage />
            </ChannelContext.Provider>
          </UserContext.Provider> */}
        </Col>
        <Col xs lg="2" className="bg-secondary bg-opacity-20">
          Right
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

export default Home;
