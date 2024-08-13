import { useSelector } from 'react-redux';
import { Nav } from '../../components/Nav';
import './FavouritesPage.scss';
import { RootState } from '../../store/store';
import { RocketCard } from '../../components/RocketCard';

export const FavouritesPage = () => {
  const { favorites } = useSelector((state: RootState) => state.rockets);

  return (
    <main>
      <Nav />
      <section className='favourites'>
        {favorites.length > 0 ? (
          <>
          <h2 className='favourites__title'>Your favourite rockets</h2>
          <div className="favourites__list">
          {favorites.map(rocket => (
            <RocketCard rocket={rocket}/>
          ))}
        </div>
        </>) : (
          
          <p className='favourites__empty'>No favourites yet</p>
        )}
      </section>
    </main>
  )
}