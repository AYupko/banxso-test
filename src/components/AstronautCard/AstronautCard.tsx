import { Astronaut } from '../../types/types';
import './AstronautCard.scss';

type Props = {
  astronaut: Astronaut
}

export const AstronautCard: React.FC<Props> = ({ astronaut }) => {
  return (
    <article className='astronaut'>
      <img className='astronaut__image' src={astronaut.img} alt={astronaut.name} />
      <span className='astronaut__position'>{astronaut.position}</span>
      <p className='astronaut__name'>{astronaut.name}</p>
    </article>
  );
}