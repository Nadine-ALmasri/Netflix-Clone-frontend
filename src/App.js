import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './componats/Navbars';
import {Routes , Route} from 'react-router-dom';
import Home from './componats/Home';
import FavList from './componats/FavList';
import MovieList from './componats/MovieList';

function App() {
  return (
    <>
    <Navbars/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/favlist' element={<FavList/>}> </Route>
    </Routes>
    </>
  );
}

export default App;