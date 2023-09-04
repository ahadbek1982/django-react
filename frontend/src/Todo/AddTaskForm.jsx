import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
export function AddTaskForm() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Card shadow={false}>
      <form>
        {/* <label htmlFor="sana">Sana</label> */}
        <DatePicker
          placeholder="Sana"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          style={{ width: "460px" }}
        />
        <br />
        {/* <input
          type="date"
          placeholder="Sana"
          name="sana"
          style={{ width: "460px" }}
        /> */}
        <br />
        {/* <label htmlFor="javobgar">Javobgar</label> */}
        <Input
          placeholder="Javobgar"
          name="javobgar"
          style={{ width: "460px" }}
        />
        <br />
        <Input
          placeholder="topshiriq_turi"
          name="topshiriq_turi"
          style={{ width: "460px" }}
        />
        <br />
        <Input
          placeholder="topshiriq_nomer"
          name="topshiriq_nomer"
          style={{ width: "460px" }}
        />
        <br />
        <DatePicker
          placeholder="Sana"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          style={{ width: "460px" }}
        />
        {/* <Input
          placeholder="topshiriq_sana"
          name="topshiriq_sana"
          style={{ width: "460px" }}
        /> */}
        <br />
        <br />
        <Input
          placeholder="topshiriq_otdel"
          name="topshiriq_otdel"
          style={{ width: "460px" }}
        />
        <br />
        <Input
          placeholder="topshiriq_mavzu"
          name="topshiriq_mavzu"
          style={{ width: "460px" }}
        />
        <br />
        <Input
          placeholder="topshiriq_muddat"
          name="topshiriq_muddat"
          style={{ width: "460px" }}
        />
        <br />
      </form>
    </Card>
  );
}
