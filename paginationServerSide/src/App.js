import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAll } from './api/ImagesApi';
import GalleryImages from "./components/GalleryImages";
import AppBar from './components/AppBar';
function App() {
  const dis = useDispatch()
  //Before the App.js render  this the  server call to the URL
  useEffect(() => {
    dis(getAll())
  }, [])

  return (
    <div className="App">
      <AppBar />
      <GalleryImages />
    </div>
  );
}

export default App;
