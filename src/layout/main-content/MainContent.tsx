import './MainContent.scss';

type Props = {
    children?: React.ReactNode;
}

const MainContent = ({ children }: Props) => {
    return (
        <>
            <main className="main">
                {children}
            </main>
        </>
    )
}

export default MainContent;