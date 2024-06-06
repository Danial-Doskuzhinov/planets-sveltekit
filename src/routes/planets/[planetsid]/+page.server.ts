import type { Actions } from './$types';
import type { PageServerLoad } from './$types';
import {BASE_URL} from '$env/static/private';
export const load: PageServerLoad = async ({ params }) => {
try {
    const { planetsid } = params; 
    const response = await fetch(`${BASE_URL}${planetsid}`);
     
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

