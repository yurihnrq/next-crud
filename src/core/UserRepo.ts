import User from "./User";

// Aqui definimos uma interface para o repositório de usuários - como ele deve ser implementado.
interface UserRepo {
    save(user: User): Promise<User>;
    delete(user: User): Promise<void>;
    getAll(): Promise<User[]>;
}

export default UserRepo;
