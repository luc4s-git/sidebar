import Home from './components/Home';
import Modal from './components/Modal';
import Sidebar from './components/Sidebar';
import { useGlobalContext } from './context/context';

const App = () => {
  const { isSidebarOpen, isModalOpen } = useGlobalContext();

  return (
    <main>
      <Home></Home>
      {isModalOpen && <Modal />}
      {isSidebarOpen && <Sidebar />}
    </main>
  );
};

export default App;
