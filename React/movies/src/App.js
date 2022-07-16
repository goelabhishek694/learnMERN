import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import List from './Components/List';
import Favourites from './Components/Favourites';
function App() {
  return (
    <>
      {/* <Navbar />
      <Banner />
      <List/> */}
      <Navbar/>
      <Favourites/>
    </>
  );
}

export default App;
