<script lang="ts">
  import Footer from "../../../lib/Component/footer.svelte";
	import type { PageData } from "./$types";
  export let data:PageData;
  $: planet =data.planets;
  console.log(planet);
  
  $: content1 =planet.overview_content;
  $: source1= planet.overview_source;

  function handle1() {
    content1 = planet.overview_content;
    source1 = planet.overview_source;
    image1 = planetImage[planet.id];;
}
  function handle2() {
    content1 = planet.structure_content;
    source1 = planet.structure_source;
    image1 = planetImage2[planet.id];
}
  function handle3(){
    content1 = planet.geology_content;
    source1 = planet.geology_source;
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
$: image1 =planetImage[planet.id];
async function sendData() {
  try {
    const res = await fetch('/api/v1/planets', {
      method:"POST",
      body: JSON.stringify({
        id: planet.id,
        name: planet.name,
        radius: planet.radius,
      })
    });
    if (!res.ok) {
      await Promise.reject(new Error(`${res.status} , ${res.statusText}`))
    }
    const json = await res.json()
  } catch (error) {
    console.error(error);
    
  }
}
</script>
{#if planet}
<main class="planet-main">
{#if planetImage[planet.id]}
  <picture>
    <img class="img" src={image1} alt={planet.id} />
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
   <Footer {planet}/>   
{/if}  
<!-- <form method="post" action="?/hello">
  <input type="text" name="id" bind:value={planet.id}>
  <input type="text" name="name" bind:value={planet.name}>
  <input type="number" name="radius" bind:value={planet.radius}>
  <button type="submit">sendData</button>
</form> -->


<style>
  .img{
    margin-top: 5rem;
    margin-left: 14rem;
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
 
  

</style>