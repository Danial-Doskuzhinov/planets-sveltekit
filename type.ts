export type HeaderItem={
    id: string;
    name: string;
  };

export type HeaderPlanets={
    count:number,
    data:HeaderItem[],
}
export type PlanetsInfo ={
            id:string,
            name:string,
            rotation:number,
            revolution:number,
            radius:number,
            temperature:number,
            overview:{
                content:string,
                source:string,
            },
            structure:{
                content:string,
                source:string,
            },
            geology:{
                content:string,
                source:string,
            }
        
}
