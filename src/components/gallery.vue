<template>
<div>
<section class="bg-dark text-white">
  <div class="col-md-12">

    <h1>{{ msg }}</h1>
    <h3  class="display-3">Social links</h3>
    <ul class="social">
    <li><a href="https://www.youtube.com/channel/UCLYQcrpocBBQwL_aQVg5Jhw" target="_blank" rel="noopener">  <font-awesome-icon :icon="['fab', 'youtube']" /> </a></li>
    <li><a href="https://www.instagram.com/16buah/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" /> </a><br></li>
    <li><a href="https://web.facebook.com/16buah" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']" /> </a></li>
     <li><a href="https://twitter.com/16buah" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" /> </a></li>
    </ul>

    </div>

</section>

<section class="">
  <h3 class="display-3">Drawing commission</h3>
 <!-- Grid row -->
    <div class="gallery mt-2" id="gallery">
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

<div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
  <h1 class="display-4">Pricing</h1>
  <p class="lead">Our commissions will cater your personas,your dream character into real drawing</p>
</div>

  <div class="card-deck mb-3 text-center">
    <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">Basic</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">$5 <small class="text-muted">/ 1pc</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>Black And white</li>
          <li>1 Characters</li>
          <li>3 Changes</li>
          <li>1 Accessories</li>
        </ul>
        <button type="button" class="btn btn-lg btn-block btn-outline-primary">Contact us</button>
      </div>
    </div>
    <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">Pro</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">$15 <small class="text-muted">/ 1pc</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
           <li>Black And white</li>
          <li>3 Characters</li>
          <li>7 Changes</li>
          <li>Full Accessories</li>
        </ul>
        <button type="button" class="btn btn-lg btn-block btn-primary">Contact us</button>
      </div>
    </div>
    <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">Enterprise</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ 1pc</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>Coloured</li>
          <li>5 Characters</li>
          <li>7 Changes</li>
          <li>Full Accessories</li>
        </ul>
        <button type="button" class="btn btn-lg btn-block btn-primary">Contact us</button>
      </div>
    </div>
  </div>
</section>

</div>


</template>

<script>
export default {
  name: 'Gallery',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin-bottom:2rem;
}
.social {
  list-style-type: none;
  padding: 0;
  display:inline-flex;
  flex-wrap: wrap;
}
.social li {
  display: inline-block;
  margin: 0 10px;
}
.social a {
  color: white;
  text-decoration: none;
  font-size:3rem;
}
.social a:hover {
  transform: scaleX(1);
}

.svg-inline--fa{
  font-size:3rem;
}

section{
  padding:1rem 0;
}
.gallery {
-webkit-column-count: 2;
-moz-column-count: 2;
column-count: 2;
-webkit-column-width: 50%;
-moz-column-width: 50%;
column-width: 50%;
}
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

.pricing-header {
  max-width: 700px;
}

.card-deck .card {
  min-width: 220px;
}

</style>
