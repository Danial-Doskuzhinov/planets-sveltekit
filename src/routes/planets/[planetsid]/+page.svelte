<script lang="ts">
  export let data;
  let planetData = data && data.body && data.body.data;
  let planet = planetData || {
    id: '',
    name: '',
    rotation: 0,
    revolution: 0,
    radius: 0,
    temperature:0,
    overview:{
      content:'',
      source:'',
    },
    structure:{
      content:'',
      source:'',
    },
    geology:{
      content:'',
      source:'',
    }
     
  };
  let content1 =planet.overview.content;
  let source1= planet.overview.source;

  function handle1() {
    content1 = planet.overview.content;
    source1 = planet.overview.source;
    image1 = planetImage[planet.id];;
}
  function handle2() {
    content1 = planet.structure.content;
    source1 = planet.structure.source;
    image1 = planetImage2[planet.id];
}
  function handle3(){
    content1 = planet.geology.content;
    source1 = planet.geology.source;
    image1 = planetImage3[planet.id];
  }
  const planetImage: Record<string, string> = { 
    "mercury": "/planet/mercury.svg",
    "neptune": "/planet/neptune.svg",
    "venus": "/planet/venus.svg",
    "earth": "/planet/earth.svg",
    "mars": "/planet/mars.svg",
    "jupiter": "/planet/jupiter.svg",
    "saturn": "/planet/saturn.svg",
    "uranus": "/planet/uranus.svg",
  };
  const planetImage2: Record<string, string> = { 
    "mercury": "/planet/mercury2.svg",
    "neptune": "/planet/neptune2.svg",
    "venus": "/planet/venus2.svg",
    "earth": "/planet/earth2.svg",
    "mars": "/planet/mars2.svg",
    "jupiter": "/planet/jupiter2.svg",
    "saturn": "/planet/saturn2.svg",
    "uranus": "/planet/uranus2.svg",
  };
  const planetImage3: Record<string, string> = { 
    "mercury": "/planet/mercury3.svg",
    "neptune": "/planet/neptune3.svg",
    "venus": "/planet/venus3.svg",
    "earth": "/planet/earth3.svg",
    "mars": "/planet/mars3.svg",
    "jupiter": "/planet/jupiter3.svg",
    "saturn": "/planet/saturn3.svg",
    "uranus": "/planet/uranus3.svg",
  };
let image1 =planetImage[planet.id];

</script>
{#if planet}
<main class="planet-main">
{#if planetImage[planet.id]}
  <picture>
    <img src={image1} alt={planet.id} />
  </picture>
{/if}

<div>
  <h1 class="planet-name">{planet.name}</h1> 
  <p class="overview-content">{content1}</p>
  
  <p class="overview-source">source:{source1}</p>
  <button on:click={handle1} class="btn" type="button"><h3 class="btn-overview">  OVERVIEW</h3></button><br>
  <button on:click={handle2} class="btn" type="button"><h3 class="btn-overview"> Internal Structure</h3></button><br>
  <button on:click={handle3}  class="btn" type="button"><h3 class="btn-overview"> Surface Geology</h3></button><br>
</div>
</main>
   
<footer>
  <div class="footer"><p class="footer-03">ROTATION TIME</p> <p class="footer-number">{planet.rotation}</p> </div>
  <div class="footer"><p class="footer-03">REVOLUTION TIME</p> <p class="footer-number">{planet.revolution}</p> </div>
  <div class="footer"><p class="footer-03">RADIUS</p> <p class="footer-number">{planet.radius}</p> </div>
  <div class="footer"><p class="footer-03">AVERAGE TEMP.</p> <p class="footer-number">{planet.temperature}</p> </div>
</footer>
   
{/if}  



<style>
  img{
    margin-top: 5rem;
    margin-left: 13rem;
  }
  .planet-main{
    display: flex;
    justify-content: space-between;
  }
  
  .planet-name{
    color: #FFF;
font-family: Antonio;
font-size: 4.5rem;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: uppercase;
  }
  .overview-content{
    width: 21.875rem;
color: #FFF;

font-family: Spartan;
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: 1.5625rem; /* 178.571% */
  }
  .overview-source{
    opacity: 0.5;
color: #FFF;
font-family: Spartan;
font-size: 0.875rem;
font-style: normal;
font-weight: 700;
line-height: 1.5625rem;
text-decoration-line: underline;
  }
  .btn{
background: #070724;
width: 30.875rem;
height: 3rem;
flex-shrink: 0;
margin-bottom: 1rem;
border: 1px solid #FFF;
cursor: pointer;
transition: background-color 0.3s;
}
.btn:hover{
background-color: aqua;
}
  .btn-overview{
    
    color: #FFF;
font-family: Spartan;
font-size: 0.75rem;
font-style: normal;

line-height: 1.5625rem; /* 208.333% */
letter-spacing: 0.16069rem;
text-transform: uppercase;
  }
 
  .footer-03{
    margin-top: 1.5rem;
    margin-left: 3rem;
    color: #FFF;
font-family: Spartan;
font-size: 0.9rem;
font-style: normal;
font-weight: 700;
line-height: 1.5625rem; /* 227.273% */
letter-spacing: 0.0625rem;
text-transform: uppercase;
opacity: 1.5;
  }
  footer{
    display: flex;
    justify-content: center;
    margin-top: 5.45rem;
  }
  .footer{
    margin-left: 1.9rem;
    width: 15.9375rem;
height: 8rem;
flex-shrink: 0;
border: 1px solid #FFF;
opacity: 0.4;
  }
  .footer-number{
    margin-top: 1.3rem;
    margin-left: 3rem;
    color: #FFF;
    letter-spacing: -0.09375rem;

  }

</style>