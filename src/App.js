import { useState } from 'react';
import './App.css';

function App() {
  const [dob, setDob]=useState("")
  const [fdate, setFdate]=useState("")
  const [age, setAge]=useState("")
  function getAge(dob){
    const year=dob.getFullYear()
    const month=dob.getMonth()+1
    const date=dob.getDate()

    const now=new Date();
    const yearNow=now.getFullYear()
    const monthNow=now.getMonth()+1
    const dateNow=now.getDate()

    const ageYear=yearNow-year
    const ageMonth=monthNow-month
    const ageDate=dateNow-date

    setAge({ageYear,ageMonth, ageDate});
    return age;
  }
  function getFutureAge(age, fDate){

    const year=age.getFullYear()
    const month=age.getMonth()+1
    const date=age.getDate()

    const fYear=fDate.getFullYear()
    const fMonth=fDate.getMonth()+1
    const fDay=fDate.getDate()

    const fAgeYear=fYear-year
    const fAgeMonth=fMonth-month
    const fAgeDay=fDay-date

    setFdate({fAgeYear,fAgeMonth,fAgeDay})


  }
  return (
    <div className='container'>
      <div>
        <h1>Age Predictor</h1>
        <div className='form'>
          DoB: <input type='date'  id='dob' value={dob} onChange={(e)=>{setDob(e.target.value)}}></input>
          Future Year: <input type='date' id='fyear' value={fdate} onChange={(e)=>{setFdate(e.target.value)}}></input>
          <button onClick={getFutureAge}>Calculate</button>
        </div>
      </div>
    </div>
  );
}

export default App;
