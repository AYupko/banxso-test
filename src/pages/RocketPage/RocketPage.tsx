import "./RocketPage.scss";
import { useParams } from "react-router-dom";
import { Nav } from "../../components/Nav";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { getTechParams } from "../../utils/getTechParams";
import { RocketParams } from "../../components/RocketParams";
import { Button } from "../../components/Button/Button";
import { Footer } from "../../components/Footer";
import { useEffect } from "react";

export const RocketPage = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  
  const { id } = useParams();

  const { rockets } = useSelector((state: RootState) => state.rockets);
  const currentRocket = rockets.find((rocket) => rocket.id === id);

  if (!currentRocket) {
    return <p>Rocket not found</p>;
  }

  const fullTechParams = getTechParams(currentRocket);

  return (
    <>
      <main>
        <Nav />
        <section className="rocket-details">
          <div className="rocket-details__top">
            <h2 className="rocket-details__title">{currentRocket.name}</h2>
            <Button rocket={currentRocket} />
          </div>
          <div className="rocket-details__bottom">
            <img
              className="rocket-details__image"
              src={currentRocket.flickr_images[0]}
              alt={currentRocket.name}
            />
            <div className="rocket-details__params">
              <p className="rocket-details__name">{currentRocket.name}</p>
              <RocketParams techParams={fullTechParams} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
