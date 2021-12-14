import Title from './Title';

// Com esta interface eu posso definir quais são as props que eu espero receber neste componente.
// Funciona como os atributos em POO.
interface LayoutProps {
    title: string,
    children: any
}

const Layout = ({ title, children }: LayoutProps) => {

    return (
        <div className={`
            flex flex-col w-full md:w-2/3 h-full md:h-auto
            bg-white text-gray-700 rounded-md
            dark:bg-gray-700 dark:text-gray-300
        `}>
            <Title text={title} />
            <main className="p-7 text-2xl">
                {children}
            </main>
        </div>
    );
};

export default Layout;
