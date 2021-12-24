import User from "../core/User";
import { useState } from "react";
import UserRepo from "../core/UserRepo";
import UserCollection from "../backend/db/UserCollection";
import useMode from "./useMode";

const useUsers = () => {
	const userRepo: UserRepo = new UserCollection();

	const [user, setUser] = useState<User>(User.empty());
	const [users, setUsers] = useState<User[]>([]);

	const {
		showForm,
		showTable,
		tableVisible,
		formVisible,
	} = useMode();

	const getAllUsers = () => {
		userRepo.getAll().then((users) => {
			setUsers(users);
			showTable();
		});
	};

	const selectUser = (user: User) => {
		setUser(user);
		showForm();

	};

	const deleteUser = async (user: User) => {
		await userRepo.delete(user);
		getAllUsers();
	};

	const saveUser = async (user: User) => {
		await userRepo.save(user);
		getAllUsers();
		showTable();
	};

	const newUser = () => {
		setUser(User.empty());
		showForm();
	};

	return {
		user,
		users,
		selectUser,
		saveUser,
		deleteUser,
		newUser,
		getAllUsers,
		formVisible,
		tableVisible,
		showTable
	};
};

export default useUsers;
