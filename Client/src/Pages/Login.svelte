<script>
  import { slide } from "svelte/transition";

  export let apiCall;

  let email;
  let register = false;
  let headerText = "Login/Register";
  let fetch;

  function getOneTimeCode(e) {
    e.preventDefault();
    console.log(register);
    if (register) {
      registerUser();
      console.log("wrong");
      return;
    }
    fetch = apiCall("/login", email)
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err));

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
  {#if fetch != undefined}
    {#await fetch}
      <!-- fetch is pending -->
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    {:then value}
      <!-- fetch was fulfilled -->
      {value.message}
    {:catch error}
      <!-- fetch was rejected -->
      Error
    {/await}
  {:else}
    <!-- else content here -->

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
  {/if}

</main>
