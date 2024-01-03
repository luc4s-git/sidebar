import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context/context';

export default function Modal() {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <h4>Modal content</h4>
            <button className="close-modal-btn" onClick={closeModal}>
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
