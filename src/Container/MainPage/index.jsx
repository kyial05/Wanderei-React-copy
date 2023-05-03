import css from "./main.module.css";
import firstFront from "../Img/firstFront.svg";

export const MainPage = () => {
  return (
    <section>
      <section className={css.headerNav}>
        <ul>
          <li>
            <a href="#!">Blog</a>
          </li>
          <li>
            <a href="#!">Karte</a>
          </li>
          <li>
            <a href="#!">Sponsoren & Partner</a>
          </li>
          <li>
            <a href="#!">1000things.at</a>
          </li>
        </ul>
      </section>
      <section className={css.first_content_100_things}>
        <div className={css.first_bg}>
          <div className={css.first_front}>
            <div className={css.first_shape}>
              <div className={css.first_orange_round}></div>
              <img src={firstFront} alt="first_front" />
            </div>
          </div>
        </div>
      </section>
      <p className={css.under_first}>Blog</p>
    </section>
  );
};
