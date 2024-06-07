// // +server.ts in sveltekit how be ?
// import { json } from '@sveltejs/kit';
// import type { RequestHandler } from './$types';
// type RequestBody ={
//     id:string;
//     name:string;
//     radius:number;
// }
// export const POST: RequestHandler = async ({ request }) => {
// 	const { id, name , radius }:RequestBody = await request.json();
//     console.log('Post api/v1/planets', id, name , radius);
    
// 	return json({message: `received your request of a planet ${id}`});
// };

import { planets } from '$lib/data/planets';

export async function GET({ params }) {
     const {planetsid} = params;
     console.log(planetsid,'dddddddddddddddddddddddd');
     
    const planet = planets.find(p => p.id === planetsid);
console.log(planet);

    
    if (planet) {
        return new Response(JSON.stringify(planet))
        // , {
            // headers: { 'Content-Type': 'application/json' }
        // });
    } else {
        return new Response(JSON.stringify({ error: 'Planet not found' }), {
            status: 404,
            
            // headers: { 'Content-Type': 'application/json' }
        });
    }
}
