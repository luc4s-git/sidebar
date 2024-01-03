import { useGlobalContext } from '../context/context';
import { FaBars } from 'react-icons/fa';

export default function Home() {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars className="bars" />
      </button>
      <button onClick={openModal} className="btn">
        show modal
      </button>
    </main>
  );
}
