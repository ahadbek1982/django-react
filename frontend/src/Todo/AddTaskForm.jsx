import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { URL } from "./Url_task";
import { useNavigate } from "react-router-dom";
import DropdownList from "react-widgets/DropdownList";
import ListTasks from "./ListTasks";
import ListUsers from "./ListUsers";
import ListOtdels from "./ListOtdels";

export function AddTaskForm() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [users, setusers] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/users/").then((res) => setusers(res.data));
  }, []);
  const lsuser = users.map((e) => e.username);

  const [data, setdata] = useState({
    sana: "",
    javobgar: "",
    topshiriq_turi: "",
    topshiriq_nomer: "",
    topshiriq_sana: "",
    topshiriq_otdel: "",
    topshiriq_mavzu: "",
    topshiriq_muddat: "",
  });
  console.log(data);

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(URL, data).then((res) => {
      console.log(res.data);
      navigate("/");
    });
  };
  const [selected, setSelected] = useState(lsuser[0]);
  return (
    <Card shadow={false}>
      <form onSubmit={handleSubmit}>
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
        <input
          type="date"
          placeholder="Sana"
          name="topshiriq_muddat"
          style={{ width: "460px" }}
          onChange={handleChange}
        />
        <br />
      </form>
    </Card>
  );
}
