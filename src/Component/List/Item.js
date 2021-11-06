import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import {MdProductionQuantityLimits} from 'react-icons/md'
import { totalPrice,removePrice } from '../../action/priceAction'
import './Item.css'
const Item = () => {
          const [data,setData]=useState([])
          const [price, setPrice] = useState(0);
          const [sub,setSub] = useState(0);
          const useselector = useSelector(state=>state)
          const dispatch = useDispatch();
          const featchdata = async ()=>{
                    const featchdata = await axios.get('https://fakestoreapi.com/products');
                    setData(featchdata.data);
          }
          useEffect(()=>{
                    featchdata();
          },[])
          const id = useselector.id.id;
          // setPrice(useselector.price.price)
          console.log(id)
          var i=1;
          const addPrice = (p)=>{
                    dispatch(totalPrice(p));
                    setPrice(useselector.price.price)
                    i=sub+1;
                    setSub(i);
                    
          }
          return (
                    <div>
                              <div>
                              <Navbar/>
                              </div>
                              {/* <div className="div"> */}
                              <div>
                              {data.filter(items => items.id===id).map(fil => (
                                        <div className="main">
                                                  
                                                  <div className="rightimg">
                                                            <img src={fil.image} alt="notfound" className="img"/>
                                                  </div>
                                                  <div className="leftimage">
                                                            
                                                  
                                                            <div>
                                                            <h8><b>Title</b>  {fil.title} </h8>
                                                            </div>
                                                            
                                                            <span className="price" ><b>Price:    </b> ₹{Math.floor(fil.price)}</span>
                                                            <br/>
                                                            <span className="price"><b>Type: </b>{fil.category}</span>
                                                            <br/>
                                                            <span className="price"><b>Rating: </b>{fil.rating.rate}</span>
                                                            <br/>
                                                            <span className="price"><b>Quantity</b>{fil.rating.count-sub}</span>
                                                            <br/>
                                                            <div className="price1"><b>Discription:   </b>{fil.description}</div>
                                                            <br/>
                                                            <div className="b">
                                                            <button type="button"  className="btn btn-primary b1" onClick={()=>addPrice(Math.floor(fil.price))}>Add Product</button>
                                                            </div>
                                                            <div>
                                                            
                                                                      <div style={{marginTop:"20px"}}>
                                                                                <b>Total Price: {price}</b>
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </div>
                                        
                              ))}
                              </div>
                              {/* </div> */}
                    </div>
          )
}

export default Item
