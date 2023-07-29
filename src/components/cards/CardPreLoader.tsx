import PreLoader from "../preloader/PreLoader";

type Props = {
  children?: React.ReactNode,
}

const CardPreLoader = ({children}: Props) => {
  return (
    <>
      <PreLoader component={children} quantity={10}/>
    </>
  )
};

export default CardPreLoader;