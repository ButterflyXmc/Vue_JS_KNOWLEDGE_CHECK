<template>
  <div id="app">
    <!-- 3. USE -->
    <ScriptExample />
  </div>
</template>


<script>
// 1. DECLARE!!
import ScriptExample from "@/components/ScriptExample.vue";

// 2. REGISTER!!
export default {
  name: "App",
  components: {
    ScriptExample,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
