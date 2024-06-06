import type { LayoutServerLoad } from './$types';
import {BASE_URL} from '$env/static/private';
export const load:LayoutServerLoad= async () => {
    try {
       
<<<<<<< HEAD
    const response = await fetch(`${BASE_URL}`, {
=======
    const response = await fetch(`http://localhost:8081/api/v1/planets/`, {
>>>>>>> df3725b675458ba3be215258dc9871bdda8c1113
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

