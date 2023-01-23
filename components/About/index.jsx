import Image from "next/image";
import style from "./About.module.css";
import DesignImage from "@/images/icon-design.svg";
import DevImage from "@/images/icon-dev.svg";
import MobileImage from "@/images/icon-app.svg";
import PhotoImage from "@/images/icon-photo.svg";
import Avatar1 from "@/images/avatar-1.png";
import Avatar2 from "@/images/avatar-2.png";
import Avatar3 from "@/images/avatar-3.png";
import Avatar4 from "@/images/avatar-4.png";
const About = () => {
  return (
    <article className={`${style.about} ${style.active}`}>
      <header>
        <h2 className={`${style.h2} ${style.article_title}`}>About me</h2>
      </header>
      {/* About ME */}
      <section className={style.article_text}>
        <p>
          My main area of expertise is in web development and mobile
          applications, and I am a Creative Director and UI/UX Designer from
          Delhi, India.It is my passion to simplify, style, and intuitively
          design complex problems
        </p>
        <p>
          It&apos;s my job to create a website that&apos;s functional,
          user-friendly, and attractive at the same time.Also, I add a personal
          touch to your product, making it eye-catching and easy-to-use.And By
          using creative techniques, I aim to convey your message and identity.
        </p>
      </section>
      {/* Services */}
      <section className={style.service}>
        <h3 className={`${style.service_title} ${style.h3}`}>
          It&apos;s what I do
        </h3>
        {/* Service List */}
        <ul className={style.service_list}>
          {/* Design */}
          <li className={style.service_item}>
            <div className={style.service_icon_box}>
              <Image
                src={DesignImage}
                alt="Design Image"
                width={"40"}
                height={"auto"}
              />
            </div>
            <div className={style.service_content_box}>
              <h4 className={`${style.h4} ${style.service_item_title}`}>
                Web design
              </h4>
              <p className={style.service_item_text}>
                A modern and high-quality design that is professionally made.
              </p>
            </div>
          </li>
          {/* Dev */}
          <li className={style.service_item}>
            <div className={style.service_icon_box}>
              <Image
                src={DevImage}
                alt="Dev Image"
                width={"40"}
                height={"auto"}
              />
            </div>
            <div className={style.service_content_box}>
              <h4 className={`${style.h4} ${style.service_item_title}`}>
                Web development
              </h4>
              <p className={style.service_item_text}>
                A professional approach to the development of sites.
              </p>
            </div>
          </li>
          {/* Mobile */}
          <li className={style.service_item}>
            <div className={style.service_icon_box}>
              <Image
                src={MobileImage}
                alt="Mobile Image"
                width={"40"}
                height={"auto"}
              />
            </div>
            <div className={style.service_content_box}>
              <h4 className={`${style.h4} ${style.service_item_title}`}>
                Mobile apps
              </h4>
              <p className={style.service_item_text}>
                The development of iOS and Android applications on a
                professional level.
              </p>
            </div>
          </li>
          {/* Video Editing */}
          <li className={style.service_item}>
            <div className={style.service_icon_box}>
              <Image
                src={PhotoImage}
                alt="Photo Image"
                width={"40"}
                height={"auto"}
              />
            </div>
            <div className={style.service_content_box}>
              <h4 className={`${style.h4} ${style.service_item_title}`}>
                Video Editing
              </h4>
              <p className={style.service_item_text}>
                With my professional editing skills, I am able to edit any type
                of video.
              </p>
            </div>
          </li>
        </ul>
      </section>
      {/* Testimonial */}
      <section className={style.testimonials}>
        <h3 className={style.testimonials_title}>Testimonials</h3>
        <ul className={`${style.testimonials_list} ${style.has_scrollbar}`}>
          <li className={style.testimonials_item}>
            <a href="#" className={style.content_card}>
              <figure className={style.testimonials_avatar_box}>
                <Image
                  src={Avatar1}
                  width={60}
                  height="auto"
                  alt="Daniel lewis"
                />
              </figure>
              <h4 className={style.testimonials_item_title}>Daniel lewis</h4>
              <div className={style.testimonials_text}>
                <p>
                  Vishu was hired to create a corporate identity. We were very
                  pleased with the work done. He has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </a>
          </li>

          <li className={style.testimonials_item}>
            <a href="#" className={style.content_card}>
              <figure className={style.testimonials_avatar_box}>
                <Image
                  src={Avatar2}
                  width={60}
                  height="auto"
                  alt="Jessica miller"
                />
              </figure>
              <h4 className={style.testimonials_item_title}>Jessica miller</h4>
              <div className={style.testimonials_text}>
                <p>
                  Vishu was hired to create a corporate identity. We were very
                  pleased with the work done. He has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </a>
          </li>

          <li className={style.testimonials_item}>
            <a href="#" className={style.content_card}>
              <figure className={style.testimonials_avatar_box}>
                <Image
                  src={Avatar3}
                  width={60}
                  height="auto"
                  alt="Emily evans"
                />
              </figure>
              <h4 className={style.testimonials_item_title}>Emily evans</h4>
              <div className={style.testimonials_text}>
                <p>
                  Vishu was hired to create a corporate identity. We were very
                  pleased with the work done. He has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </a>
          </li>
          <li className={style.testimonials_item}>
            <a href="#" className={style.content_card}>
              <figure className={style.testimonials_avatar_box}>
                <Image
                  src={Avatar4}
                  width={60}
                  height="auto"
                  alt="Henry william"
                />
              </figure>
              <h4 className={style.testimonials_item_title}>Henry william</h4>
              <div className={style.testimonials_text}>
                <p>
                  Vishu was hired to create a corporate identity. We were very
                  pleased with the work done. He has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default About;
