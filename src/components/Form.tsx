import { useState } from "react";
import User from "../core/User";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    user: User;
    cancel?: () => void;
    save?: (user: User) => void;
}

const Form = ({ user, cancel, save }: FormProps) => {

    const [name, setName] = useState(user?.name ?? '');
    const [age, setAge] = useState(user?.age ?? 0);

    return (
        <form onSubmit={e => e.preventDefault()}>
            {user?.id ? (
                <Input
                    label="ID" type="text" value={user?.id}
                    readonly className="mb-3"
                />
            ) : false}
            <Input
                label="Nome" value={name} setValue={setName}
                placeHolder="Insira o nome" className="mb-3"
            />
            <Input
                label="Idade" type="number" value={age}
                setValue={setAge} className="mb-4"
            />
            <div className="flex justify-end">
                <Button
                    color="blue" className="mx-4"
                    onClick={() => save?.(new User(name, +age, user?.id))}
                >
                    {user?.id ? "Alterar" : "Cadastrar"}
                </Button>
                <Button color="red" onClick={cancel}>
                    Cancelar
                </Button>
            </div>
        </form>
    )

}

export default Form;
