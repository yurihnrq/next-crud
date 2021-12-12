import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import { useEffect, useState } from "react";
import UserCollection from "../backend/db/UserCollection";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import User from "../core/User";
import UserRepo from "../core/UserRepo";

const Home = () => {

	const userRepo: UserRepo = new UserCollection();
	
	const [mode, setMode] = useState<'table' | 'form'>('table');
	const [user, setUser] = useState<User>(User.empty());
	const [users, setUsers] = useState<User[]>([]);
	
	useEffect(() => {
		getAll();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	
	const getAll = () => {
		userRepo.getAll().then((users) => {
			setUsers(users);
			setMode('table');
		});
	}

	const selectUser = (user: User) => {
		setUser(user);
		setMode('form');

	}

	const deleteUser = async (user: User) => { 
		await userRepo.delete(user);
		getAll();
	}

	const saveUser = async (user: User) => {
		await userRepo.save(user);
		getAll();
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
