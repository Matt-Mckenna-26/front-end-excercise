import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.sass';
import CovidBar from './components/CovidBar';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import SecondaryContent from './components/SecondaryContent';
import Footer from './components/Footer';
import LegalFooter from './components/LegalFooter';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <CovidBar/>
      <MainContent />
      <SecondaryContent/>
      <Footer/>
      <LegalFooter/>
    </div>
  );
}

export default App;
