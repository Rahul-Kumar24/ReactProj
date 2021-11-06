import {PRICE,REMOVEITEM} from '../action/Const'
const ini = {
          price:0,
          total:0,
         
}

const pricetotal = ( state=ini,action)=>{
          
          switch(action.type){
                    
                    case PRICE:
                              // console.log(action.payload.price)
                              // console.log(...state.price)
                              const price=action.payload.price
                              // const total=total+price;
                              console.log(state.total)
                              return {
                                        ...state,
                                        price: state.price+action.payload.price,
                                        total:price,
                                        
                              }
                    case REMOVEITEM:
                              return  {
                                        ...state,
                                        price:state.price-action.payload.price,
                                        total:price
                              }
                    default:
                    return state;
          }
}

export default pricetotal;