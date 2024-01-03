import Home from './components/Home';
import Sidebar from './components/Sidebar';
import { useGlobalContext } from './context/context';

const App = () => {
  const { isSidebarOpen, isModalOpen } = useGlobalContext();

  return (
    <main>
      <Home></Home>
      {isSidebarOpen && <Sidebar />}
    </main>
  );
};

export default App;
