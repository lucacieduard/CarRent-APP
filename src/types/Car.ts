export type ReviewT = {
    userId : string,
    description : string,
    rating : number,
}

export type Car ={
    carName: string,
    description : string, 
    capacity : 2 | 4 | 6 | 8,
    gasoline : string,
    images : string[],
    price: number,
    reviews:ReviewT[],
    carType : "sport" | "suv" | "sedan" | "coupe"| "hatchback" | "mpv",
    steering:"manual",
    recomandation : boolean,
    popular : boolean,
    svg :  string  ,
    img:  string[]
    uid : string
}