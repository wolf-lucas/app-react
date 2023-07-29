import './CardsContainer.scss';


type Props = {
  children?: React.ReactNode;
}

const CardContainer = ({ children }: Props) => (
  <div className='cards-container'>
    {children}
  </div>
);

export default CardContainer;