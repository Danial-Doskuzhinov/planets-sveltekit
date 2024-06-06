import type { Actions } from './$types';
import type { PageServerLoad } from './$types';
import {BASE_URL} from '$env/static/private';
export const load: PageServerLoad = async ({ params }) => {
try {
    const { planetsid } = params; 
<<<<<<< HEAD
    const response = await fetch(`${BASE_URL}${planetsid}`);
=======
    const response = await fetch(`http://localhost:8081/api/v1/planets/${planetsid}`);
>>>>>>> df3725b675458ba3be215258dc9871bdda8c1113
     
    if (!response.ok) {
        console.error(`response dont ok  ${planetsid}. Status: ${response.status}`);
    }
    
    const items = await response.json();
    return {
        items,
        }

    } catch (error) {
    console.log(error , 'function');
    
        }
      
      
};
export const actions = {
	hello: async ({request}) => {
        const planet = await request.formData();
		console.log('planet' , planet);
        return {message: 'success' }
	},
} satisfies Actions;

