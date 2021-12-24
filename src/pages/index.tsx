import { useEffect } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useUsers from "../hooks/useUsers";

const Home = () => {

	const {
		user,
		users,
		tableVisible,
		selectUser,
		saveUser,
		deleteUser,
		newUser,
		getAllUsers,
		showTable,
		load,
		setLoad
	} = useUsers();


	useEffect(() => {
		setLoad(true);
		getAllUsers();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={`
			flex justify-center items-center h-screen text-white
			bg-gradient-to-r from-red-400 to-purple-400
			dark:from-blue-900 dark:to-gray-700 
		`}>
			<Layout title="CRUD simples">
				{tableVisible ? (
					<>
						{load ? (
							<div className="w-100 flex justify-center">
								<div className="w-10 h-10 border-4 border-blue-300 rounded-full border-r-blue-500 animate-spin"></div>
							</div>
						) : (
							<>
								<div className="flex justify-end items-center">
									<Button className="mb-3" color="green" onClick={newUser} >
										Novo usuário
									</Button>
								</div>
								{users.length ? (
									<Table
										users={users}
										selectUser={selectUser}
										deleteUser={deleteUser}
									/>
								) : (
									<h1>
										Não há usuários cadastrados.
									</h1>
								)}
							</>
						)
						}
					</>
				) : (
					<Form
						user={user} cancel={() => { showTable(); }}
						save={saveUser}
					/>
				)}
			</Layout>
		</div>
	);
};

export default Home;
