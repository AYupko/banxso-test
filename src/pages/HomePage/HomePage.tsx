import "./HomePage.scss";
import { RootState } from "../../store/store";
import { Header } from "../../components/Header";
import { useSelector } from "react-redux";
import { RocketCard } from "../../components/RocketCard";
import { SliderTeam } from "../../components/SliderTeam";
import { Footer } from "../../components/Footer";

export const HomePage = () => {
  const { rockets } = useSelector((state: RootState) => state.rockets);

  return (
    <>
      <Header />
      <main>
        <section className="section our-rockets">
          <h2 className="section__title">our rockets</h2>
          <div className="our-rockets__list">
            {rockets.map((rocket) => (
              <RocketCard rocket={rocket} key={rocket.id} />
            ))}
          </div>
        </section>

        <section className="section about-us">
          <h2 className="section__title">about us</h2>
          <div className="video-container">
            <iframe
              className="about-us__video"
              src="https://www.youtube.com/embed/921VbEMAwwY?si=tVGiokSDi1RnNEih"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </section>

        <section className="section team">
          <SliderTeam />
        </section>
      </main>
      <Footer />
    </>
  );
};
