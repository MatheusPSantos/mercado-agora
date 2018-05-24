import { Model } from "./Model";
import firebase from 'firebase';

// classe Usuário
export class Usuario extends Model {

    // atributos

    name: string;
    email: string;
    photo: any;
    uid: string;
    emailverif: string;

    // método para capturar os dados dos usuários
    public getUser() {
        // captura o usuario atual
        var user = firebase.auth().currentUser;

        var usuario = new Usuario();

        if(user != null) {
            usuario.name = user.displayName;
            usuario.email = user.email;
            usuario.photo = user.photoURL;
            usuario.uid = user.uid;
        }
    }
}

// name, email, photoUrl, uid, emailVerified;