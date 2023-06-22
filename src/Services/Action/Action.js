import {Randomfood,SEARCH} from "../Constants"
export const RandomFetch = (data)=>{
    return {
        type:Randomfood,
        payload:data,
           }
}
export const SEARCHFetch = (data)=>{
    return {
        type:SEARCH,
        payload:data,
           }
}