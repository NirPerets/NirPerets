import './style.scss'
import Sidebar from './Components/Sidebar';
import Hero from './Components/Hero'
import CV from './Components/CV';
import About from './Components/About';
import Loading from './Components/Loading';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Techno from './Components/Techo';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
         <Hero />
         <Portfolio />
         <CV />
         <Contact />
      </div>
    </div>
  );
}

export default App;
