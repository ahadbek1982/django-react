import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState, useParams } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { URL } from "./Url_task";
import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
import ListTasks from "./ListTasks";
import ListUsers from "./ListUsers";
import ListOtdels from "./ListOtdels";

export function AddTaskForm(props) {
  const navigate = useNavigate();
  // const { id } = useParams();
  const [users, setusers] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/users/").then((res) => setusers(res.data));
  }, []);

  const lsuser = users.map((e) => e.username);
  // to get max id
  const [tasks, settasks] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/tasks/").then((res) => {
      const ids = res.data.map((e) => e.id);
      settasks(ids);
      // console.log(tasks);
    });
  }, []);
  const lsids = Math.max(...tasks);
  let test = lsids + 1;

  const [value, setdata] = useState({
    id: "",
    sana: "",
    javobgar: "",
    topshiriq_turi: "",
    topshiriq_nomer: "",
    topshiriq_sana: "",
    topshiriq_otdel: "",
    topshiriq_mavzu: "",
    topshiriq_muddat: "",
  });
  // console.log(data);

  const handleChange = (e) => {
    setdata({ ...value, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();

    axios.post("http://127.0.0.1:8000/tasks/", value).then((res) => {
      console.log(res.value);
      navigate("/");
    });
  }

  const [selected, setSelected] = useState(lsuser[0]);
  const [date, setdate] = useState();

  return (
    <Card shadow={false}>
      <form id="addtask">
        <input
          type="text"
          placeholder="id"
          name="id"
          // value={lsids}
          onChange={handleChange}
          style={{ width: "460px" }}
        />
        <br />
        <br />
        <input
          type="date"
          placeholder="Sana"
          name="sana"
          style={{ width: "460px" }}
          onChange={handleChange}
        />
        <br />
        <br />
        <ListUsers onChange={handleChange} />
        {/* <select
          value={selected}
          style={{ width: "460px" }}
          onChange={handleChange}
          name="javobgar"
        >
          {lsuser.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select> */}

        <br />
        <br />
        <ListTasks onChange={handleChange} />

        <br />
        <br />
        <Input
          placeholder="topshiriq_nomer"
          name="topshiriq_nomer"
          style={{ width: "460px" }}
          onChange={handleChange}
        />
        <br />

        <Input
          type="date"
          placeholder="topshiriq_sana"
          name="topshiriq_sana"
          style={{ width: "460px" }}
          onChange={handleChange}
        />
        <br />

        <ListOtdels onChange={handleChange} />
        {/* <Input
          placeholder="topshiriq_otdel"
          name="topshiriq_otdel"
          style={{ width: "460px" }}
          onChange={handleChange}
        /> */}
        <br />
        <br />
        <Input
          placeholder="topshiriq_mavzu"
          name="topshiriq_mavzu"
          style={{ width: "460px" }}
          onChange={handleChange}
        />
        <br />
        {/* <AddDate /> */}

        <input
          type="date"
          placeholder="Sana"
          name="topshiriq_muddat"
          style={{ width: "460px" }}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          value="Submit"
          form="addtask"
          onClick={handleSubmit}
        />
      </form>
    </Card>
  );
}
