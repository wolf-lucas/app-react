import './PreLoader.scss';

type Props = {
  component: React.ReactNode,
  quantity: number,
}

const PreLoader = ({component, quantity}: Props) => {

  return (
    <>
      <h2>
        Loading...
      </h2>
    </>
  )
};

export default PreLoader;