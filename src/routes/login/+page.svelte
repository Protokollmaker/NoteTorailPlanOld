<script lang="ts">
  import { firebaseConfig } from "$lib/firebaseConfig"
  import { initializeApp , getApps, getApp} from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { browser } from "$app/environment";
  import { getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
 //console.log(auth);
 const firebaseApp = browser && (getApps().length === 0 ? initializeApp(firebaseConfig) : getApp());
 const db = browser && getFirestore(firebaseApp);
 console.log({firebaseApp, db});
 let email ="";
 let password ="";
 let user;
 const login = () => {
   const auth = browser && getAuth(firebaseApp);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
 };
 const logout = async () => {
   const auth = getAuth(firebaseApp);
   signOut(auth).then(() => {
     user = null;
   });
 };
</script>

<section>
  <h1>email password</h1>
  <input type="email" id="email" placehoder="email" bind:value={email} />
  <input type="passord" id="password" placehoder="password" bind:value={password}/>
  <button type="button" on:click={login}>login</button>
  {#if user}
  <button type="button" on:click={logout}>logout</button>
  {/if}
</section>

<style>

</style>