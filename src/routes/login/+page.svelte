<script lang="ts">
  import { firebaseConfig } from "$lib/firebaseConfig"
  import { initializeApp , getApps, getApp} from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { browser } from "$app/environment";
 //console.log(auth);
 const firebaseApp = browser && (getApps().length === 0 ? initializeApp(firebaseConfig) : getApp());
 const db = browser && getFirestore(firebaseApp);
 console.log({firebaseApp, db});
</script>

<section>
  <h1>login with google</h1>
  <button type="button">login</button>
</section>

<style>

</style>