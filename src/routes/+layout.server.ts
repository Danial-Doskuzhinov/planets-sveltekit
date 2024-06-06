import type { LayoutServerLoad } from './$types';
import {BASE_URL} from '$env/static/private';
export const load:LayoutServerLoad= async () => {
    try {
       
    const response = await fetch(`${BASE_URL}`, {
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

