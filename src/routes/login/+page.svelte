<script lang="ts">
  import { firebaseConfig } from "$lib/firebaseConfig"
  import { initializeApp , getApps, getApp} from "firebase/app";
  import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";
  import { browser } from "$app/environment";
  import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";
  import { onMount } from 'svelte';
 //console.log(auth);
 const firebaseApp = browser && (getApps().length === 0 ? initializeApp(firebaseConfig) : getApp());
 const db = browser && getFirestore(firebaseApp);
 let email ="";
 let password ="";
 let user;
 const login = () => {
   const auth = browser && getAuth(firebaseApp);
  signInWithEmailAndPassword(auth, email, password)
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

 onMount(async () => {
		const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (newUser) => {
      user = newUser;
    });
	});
  const colRef = collection(db, "cities")
  let submite = () => {
    
  }
  let test="";
</script>

<section>
  <h1>email password</h1>
  <input type="email" id="email" placehoder="email" bind:value={email} />
  <input type="passord" id="password" placehoder="password" bind:value={password}/>
  <button type="button" on:click={login}>login</button>
  {#if user}
  <button type="button" on:click={logout}>logout</button>
  {/if}

  <br/>
  <h1>Test write</h1>
  <input type="text" id="text" placehoder="test input" bind:value={test} />
  <button type="button" on:click={submite}>submit</button>
</section>

<style>

</style>