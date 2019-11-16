<script>
  function getOneTimeCode(e) {
    e.preventDefault();
    console.log("hey");
  }
</script>

<style>
  main {
    text-align: center;
  }
</style>

<main>
  <h1>Login/Register</h1>
  <form action="" on:click={login}>
    <input type="text" name="email" id="enterEmail" placeholder="E-Mail" />
    <input type="submit" value="Proceed" />

  </form>
</main>
