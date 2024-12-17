import './App.css';
import useLocalStorage from './hook/useLocalStorage';
import useDetectDevice from './hook/useDetectDevice';
//import useWindowResize from './hook/useWindowResize';

 function App() {
  const [isOpen, toggle] = useLocalStorage('tab', true)
  const device = useDetectDevice()
  // const window = useWindowResize()
  // console.log(window)

  
  return (
    <div className="app">
      <button onClick={() => toggle((prevMode => !prevMode))} className={`toggle-button ${isOpen ? 'dark' : 'light'}`}> 
      {isOpen ? 'Disable Dark Mode' : 'Enable Dark Mode'} </button>
      <h1>{device}</h1>
      <p>შეცვალეთ თქვენი ეკრანის ზომა, რათა გაიგოთ რომელ მოწყობილობას.</p>
    </div>
  );
 }

 export default App