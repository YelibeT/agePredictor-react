import './App.css';

function App() {
  return (
    <div className='container'>
      <div>
        <h1>Age Predictor</h1>
        <div className='form'>
          DoB: <input type='date'  id='dob'></input>
          Future Year: <input type='date' id='fyear'></input>
          <button>Calculate</button>
        </div>
      </div>
    </div>
  );
}

export default App;
