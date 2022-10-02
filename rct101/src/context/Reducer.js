export default function Reducer(state,action){
    switch(action.type){
        case "Auth":return {email:action.payload,isAuth:true}
        case "reset":return {email:"",isAuth:false}
        default:return state
    }
}