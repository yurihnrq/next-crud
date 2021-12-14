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

    const formValidate = (user: User): {status: boolean, response: string} => {

        if (user.name.length < 2)
            return {status: false, response: "Nome de usuário inválido."};

        if (user.age < 1)
            return {status: false, response: "Idade de usuário inválida."};

        return {status: true, response: "Usuário válido."};
    }

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
                    onClick={() => {
                        const data = new User(name, +age, user?.id);
                        const {status, response} = formValidate(data);
                        
                        if (status)
                            save?.(data);
                        else
                            console.log("Erro no cadastro: " + response);
                    }}
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
