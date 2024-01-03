import { useGlobalContext } from '../context/context';

export default function Modal() {
  const { modalToggle, isModalOpen } = useGlobalContext();
  return (
    <div className="modal">
      <div className="modal-header">
        <button onClick={modalToggle}>X</button>
      </div>
      <h4>Modal Content</h4>
    </div>
  );
}
