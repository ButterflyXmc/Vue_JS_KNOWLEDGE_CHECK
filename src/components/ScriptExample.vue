<template>
  <div>
    <h1>W13E Vue JS KNOWLEDGE CHECKS</h1>
  </div>
</template>

<script>
// Add the following variables to your component:
// 1. tweets: Array of strings
// 2. num_friends: Number
// 3. is_logged_in: Boolean
export default {
  name: "ScriptExample",
  data() {
    return {
      tweets: ["Tweet1", "Tweet2", "Tweet3", "Tweet4"],
      numFriends: 10,
      isLoggedIn: true,
    };
  },

  // pt2 Create a function called showInfo and achieve the following :
  // 1. Inject the num_friends into a tag
  // 2. Inject a tag that reflects the user being logged in or not
  // 3. Inject each tweet into a tag.
  // mounting needs method, so we have to make a method first
  methods: {
    showInfo() {
      console.log("Showing info");
      // making a const so we don't repeat
      const myDiv = document.querySelector(`div`);
      // ------
      myDiv.insertAdjacentHTML(`beforeend`, `<h2>${this.numFriends}</h2>`);
      if (this.isLoggedIn) {
        myDiv.insertAdjacentHTML(`beforeend`, `<h3>Welcome to the page</h3>`);
      } else {
        myDiv.insertAdjacentHTML(`beforeend`, `<h3>User is not logged in</h3>`);
      }
      for (let tweet of this.tweets) {
        myDiv.insertAdjacentHTML(`beforeend`, `<p>${tweet}</p>`);
      }
    },
  },
  // we need to call it in the function for the method to work
  mounted() {
    this.showInfo();
  },
};
</script>

<style scoped>
</style>