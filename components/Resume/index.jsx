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
            <span className={style.timeline_activity}>2022 - Present</span>
            <p className={style.timeline_text}>
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>
        </ol>
      </section>
      {/* Skills */}
      <section className={style.skills}>
        <h3 className={style.skills_title}>My Skills</h3>
        <ul className={`${style.skills_list} ${style.content_card}`}>
          <li className={style.skills_item}>
            <div className={style.title_wrapper}>
              <h5>Web design</h5>
              <data value={80}>80%</data>
            </div>
            <div className={style.skill_progress_bg}>
              <div
                className={style.skill_progress_fill}
                style={{ width: "80%" }}
              />
            </div>
          </li>
          <li className={style.skills_item}>
            <div className={style.title_wrapper}>
              <h5>Javascript</h5>
              <data value={85}>85%</data>
            </div>
            <div className={style.skill_progress_bg}>
              <div
                className={style.skill_progress_fill}
                style={{ width: "85%" }}
              />
            </div>
          </li>
          <li className={style.skills_item}>
            <div className={style.title_wrapper}>
              <h5>Mongo DB</h5>
              <data value={60}>60%</data>
            </div>
            <div className={style.skill_progress_bg}>
              <div
                className={style.skill_progress_fill}
                style={{ width: "60%" }}
              />
            </div>
          </li>
          <li className={style.skills_item}>
            <div className={style.title_wrapper}>
              <h5>React</h5>
              <data value={80}>80%</data>
            </div>
            <div className={style.skill_progress_bg}>
              <div
                className={style.skill_progress_fill}
                style={{ width: "80%" }}
              />
            </div>
          </li>
          <li className={style.skills_item}>
            <div className={style.title_wrapper}>
              <h5>Express</h5>
              <data value={70}>70%</data>
            </div>
            <div className={style.skill_progress_bg}>
              <div
                className={style.skill_progress_fill}
                style={{ width: "70%" }}
              />
            </div>
          </li>
          <li className={style.skills_item}>
            <div className={style.title_wrapper}>
              <h5>Figma</h5>
              <data value={65}>65%</data>
            </div>
            <div className={style.skill_progress_bg}>
              <div
                className={style.skill_progress_fill}
                style={{ width: "65%" }}
              />
            </div>
          </li>
          <li className={style.skills_item}>
            <div className={style.title_wrapper}>
              <h5>Video Editing</h5>
              <data value={75}>75%</data>
            </div>
            <div className={style.skill_progress_bg}>
              <div
                className={style.skill_progress_fill}
                style={{ width: "75%" }}
              />
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Resume;
