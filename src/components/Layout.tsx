import Title from './Title';

// Com esta interface eu posso definir quais são as props que eu espero receber neste componente.
// Funciona como os atributos em POO.
interface LayoutProps {
    title: string,
    children: any
}

const Layout = ({title, children}: LayoutProps) => {
    return (
        <div className={`
            flex flex-col w-2/3
            bg-white text-gray-700 rounded-md
        `}>
            <Title text={title}/>
            <main className="p-4 text-2xl">
                {children}
            </main>
        </div>
    );
};

export default Layout;
