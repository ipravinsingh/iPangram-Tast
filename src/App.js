// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/main/Main";

function App() {
  const [date, setDate] = useState(new Date());
  const [timezone, setTimezone] = useState("UTC");
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    // Fetch schedule data when component mounts
    fetchSchedule();
  }, [date, timezone]);

  const fetchSchedule = async () => {
    // Fetch schedule data from backend
    const response = await fetch(
      `/schedule?date=${date.toISOString()}&timezone=${timezone}`
    );
    const data = await response.json();
    setSchedule(data);
  };

  const handlePrevWeek = () => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() - 7);
    setDate(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + 7);
    setDate(newDate);
  };

  const handleTimezoneChange = (e) => {
    setTimezone(e.target.value);
  };

  return (
    <div className="App">
      <div className="controls">
        <button onClick={handlePrevWeek}>Previous</button>
        <input
          type="date"
          value={date.toISOString().split("T")[0]}
          onChange={(e) => setDate(new Date(e.target.value))}
        />
        <button onClick={handleNextWeek}>Next</button>

        <div className="timezone">
          <p>Timezone</p>
          <select
            className="selectTime"
            value={timezone}
            onChange={handleTimezoneChange}
          >
            <option value="UTC">UTC</option>
            <option value="UTC+5">UTC+5</option>{" "}
            {/* Just for example, you can put any two timezones */}
          </select>
        </div>
      </div>

      <div className="schedule">
        {/* Display schedule data here */}
        {schedule.map((item, index) => (
          <div key={index}>
            <span>{item.date}</span>
            <span>{item.time}</span>
            {/* Add checkboxes here */}
          </div>
        ))}
      </div>
      <Main />
    </div>
  );
}

export default App;
