import { useGlobalContext } from '../context/context';

export default function Home() {
  const { openSidebar, openModal } = useGlobalContext();

  return <div>Home</div>;
}
