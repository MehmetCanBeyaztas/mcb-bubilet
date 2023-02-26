import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Tags from './components/Tags';
import Events from './components/Events';
import Filter from './components/Filter';
import Search from './components/Search'
import TopArrow from './components/TopArrow';
import './App.css';
import events from "./events.json"

function App() {
  return (
   <div>
    <NavBar/>
    <Search/>
    <Carousel/>
    <Tags/>
    <Filter/>
    <div className='container'>
      <div className='row row-cols-2 row-cols-lg-3 row-cols-md-3 row-cols-xl-3 row-cols-xxl-4 g-4'>
      {events.map(events => (
      <Events events={events} />
      ))}
      <TopArrow/>
      </div>
    </div>
    
    
   </div>
  );
}

export default App;
