import type { Actions } from './$types';
import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async ({ params }) => {
try {
    const { planetsid } = params; 
    const response = await fetch(`http://localhost:8082/api/v1/planets/${planetsid}`);
     
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

