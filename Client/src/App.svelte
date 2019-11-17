<script>
  export let url;
  import { Router, Route } from "svelte-routing";
  import Login from "./Pages/Login.svelte";
  import PageNotFound from "./Pages/404.svelte";

  function apiCall(path, data) {
    return new Promise((resolve, reject) => {
      const init = {
        method: "POST",
        body: data
      };
      fetch("localhost:8000/" + path, init)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }
</script>

<style>

</style>

<Router {url}>
  <div>
    <Route path="/">
      <Login {apiCall} />
    </Route>
    <Route path="*" component={PageNotFound} />
  </div>
</Router>
