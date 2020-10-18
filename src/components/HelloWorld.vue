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
    <!-- Grid row -->
    <div class="gallery" id="gallery">

      <!-- Grid column -->
      <div class="mb-3 pics animation all 1">
        <img class="img-fluid" src="https://pbs.twimg.com/media/EYThVNiXQAMdJz5?format=jpg&name=large" alt="Card image cap">
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="mb-3 pics animation all 1">
        <img class="img-fluid" src="https://pbs.twimg.com/media/ETxvvKuUcAY_KjP?format=jpg&name=large" alt="Card image cap">
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="mb-3 pics animation all 1">
        <img class="img-fluid" src="https://pbs.twimg.com/media/ETDAqtCUUAA3c9B?format=jpg&name=large" alt="Card image cap">
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="mb-3 pics animation all 1">
        <img class="img-fluid" src="https://pbs.twimg.com/media/EP8hBnDUUAERvc2?format=jpg&name=large" alt="Card image cap">
      </div>
      <!-- Grid column -->

    </div>
    <!-- Grid row -->
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

.gallery {
-webkit-column-count: 2;
-moz-column-count: 2;
column-count: 2;
-webkit-column-width: 50%;
-moz-column-width: 50%;
column-width: 50%; }
.gallery .pics {
-webkit-transition: all 350ms ease;
transition: all 350ms ease; }
.gallery .pics img{
  width:450px;
  height:450px;
  }
.gallery .animation {
-webkit-transform: scale(1);
-ms-transform: scale(1);
transform: scale(1); }

@media (max-width: 450px) {
.gallery {
-webkit-column-count: 1;
-moz-column-count: 1;
column-count: 1;
-webkit-column-width: 100%;
-moz-column-width: 100%;
column-width: 100%;
}
}

@media (max-width: 400px) {
.btn.filter {
padding-left: 1.1rem;
padding-right: 1.1rem;
}
}

</style>
