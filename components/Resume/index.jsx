import style from "./Resume.module.css";
import { IoBookOutline } from "react-icons/io5";
const Resume = () => {
  return (
    <article className={`${style.resume} ${style.active}`}>
      <header>
        <h2 className={style.article_title}>Resume</h2>
      </header>
      {/* Education */}
      <section className={style.timeline}>
        <div className={style.title_wrapper}>
          <div className={style.icon_box}>
            <IoBookOutline />
          </div>
          <h3>Education</h3>
        </div>
        <ol className={style.timeline_list}>
          <li className={style.timeline_item}>
            <h4 className={style.timeline_item_title}>
              BCA - Chaudhary Charan Singh University Meerut
            </h4>
            <span className={style.timeline_activity}>2021 - 2024</span>
            <p className={style.timeline_text}>
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>
          <li className={style.timeline_item}>
            <h4 className={style.timeline_item_title}>
              XIIth - Central Board of Secondary Education
            </h4>
            <span className={style.timeline_activity}>2021</span>
            <p className={style.timeline_text}>
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>
          <li className={style.timeline_item}>
            <h4 className={style.timeline_item_title}>
              Xth - Central Board of Secondary Education
            </h4>
            <span className={style.timeline_activity}>2019</span>
            <p className={style.timeline_text}>
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>
        </ol>
      </section>
      {/* Exprecince */}
      <section className={style.timeline}>
        <div className={style.title_wrapper}>
          <div className={style.icon_box}>
            <IoBookOutline />
          </div>
          <h3>Experience</h3>
        </div>
        <ol className={style.timeline_list}>
          <li className={style.timeline_item}>
            <h4 className={style.timeline_item_title}>Freelance</h4>
            <span className={style.timeline_activity}>Present</span>
            <p className={style.timeline_text}>
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>
        </ol>
      </section>
    </article>
  );
};

export default Resume;
