import SlickSlider from '../../components/slick-slider/SlickSlider';
import './TopProducts.scss';

const TopProducts = () => {
  return (
    <>
     <section className="section-top20">
        <header className="section-top20__header">
          <h1>Productos más vendidos</h1>
        </header>
        <div className="top20-container">
          < SlickSlider />
        </div>
    </section>

    </>
  );
};

export default TopProducts;