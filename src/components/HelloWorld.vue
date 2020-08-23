<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Social links</h3>
    <ul>
    <li><a href="https://www.youtube.com/channel/UCLYQcrpocBBQwL_aQVg5Jhw" target="_blank" rel="noopener">  <font-awesome-icon :icon="['fab', 'youtube']" /> Youtube</a></li>
    <li><a href="https://www.instagram.com/16buah/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" /> Instagram</a><br></li>
    <li><a href="https://web.facebook.com/16buah" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']" /> Facebook</a></li>
     <li><a href="https://twitter.com/16buah" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" /> Twitter</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #370b50;
  text-decoration: none;
}
a:hover {
   text-decoration: underline;
}
</style>
