<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Social links</h3>
    <ul>
    <li><a href="https://www.youtube.com/channel/UCLYQcrpocBBQwL_aQVg5Jhw" class="text-decoration-none text-light" target="_blank" rel="noopener"><i class="fa fa-youtube-play"></i>Youtube</a></li>
    <li><a href="https://www.instagram.com/16buah/" class="text-decoration-none text-light" target="_blank"><i class="fa fa-instagram" rel="noopener"></i>Instagram</a><br></li>
    <li><a href="https://web.facebook.com/16buah" class="text-decoration-none text-light" target="_blank"><i class="fa fa-facebook-square" rel="noopener"></i>Facebook</a></li>
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
