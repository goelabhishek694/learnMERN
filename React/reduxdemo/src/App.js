import logo from './logo.svg';
import './App.css';
import Bat from './Components/Bat';
import { Provider } from 'react-redux';
import store from './redux/store'
import Ball from './Components/Ball';
import User from './Components/User';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Bat />
        <Ball />
        <User/>
      </Provider>
    </div>
  );
}

export default App;
