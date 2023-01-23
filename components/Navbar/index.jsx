import style from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const { pathname } = useRouter();
  return (
    <nav className={style.navbar}>
      <ul className={style.navbar_list}>
        <li className={style.navbar_item}>
          <Link href={"/"}>
            <button
              className={`${style.navbar_link}  ${
                pathname == "/" && style.active
              }`}
            >
              About
            </button>
          </Link>
        </li>

        <li className={style.navbar_item}>
          <Link href={"/resume"}>
            <button
              className={`${style.navbar_link}  ${
                pathname.startsWith("/resume") && style.active
              }`}
            >
              Resume
            </button>
          </Link>
        </li>

        <li className={style.navbar_item}>
          <Link href={"/portfolio"}>
            <button
              className={`${style.navbar_link}  ${
                pathname.startsWith("/portfolio") && style.active
              }`}
            >
              Portfolio
            </button>
          </Link>
        </li>

        <li className={style.navbar_item}>
          <Link href={"blog"}>
            <button
              className={`${style.navbar_link}  ${
                pathname.startsWith("/blog") && style.active
              }`}
            >
              Blog
            </button>
          </Link>
        </li>

        <li className={style.navbar_item}>
          <Link href={"contact"}>
            <button
              className={`${style.navbar_link}  ${
                pathname.startsWith("/contact") && style.active
              }`}
            >
              Contact
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
