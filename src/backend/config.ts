import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuração do app firebase web
// Testando se firebase foi inicializado
// getApps retorna um array de apps inicializados
const app = !getApps().length ? initializeApp({
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
}) : getApp();


const dataBase = getFirestore(app);

// Exportando a conexão com o banco de dados do firestore.
export default dataBase;
