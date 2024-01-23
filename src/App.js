import './App.css';
import './site.css';
import Bar from './Navbar';
import Examplesofwork from './WorkDone';
import Personalinfo from './Contact';
import Footer from './Footer';
import Rps from './rps';
import RpsFunctional from './rpsFunctional';

function App() {
  return (
    <>
      <Bar />
      <Personalinfo />
      <Examplesofwork />
      <Footer />
      <Rps />
      <RpsFunctional />
    </>
  );
}


export default App;
