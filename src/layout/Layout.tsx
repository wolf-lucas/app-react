import './Layout.scss';

type LayoutProps = {
  children?: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return (
    <>
      {children}
    </>
  )
}

export default Layout;