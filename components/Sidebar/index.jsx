import Image from "next/image";
import style from "./Sidebar.module.css";
import { BiChevronDown } from "react-icons/bi";
import {
  IoMailOutline,
  IoPhonePortraitOutline,
  IoCalendarOutline,
  IoLocationOutline,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
} from "react-icons/io5";
import Avatar from "@/images/vishu.jpeg";
import { useState } from "react";
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <aside className={`${style.sidebar} ${open && style.active}`}>
      {/* Container */}
      <div className={style.sidebar_info}>
        {/* Photo */}
        <figure className={style.avatar_box}>
          <Image
            src={Avatar}
            width={80}
            height="auto"
            alt="Vishu Verma"
            className={style.avatar_box}
          />
        </figure>
        {/* Breif INFO */}
        <div className={style.info_content}>
          <h1 className={style.name} title="Vishu Verma">
            Vishu Verma
          </h1>
          <p className={style.title}>Web developer</p>
        </div>
        {/* Show Content Button */}
        <button className={style.info_more_btn} onClick={() => setOpen(!open)}>
          <BiChevronDown size={20} />
          <span>Show Contacts</span>
        </button>
      </div>
      {/* Sidebar More Info */}
      <div className={style.sidebar_info_more}>
        <div className={style.separator}></div>
        {/* Contact Info */}
        <ul className={style.contact_list}>
          {/* Email */}
          <li className={style.contact_item}>
            <div className={style.icon_box}>
              <IoMailOutline className={style.icon} />
            </div>
            <div className={style.contact_info}>
              <p className={style.contact_title}>Email</p>
              <a
                href="mailto:vishuverma0789@gmail.com"
                className={style.contact_link}
              >
                vishuverma0789@gmail.com
              </a>
            </div>
          </li>
          {/* Phone no. */}
          <li className={style.contact_item}>
            <div className={style.icon_box}>
              <IoPhonePortraitOutline className={style.icon} />
            </div>
            <div className={style.contact_info}>
              <p className={style.contact_title}>Phone</p>
              <a href="tel:+91 (7827679559)" className={style.contact_link}>
                +91 7827679559
              </a>
            </div>
          </li>
          {/* Birthday */}
          <li className={style.contact_item}>
            <div className={style.icon_box}>
              <IoCalendarOutline className={style.icon} />
            </div>
            <div className={style.contact_info}>
              <p className={style.contact_title}>Birhday</p>
              <time dateTime="2003-07-26">July 26, 2003</time>
            </div>
          </li>
          {/* Location */}
          <li className={style.contact_item}>
            <div className={style.icon_box}>
              <IoLocationOutline className={style.icon} />
            </div>
            <div className={style.contact_info}>
              <p className={style.contact_title}>Location</p>
              <address>Gokulpur, Delhi, India</address>
            </div>
          </li>
        </ul>
        <div className={style.separator}></div>
        {/* Social Links */}
        <ul className={style.social_list}>
          {/* facebook link */}
          <li className={style.social_item}>
            <a href="#" className={style.social_link}>
              <IoLogoFacebook />
            </a>
          </li>
          {/* Twitter */}
          <li className={style.social_item}>
            <a
              href="https://twitter.com/rocodigital"
              className={style.social_link}
            >
              <IoLogoTwitter />
            </a>
          </li>
          {/* Instagram */}
          <li className={style.social_item}>
            <a
              href="https://www.instagram.com/01vishuverma"
              className={style.social_link}
            >
              <IoLogoInstagram />
            </a>
          </li>
          {/* Github */}
          <li className={style.social_item}>
            <a href="https://github.com/01vishu" className={style.social_link}>
              <IoLogoGithub />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
