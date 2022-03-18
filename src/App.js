import './App.css';
import { useState } from 'react';
import { makeGradientString} from './gradient_degree'

function App() {
  const[colors, setColors] = useState(['#826f8b', '#3d316a', '#e66465']);
  const[degrees, setDegrees] = useState(0);
  



  const inputChangeHandler = (i) => event => {
     setColors(
      colors.map((color, index) => index === i ? event.target.value : color)
      );
  };

  const gradientString = makeGradientString(colors, degrees);



  return (
    <>
    <h1 className="text-center my-5">CSS Gradient Creator</h1>
    <div className="row mx-auto">
      {colors.map((color, i) => (
      
        <div className="col-6 px-5 my-4 text-center">
          <label className="form-label" htmlFor={`color ${i+1}`}>{`Color ${i+1}`}</label>
          <input className="form-control form-control-color m-0 mx-auto" style={{maxWidth: '60%'}} type="color" name={`color ${i+1}`} value={`${color}`} onInput={inputChangeHandler(i)}/>
        </div>

      ))}

        <div className="col-6 px-5 my-4 text-center">
          <label className="d-block" htmlFor="degrees">{`${degrees}`} degrees</label>
          <input className="form-range d-block mx-auto mt-3" style={{maxWidth: '60%'}} type="range" min="0" max="360" name="degrees" value={degrees} onChange={event => {setDegrees(event.target.value)}}></input> 
        </div>
      </div>
    
    <div className="row mb-4" style={{minHeight: 300, background: gradientString}}></div>
    <div className="text-center">background: {gradientString}</div>
  </>
    
  );
}

export default App;
