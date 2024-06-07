import { planets } from '../../../lib/data/planets';

export async function GET() {
    console.log(planets);
    
    return new Response(JSON.stringify(planets), {
        headers: { 'Content-Type': 'application/json' }
    });
    
}