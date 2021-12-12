import Client from '../core/Client';
import { EditIcon, TrashIcon } from './Icons';

interface TableProps {
    clients: Client[];
    selectClient?: (cliente: Client) => void
    deleteClient?: (cliente: Client) => void
}


const Table = ({ clients, selectClient, deleteClient }: TableProps) => {

    const showActions = selectClient || deleteClient;

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
        )
    }

    const renderData = () => {
        return clients?.map((client, i) => {
            return (
                <tr
                    key={client.id}
                    className={`${i % 2 == 0 ? 'bg-blue-200' : 'bg-blue-100'}`}
                >
                    <td className='text-left p-3'>{client.id}</td>
                    <td className='text-left p-3'>{client.name}</td>
                    <td className='text-left p-3'>{client.age}</td>
                    {showActions ? (
                        renderActions(client)
                    ) : false}
                </tr>
            )
        })
    }

    const renderActions = (client: Client) => {
        return (
            <td className='flex justify-center items-center'>
                {selectClient ? (
                    <button
                        className={`
                            text-green-500 rounded-full
                            hover:bg-green-100
                            p-2 m-1
                        `}
                        onClick={ _ => {selectClient?.(client)}}
                    >
                        {EditIcon}
                    </button>
                ) : false}
                {deleteClient ? (
                    <button 
                        className={`
                            text-red-500 rounded-full
                            hover:bg-red-100
                            p-2 m-1
                        `}
                        onClick={ _ => {deleteClient?.(client)}}
                    >
                        {TrashIcon}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className='w-full rounded-xl overflow-hidden'>
            <thead className={`
                text-white
                bg-gradient-to-r from-blue-500 to-blue-600
            `}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}

export default Table;
