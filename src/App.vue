<template>
  <div id="app">
    <svg id="logo" viewBox="0 0 2250 2250" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/">
     <path d="M175.002,2029.37l-9.547,-1859.25" /><path d="M1017.51,165.74l-845.036,888.728l1019.81,969.675" /><path d="M1213.88,2024.03l539.235,-567.114" /><path d="M1580.72,622.754l-884.694,910.96" /><path d="M1203.57,2034.87l-11.284,-10.729l21.591,-0.111l-10.307,10.84Z" /><path d="M2083.18,1109.78l-330.068,347.134" /><path d="M2083.18,1109.78l-330.068,347.134" /><path d="M1580.26,623.25l502.928,486.534" /><path d="M1580.26,623.25l502.928,486.534" />
     </svg>
     <h1 class="text-logo">16buah Studio</h1>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
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

#logo {
  width:50%;
  height:100vh;
  stroke-linecap:round;
  stroke-linejoin:round;
  fill:transparent;
  animation: fill 1s ease forwards 1.5s;
}

#logo path{
  stroke:#3E3E3E;
  stroke-width:4rem;
  fill-opacity:0;
  stroke-dasharray: 20000;
  stroke-dashoffset: 20000;
  animation: dash 10s ease forwards;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}


@keyframes fill {
  to {
     height: 10vh;
  }


}</style>
