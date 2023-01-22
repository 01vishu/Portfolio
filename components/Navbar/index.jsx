import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul className={style.navbar_list}>
        <li className={style.navbar_item}>
          <button className={`${style.navbar_link}  ${style.active}`}>
            About
          </button>
        </li>

        <li className={style.navbar_item}>
          <button className={style.navbar_link}>Resume</button>
        </li>

        <li className={style.navbar_item}>
          <button className={style.navbar_link}>Portfolio</button>
        </li>

        <li className={style.navbar_item}>
          <button className={style.navbar_link}>Blog</button>
        </li>

        <li className={style.navbar_item}>
          <button className={style.navbar_link}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
