import './App.css';
import VideoPlay from './components/video/VideoPlay';
import VideoUpload from './components/video/VideoUpload';

function App() {

  return (
    <div className="App">
      <VideoUpload />
      <VideoPlay/>
    </div>
  );
}

export default App;
