<script>
  import { slide } from "svelte/transition";

  let email;
  let register = false;
  console.log("start");
  let headerText = "Login/Register";
  function getOneTimeCode(e) {
    e.preventDefault();
    console.log(register);

    if (register) {
      registerUser();
      console.log("wrong");
      return;
    }
    register = !register;
    headerText = "Register";
    console.log("hey");
    if (!email) {
      return;
    }

    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: {}
    };
    getUniqueNumberFetch = fetch();
  }
  let getUniqueNumberFetch;
  function login() {}
  function registerUser() {
    console.log("yia");
  }
</script>

<style>
  main {
    text-align: center;
  }
</style>

<main>
  <header>
    <h1>{headerText}</h1>
  </header>
  <form action="" on:submit={register ? registerUser : getOneTimeCode}>
    {#if register}
      <br />
      <div transition:slide>
        <input type="text" name="Name" id="" placeholder="Your name" />
      </div>
    {/if}
    <input
      type="text"
      name="email"
      bind:value={email}
      id="enterEmail"
      placeholder="E-Mail" />

    <br />
    <input type="submit" value="Proceed" />

  </form>
</main>
