import type { LayoutServerLoad } from './$types';
export const load:LayoutServerLoad= async () => {
    try {
       
    const response = await fetch(`http://localhost:8082/api/v1/planets/`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json', 
        },
    });
    if(!response.ok){
        console.log('ошибка не 200');
        
    }
    const planets = await response.json();
    return { 
          planets:planets.data, 
    };
    } catch (error) {
        console.log(error , 'oshibka');
        
    }
    
};

