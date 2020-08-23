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
      <div class="mb-3 pics animation all 2">
        <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" alt="Card image cap">
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="mb-3 pics animation all 1">
        <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Vertical/mountain1.jpg" alt="Card image cap">
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="mb-3 pics animation all 1">
        <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg" alt="Card image cap">
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="mb-3 pics animation all 2">
        <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" alt="Card image cap">
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="mb-3 pics animation all 2">
        <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" alt="Card image cap">
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="mb-3 pics animation all 1">
        <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg" alt="Card image cap">
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
-webkit-column-count: 3;
-moz-column-count: 3;
column-count: 3;
-webkit-column-width: 33%;
-moz-column-width: 33%;
column-width: 33%; }
.gallery .pics {
-webkit-transition: all 350ms ease;
transition: all 350ms ease; }
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
