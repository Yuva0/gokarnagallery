import classes from './App.module.css';
import AllPics from './components/pages/AllPics';
import MainPic from './components/pages/MainPic';
import Tagline from './components/tagline/Tagline';
import Location from './components/location/Location';

function App() {
  return (
    <div className={classes.appContainer}>
      <Tagline/>
      <AllPics/>
      {/* <MainPic/> */}
      {/* <Location/> */}
    </div>
  );
}

export default App;
