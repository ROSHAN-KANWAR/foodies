import {Randomfood,SEARCH} from "../Constants"
const initialState = {
    randomData:[],
    searchs:[],
}
export function FetchRandom(state=initialState ,{type,payload}){
switch (type) {
    case Randomfood:
        return {...state , randomData:payload};
    default:
        return state

}
}
export function FetchSEARCH(state=initialState ,{type,payload}){
switch (type) {
    case SEARCH:
        return {...state , searchs:payload};
    default:
        return state

}
}