import { useGlobalContext } from '../context/context';

export default function Home() {
  const { modalToggle } = useGlobalContext();
  return (
    <div>
      <button className="btn" onClick={modalToggle}>
        Show Modal
      </button>
    </div>
  );
}
