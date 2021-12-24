import User from "../core/User";
import { EditIcon, TrashIcon } from "./Icons";

interface TableProps {
    users: User[];
    selectUser?: (user: User) => void
    deleteUser?: (user: User) => void
}


const Table = ({ users, selectUser, deleteUser }: TableProps) => {

	const showActions = selectUser || deleteUser;

	const renderHeader = () => {
		return (
			<tr>
				<th className='text-left p-3'>Código</th>
				<th className='text-left p-3'>Nome</th>
				<th className='text-left p-3'>Idade</th>
				{showActions ? (
					<th className='p-3'>Ações</th>
				) : false}
			</tr>
		);
	};

	const renderData = () => {
		return users?.map((user, i) => {
			return (
				<tr
					key={user.id}
					className={`${i % 2 == 0 ? "bg-blue-200 dark:bg-blue-500" : "bg-blue-100 dark:bg-blue-600"}`}
				>
					<td className='text-left p-3'>{user.id}</td>
					<td className='text-left p-3'>{user.name}</td>
					<td className='text-left p-3'>{user.age}</td>
					{showActions ? (
						renderActions(user)
					) : false}
				</tr>
			);
		});
	};

	const renderActions = (user: User) => {
		return (
			<td className='flex justify-center items-center'>
				{selectUser ? (
					<button
						className={`
                            text-green-500 rounded-full
                            hover:bg-green-100
                            dark:hover:bg-green-700
                            p-2 m-1
                        `}
						onClick={() => { selectUser?.(user); }}
					>
						{EditIcon}
					</button>
				) : false}
				{deleteUser ? (
					<button
						className={`
                            text-red-500 rounded-full
                            hover:bg-red-100
                            dark:hover:bg-red-700
                            p-2 m-1
                        `}
						onClick={() => { deleteUser?.(user); }}
					>
						{TrashIcon}
					</button>
				) : false}
			</td>
		);
	};

	return (
		<div className='overflow-auto rounded-xl w-full'>
			<table className='w-full overflow-hidden'>
				<thead className={`
                text-white
                bg-gradient-to-r from-blue-500 to-blue-600
                dark:from-blue-800 dark:to-blue-900 dark:text-gray-300
            `}>
					{renderHeader()}
				</thead>
				<tbody>
					{renderData()}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
