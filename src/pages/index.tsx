import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import User from "../core/User";

const Home = () => {

	const [mode, setMode] = useState<'table' | 'form'>('table');
	const [user, setUser] = useState(User.empty());

	const users = [
		new User("Yuri", 21, "1"),
		new User("Kamilla", 20, "2"),
		new User("Heitor", 21, "3"),
		new User("Guilherme", 20, "4"),
		new User("Alice", 39, "5"),
	];

	const selectUser = (user: User) => {
		setUser(user);
		setMode('form');

	}

	const deleteUser = (user: User) => {
		console.log("Excluir " + user.name);
	}

	const saveUser = (user: User) => {
		console.log(user);
		setMode('table');
	}

	const newUser = () => {
		setUser(User.empty());
		setMode('form');
	}

	return (
		<div className={`
			flex justify-center items-center h-screen
			bg-gradient-to-r from-red-400 to bg-purple-400
			text-white
		`}>
			<Layout title="CRUD simples">
				{mode === 'table' ? (
					<>
						<div className="flex justify-end items-center">
							<Button className="mb-3" color="green" onClick={newUser} >
								Novo usuário
							</Button>
						</div>
						<Table
							users={users}
							selectUser={selectUser}
							deleteUser={deleteUser}
						/>
					</>
				) : (
					<Form
						user={user} cancel={() => { setMode('table') }}
						save={saveUser}
					/>
				)}
			</Layout>
		</div>
	)
};

export default Home;
