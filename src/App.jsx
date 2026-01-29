import './App.css';
import DarkMode, { GlobalStyles } from './components/DarkMode';
import Sidebar from './components/Sidebar';
import StackedCards from './components/StackedCards';

function App() {
  return (
    <>
      {/* <Sidebar /> */}
      {/* <StackedCards /> */}
      <GlobalStyles />
      {/* <ColorTheme /> */}
      <DarkMode />
    </>
  );
}

export default App;
