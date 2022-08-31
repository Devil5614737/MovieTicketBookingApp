import { signInWithPopup } from "firebase/auth";
import {auth,provider} from '../lib/firebase';



class Login {
  login:any
  constructor(){
    this.login= function loginWithGoogle(){
      signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        return user;
   
      }).catch((error) => {
   
        const errorMessage = error.message;
       
        const email = error.customData.email;
       return errorMessage
        // ...
      });
  }
}


}

export default new Login;