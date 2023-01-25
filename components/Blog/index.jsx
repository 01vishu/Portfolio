import Image from "next/image";
import style from "./Blog.module.css";
import Blog1 from "@/images/blog-1.jpg";
const Blog = () => {
  return (
    <article className={`${style.blog} ${style.active}`}>
      <header>
        <h3 className={style.article_title}>Blog</h3>
      </header>
      <section className={style.blog_posts}>
        <ul className={style.blog_posts_list}>
          <li className={style.blog_posts_item}>
            <a>
              <div className={style.blog_content}>
                <figure className={style.blog_banner_box}>
                  <Image src={Blog1} loading="lazy" />
                </figure>
                <div className={style.blog_meta}>
                  <p className={style.blog_category}>Design</p>
                  <span className={style.dot} />
                  <time dateTime="2022-07-26">26 July, 2022</time>
                </div>
                <h3 className={style.blog_item_title}>
                  Design conferences in 2022
                </h3>
                <p className={style.blog_text}>
                  Veritatis et quasi architecto beatae vitae dicta sunt,
                  explicabo.
                </p>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Blog;
