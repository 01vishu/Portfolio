import style from "./Portfolio.module.css";
import { IoChevronDownOutline, IoEyeOutline } from "react-icons/io5";
import Image from "next/image";
import Project1 from "@/images/project-1.jpg";
import Project2 from "@/images/project-2.png";
import Project3 from "@/images/project-3.jpg";
import Project4 from "@/images/project-4.png";
import Project5 from "@/images/project-5.png";
import Project6 from "@/images/project-6.png";
import Project7 from "@/images/project-7.png";
import Project8 from "@/images/project-8.jpg";
import Project9 from "@/images/project-9.png";
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
            className={`${style.filter_select} ${openFilter && style.active}`}
          >
            <div
              className={style.select_value}
              onClick={() => {
                setOpenFilter(!openFilter);
              }}
            >
              Select Category
            </div>
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

          <li className={`${style.project_item} ${style.active}`}>
            <a>
              <figure className={style.project_img}>
                <div className={style.project_item_icon_box}>
                  <IoEyeOutline />
                </div>
                <Image
                  src={Project2}
                  width="auto"
                  height={"auto"}
                  alt="Project 1"
                  loading="lazy"
                />
              </figure>
              <h3 className={style.project_title}>Orizon</h3>
              <p className={style.project_category}>Web development</p>
            </a>
          </li>
          <li className={`${style.project_item} ${style.active}`}>
            <a>
              <figure className={style.project_img}>
                <div className={style.project_item_icon_box}>
                  <IoEyeOutline />
                </div>
                <Image
                  src={Project3}
                  width="auto"
                  height={"auto"}
                  alt="Project 1"
                  loading="lazy"
                />
              </figure>
              <h3 className={style.project_title}>Fundo</h3>
              <p className={style.project_category}>Web design</p>
            </a>
          </li>
          <li className={`${style.project_item} ${style.active}`}>
            <a>
              <figure className={style.project_img}>
                <div className={style.project_item_icon_box}>
                  <IoEyeOutline />
                </div>
                <Image
                  src={Project4}
                  width="auto"
                  height={"auto"}
                  alt="Project 1"
                  loading="lazy"
                />
              </figure>
              <h3 className={style.project_title}>Brawlhalla</h3>
              <p className={style.project_category}>Applications</p>
            </a>
          </li>
          <li className={`${style.project_item} ${style.active}`}>
            <a>
              <figure className={style.project_img}>
                <div className={style.project_item_icon_box}>
                  <IoEyeOutline />
                </div>
                <Image
                  src={Project5}
                  width="auto"
                  height={"auto"}
                  alt="Project 1"
                  loading="lazy"
                />
              </figure>
              <h3 className={style.project_title}>DSM</h3>
              <p className={style.project_category}>Web design</p>
            </a>
          </li>
          <li className={`${style.project_item} ${style.active}`}>
            <a>
              <figure className={style.project_img}>
                <div className={style.project_item_icon_box}>
                  <IoEyeOutline />
                </div>
                <Image
                  src={Project6}
                  width="auto"
                  height={"auto"}
                  alt="Project 1"
                  loading="lazy"
                />
              </figure>
              <h3 className={style.project_title}>MetaSpark</h3>
              <p className={style.project_category}>Web design</p>
            </a>
          </li>
          <li className={`${style.project_item} ${style.active}`}>
            <a>
              <figure className={style.project_img}>
                <div className={style.project_item_icon_box}>
                  <IoEyeOutline />
                </div>
                <Image
                  src={Project7}
                  width="auto"
                  height={"auto"}
                  alt="Project 1"
                  loading="lazy"
                />
              </figure>
              <h3 className={style.project_title}>Summary</h3>
              <p className={style.project_category}>Web development</p>
            </a>
          </li>
          <li className={`${style.project_item} ${style.active}`}>
            <a>
              <figure className={style.project_img}>
                <div className={style.project_item_icon_box}>
                  <IoEyeOutline />
                </div>
                <Image
                  src={Project8}
                  width="auto"
                  height={"auto"}
                  alt="Project 1"
                  loading="lazy"
                />
              </figure>
              <h3 className={style.project_title}>Task Manager</h3>
              <p className={style.project_category}>Applications</p>
            </a>
          </li>
          <li className={`${style.project_item} ${style.active}`}>
            <a>
              <figure className={style.project_img}>
                <div className={style.project_item_icon_box}>
                  <IoEyeOutline />
                </div>
                <Image
                  src={Project9}
                  width="auto"
                  height={"auto"}
                  alt="Project 1"
                  loading="lazy"
                />
              </figure>
              <h3 className={style.project_title}>Arrival</h3>
              <p className={style.project_category}>Web development</p>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
