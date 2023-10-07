export type Car ={
    carName: string,
    description : string, 
    capacity : 2 | 4 | 6 | 8,
    gasoline : string,
    images : string[],
    price: number,
    reviews:[],
    carType : "sport" | "suv" | "sedan" | "coupe"| "hatchback" | "mpv",
    steering:"manual",
    recomandation : boolean,
    popular : boolean,
    svg :  string  ,
    img:  string[]
    uid : string
}