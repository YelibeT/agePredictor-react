import { useState } from "react";
import "./App.css";

function App() {
  const [dob, setDob] = useState("");
  const [fdate, setFdate] = useState("");
  const [age, setAge] = useState(null);
  const [futureAge, setFutureAge] = useState(null);
  function getAge(dob) {
    const birthDate = new Date(dob);
    const year = birthDate.getFullYear();
    const month = birthDate.getMonth() + 1;
    const date = birthDate.getDate();

    const now = new Date();
    const yearNow = now.getFullYear();
    const monthNow = now.getMonth() + 1;
    const dateNow = now.getDate();

    const ageYear = yearNow - year;
    const ageMonth = monthNow - month;
    const ageDate = dateNow - date;

    setAge({ ageYear, ageMonth, ageDate });
  }
  function getFutureAge() {
    if (!dob || !fdate) return;
     const birthDate = new Date(dob);
    const futureDate = new Date(fdate);

    let fAgeYear = futureDate.getFullYear() - birthDate.getFullYear();
    let fAgeMonth = futureDate.getMonth() - birthDate.getMonth();
    let fAgeDay = futureDate.getDate() - birthDate.getDate();

    setFutureAge({ fAgeYear, fAgeMonth, fAgeDay });
  }
  return (
    <div className="container">
      <div>
        <h1>Age Predictor</h1>
        <div className="form">
          DoB:{" "}
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
            }}
          ></input>
          Future Year:{" "}
          <input
            type="date"
            id="fyear"
            value={fdate}
            onChange={(e) => {
              setFdate(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              getAge(dob);
              getFutureAge();
            }}
          >
            Calculate
          </button>
        </div>
        {age && (
          <div>
            <h2>Future Age: </h2>
            <p>
              You will be {futureAge.fAgeYear} years, {futureAge.fAgeMonth} months and {futureAge.fAgeDay} days old.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
