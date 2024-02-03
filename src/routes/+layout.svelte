<script lang="ts">  
import './global.css';

import Header from '../lib/Component/header.svelte';
import type { LayoutData } from './$types';
    export let data:LayoutData;
   
</script>
<header>
    
    <nav>
     <Header {data}/>
     
    </nav>
</header>
<slot/>
<style>

</style>