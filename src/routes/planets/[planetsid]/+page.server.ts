import type { PlanetsInfo } from "../../../../type";
import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async ({ params }) => {
try {
    const { planetsid } = params; 
    const response = await fetch(`http://localhost:8081/api/v1/planets/${planetsid}`);
     
    if (!response.ok) {
        console.error(`response dont ok  ${planetsid}. Status: ${response.status}`);
        return {
            status: response.status,
            body: {
                error: `response dont oki  ${planetsid}. Status: ${response.status}`,
            },
        };
    }
    
    const items = await response.json();
    return {
        items,
            // data:{
            //     id:data.id,
            //     name:data.name,
            //     rotation:data.rotation,
            //     revolution:data.revolution,
            //     radius:data.radius,
            //     temperature:data.temperature,
                
            //     overview:{
            //         content:data.overview.content,
            //         source:data.overview.source,
            //     },
            //     structure:{
            //         content:data.structure.content,
            //         source:data.structure.source,
            //     },
            //     geology:{
            //         content:data.geology.content,
            //         source:data.geology.source,
            //     }
            // }
        
        
        }

    } catch (error) {
    console.log(error , 'function');
    
        }
      
      
};

