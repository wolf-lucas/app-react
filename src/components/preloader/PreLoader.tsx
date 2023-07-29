import './PreLoader.scss';

type Props = {
  component: React.ReactNode,
  quantity: number,
}

const PreLoader = ({component, quantity}: Props) => {

  return (
    <>
      <h1>
        Cargando...
      </h1>
    </>
  )
};

export default PreLoader;