import User from "./User";

// Aqui definimos uma interface para o repositório de usuários - como ele deve ser implementado.
export default interface UserRepo {
    save(user: User): Promise<User>
    delete(user: User): Promise<void>
    getAll(): Promise<User[]>
}
