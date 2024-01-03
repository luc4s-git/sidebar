import { useGlobalContext } from '../context/context';
import { FaBars } from 'react-icons/fa';

export default function Home() {
  const { modalToggle, sidebarToggle } = useGlobalContext();
  return (
    <div>
      <button className="menu" onClick={sidebarToggle}>
        <FaBars className="bars" />
      </button>
      <button className="btn" onClick={modalToggle}>
        Show Modal
      </button>
    </div>
  );
}
