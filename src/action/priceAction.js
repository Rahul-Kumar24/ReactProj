import {PRICE,REMOVEITEM} from './Const'

export const totalPrice = (p) => async(dispatch) => {
          console.log(p)
          dispatch({
                    type: PRICE,
                    payload:{
                              price: p,
                    }
          })
}

export const removePrice = (p)=>async(dispatch) =>{
          dispatch({
                    type:REMOVEITEM,
                    payload:{
                             price:p,
                    }
          })
}