import './App.css';

function App() {
  const change1=()=>{
    document.body.style.background='blue'
  }
  const change2=()=>{
    document.body.style.background='green'
  }
  const change3=()=>{
    document.body.style.background='red'
  }
  const change4=()=>{
    document.body.style.background='yellow'
  }
  const change5=()=>{
    document.body.style.background='orange'
  }
  const change6=()=>{
    document.body.style.background='purple'
  }
  return (
    <div>
      <div className="container">
       <h1>Background Colour Changer</h1>
      <div className='btns'>
        <button className='btn' onClick={change1}>blue</button>
        <button className='btn' onClick={change2}>Green</button>
        <button className='btn'onClick={change3}>Red</button>
        <button className='btn' onClick={change4}>Yellow</button>
        <button className='btn' onClick={change5}>Orange</button>
        <button className='btn' onClick={change6}>Purple</button>
      </div>
      </div>
     
    </div>
  );
  }

export default App;
