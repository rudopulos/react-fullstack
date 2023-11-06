import { HiBookOpen, HiAcademicCap } from "react-icons/hi";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const menuItems = [
    {
      id: "1",
      name: "University",
      icon: <HiAcademicCap />,
    },
    {
      id: "2",
      name: "Faculties",
      icon: <HiBookOpen />,
    },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarBrandBox}></div>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.icon} {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
