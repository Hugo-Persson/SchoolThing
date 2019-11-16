<script>
  export let url;
  import { Router, Route } from "svelte-routing";
  import Login from "./Pages/Login.svelte";
  import PageNotFound from "./Pages/404.svelte";
</script>

<style>

</style>

<Router {url}>
  <div>
    <Route path="/" component={Login} />
    <Route path="*" component={PageNotFound} />
  </div>
</Router>
