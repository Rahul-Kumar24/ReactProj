import {ID} from '../action/Const'
const ini = {
          id:0,
}

const idi = ( state=ini,action)=>{
          
          switch(action.type){
                    case ID:
                              console.log(action.payload.id)
                              return {
                                        ...state,
                                        id:action.payload.id
                              }
                    default:
                    return state;
          }
}

export default idi;