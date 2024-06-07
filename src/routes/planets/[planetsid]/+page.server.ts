// import type { Actions } from './$types';
// import type { PageServerLoad } from './$types';
// import {BASE_URL} from '$env/static/private';
// export const load: PageServerLoad = async ({ params }) => {
// try {
//     const { planetsid } = params; 
//     const response = await fetch(`api/v1/planets/${planetsid}`);

     
//     if (!response.ok) {
//         console.error(`response dont ok  ${planetsid}. Status: ${response.status}`);
//     }
    
//     const items = await response.json();
//     return {
//         items,
//         }

//     } catch (error) {
//     console.log(error , 'function');
    
//         }
      
      
// };
// export const actions = {
// 	hello: async ({request}) => {
//         const planet = await request.formData();
// 		console.log('planet' , planet);
//         return {message: 'success' }
// 	},
// } satisfies Actions;
export async function load({fetch ,params }) {
    const { planetsid } = params; 
    console.log(planetsid , 'planetsid');
    const res = await fetch(`/api/v1/planets/${planetsid}`);
    const planets =await res.json();
    console.log('json', planets.id);
    
    return { planets };
}

