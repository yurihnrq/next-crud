import User from '../../core/User';
import UserRepo from '../../core/UserRepo';
// Importando métodos do firebase para alteração de documentos e coleções.
import firestore, {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    setDoc
} from 'firebase/firestore';
import dataBase from '../config';

// Esta classe implementará a interface definina em UserRepo.
export default class UserCollection implements UserRepo {

    // Conversor de dados. Converterá um dado da Classe User para um formato armazenável no firestore.
    // Tambem realiza a função contrária.
    #converter = {
        // Converte dado para armazenare no firestore.
        toFirestore(user: User) {
            return {
                name: user.name,
                age: user.age,
            }
        },
        // Converte dado obtido do firestore.
        fromFirestore(
            snapshot: firestore.QueryDocumentSnapshot,
            options: firestore.SnapshotOptions
        ): User {
            const data = snapshot?.data(options);
            return new User(data.name, data.age, snapshot.id);
        }
    }

    // Representa a coleção de dados referente a 'users' e especifica qual o seu conversor.
    #userCollection = collection(dataBase, 'users').withConverter(this.#converter);

    // Salva o documento (User) no firestore.
    async save(user: User): Promise<User> {
        // Verificando se foi especificado um id de usuário.
        // Caso positivo, altera as informações do documento no firestore utilzando o conversor.
        // Caso negativo, adiciona o documento no firestore.
        if (user?.id) {
            await setDoc(doc(dataBase, 'users', user.id).withConverter(this.#converter), user);
            return user;
        } else {
            // Adiciona o documento no firestore na coleção especificada en #userCollection.
            const docRef = await addDoc(this.#userCollection, user);
            // Obtem as informações adicionadas no firestore.
            const doc = await getDoc(docRef);
            return doc.data();
        }
    }

    // Deleta o documento (User) do firestore.
    async delete(user: User): Promise<void> {
        // O path é 'users' e o segmento que especifica qual user é o id.
        return await deleteDoc(doc(dataBase, 'users', user.id));

    }

    // Obtem todos os documentos do firestore.
    async getAll(): Promise<User[]> {
        // Obtem todos os documentos da coleção.
        const usersSnapshot = await getDocs(this.#userCollection);
        // Monta uma lista (vetor) de usuários com os dados obtidos do firestore.
        const usersList = usersSnapshot.docs.map((doc) => doc.data()) ?? [];
        return usersList;
    }

}