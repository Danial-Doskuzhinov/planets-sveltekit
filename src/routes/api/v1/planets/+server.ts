// +server.ts in sveltekit how be ?
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
type RequestBody ={
    id:string;
    name:string;
    radius:number;
}
export const POST: RequestHandler = async ({ request }) => {
	const { id, name , radius }:RequestBody = await request.json();
    console.log('Post api/v1/planets', id, name , radius);
    
	return json({message: `received your request of a planet ${id}`});
};