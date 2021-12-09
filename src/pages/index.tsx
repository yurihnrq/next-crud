import Layout from "../components/Layout";

const Home = () => {
	return (
		<div className={`
			flex justify-center items-center h-screen
			bg-gradient-to-r from-red-400 to bg-purple-400
			text-white
		`}>
			<Layout title="CRUD simples">
				<span>Conteúdo</span>
			</Layout>
		</div>
	)
};

export default Home;
