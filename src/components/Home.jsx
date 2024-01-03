import { useGlobalContext } from '../context/context';
import { FaBars } from 'react-icons/fa';
import Modal from '../components/Modal';

export default function Home() {
  const { isModalOpen, modalToggle, sidebarToggle } = useGlobalContext();
  return (
    <div>
      <button className="menu" onClick={sidebarToggle}>
        <FaBars className="bars" />
      </button>
      <div className="modal-btn-container">
        {isModalOpen ? (
          <Modal />
        ) : (
          <button className="btn" onClick={modalToggle}>
            Show Modal
          </button>
        )}
      </div>
    </div>
  );
}
