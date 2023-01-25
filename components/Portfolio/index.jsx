import style from "./Portfolio.module.css";
import { IoChevronDownOutline, IoEyeOutline } from "react-icons/io5";
import Image from "next/image";
import Project1 from "@/images/project-1.jpg";

import { useState } from "react";
const Portfolio = () => {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <article className={`${style.portfolio} ${style.active}`}>
      <header>
        <h2 className={style.article_title}>Portfolio</h2>
      </header>
      <section className={style.projects}>
        {/* Project Filter */}
        <ul className={style.filter_list}>
          <li className={style.filter_item}>
            <button className={style.active}>All</button>
          </li>
          <li className={style.filter_item}>
            <button className={style.active}>Web Design</button>
          </li>
          <li className={style.filter_item}>
            <button className={style.active}>Applications</button>
          </li>
          <li className={style.filter_item}>
            <button className={style.active}>Web Development</button>
          </li>
        </ul>
        {/* Filter Box */}
        <div className={style.filter_select_box}>
          <button
            className={`${style.filter_select} ${
              openFilter ? style.active : ""
            }`}
            onClick={() => {
              setOpenFilter(!openFilter);
            }}
          >
            <div className={style.select_value}>Select Category</div>
            <div className={style.select_icon}>
              <IoChevronDownOutline />
            </div>
          </button>
          <ul className={style.select_list}>
            <li className={style.select_item}>
              <button>All</button>
            </li>
            <li className={style.select_item}>
              <button>Web Design</button>
            </li>
            <li className={style.select_item}>
              <button>Applications</button>
            </li>
            <li className={style.select_item}>
              <button>Web Development</button>
            </li>
          </ul>
        </div>
        {/* Project List */}
        <ul className={style.project_list}>
          <li className={`${style.project_item} ${style.active}`}>
            <a>
              <figure className={style.project_img}>
                <div className={style.project_item_icon_box}>
                  <IoEyeOutline />
                </div>
                <Image
                  src={Project1}
                  width="auto"
                  height={"auto"}
                  alt="Project 1"
                  loading="lazy"
                />
              </figure>
              <h3 className={style.project_title}>Finance</h3>
              <p className={style.project_category}>Web development</p>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
