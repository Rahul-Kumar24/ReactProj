import {ID} from './Const'

export const id = (id) => async(dispatch) => {
          console.log(id)
          dispatch({
                    type: ID,
                    payload:{
                              id:id
                    }
          })
}