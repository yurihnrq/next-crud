import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

const Home = () => {

	const clients = [
		new Client("Yuri", 21, "1"),
		new Client("Kamilla", 20, "2"),
		new Client("Heitor", 21, "3"),
		new Client("Guilherme", 20, "4"),
		new Client("Alice", 39, "5"),
	];

	const selectClient = (client: Client) => {
		console.log(client.name);
	}

	const deleteClient = (client: Client) => {
		console.log("Excluir " + client.name);
	}

	return (
		<div className={`
			flex justify-center items-center h-screen
			bg-gradient-to-r from-red-400 to bg-purple-400
			text-white
		`}>
			<Layout title="CRUD simples">
				<Table clients={clients} selectClient={selectClient} deleteClient={deleteClient}/>
			</Layout>
		</div>
	)
};

export default Home;
