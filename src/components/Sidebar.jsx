import { useGlobalContext } from '../context/context';

import { socials, links } from '../data';
import { FaTimes } from 'react-icons/fa';
import logo from '../logo.svg';

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>
                {link.icon}
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-links">
        {socials.map((social) => {
          return (
            <li key={social.id}>
              <a href={social.url}>{social.icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
