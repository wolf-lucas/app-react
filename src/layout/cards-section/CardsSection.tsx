import './CardsSection.scss';

import CardList from '../../components/cards/CardList';
import SearchBar from '../../components/search-bar/SearchBar';

const CardsSection = () => {
  return (
    <>
      <section className="section-cards">
        <header className="section-cards__header">
          <h1>¿Qué producto necesitas?</h1>
          < SearchBar />
        </header>
        < CardList />
      </section>
    </>
  )
};

export default CardsSection;