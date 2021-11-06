import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './List.css'
import { useDispatch,useSelector } from "react-redux";
import Item from './Item'
import {useNavigate} from 'react-router-dom'

import {history} from 'react-router-dom'
import {id} from '../../action/Idaction'
const List = () => {
          const dispatch = useDispatch();
          const [data, setData]=useState([]);
          const [check,setCheck]=useState(false);
          // const history = useHistory();
          const navigate = useNavigate();
          const featchdata = async ()=>{
                    const featchdata = await axios.get('https://fakestoreapi.com/products');
                    setData(featchdata.data);
          }
          useEffect(()=>{
                    featchdata();
          },[])
          console.log(data)
          const onAddHandler = (i) =>{
                    console.log("adfasd")
                    navigate(`/product/${i}`)
                    dispatch(id(i));
                    
          }
          return (
                    <div>
                              {data.map((item)=>(
                                        
                                        <div className="hor">
                                        <div className="card2 shadow3 zoom">
                                                  <div className="title">
                                                            {item.category==`men's clothing`&&<h7>Man</h7>}
                                                            {item.category==`jewelery`&&<h7>Jewelery</h7>}
                                                            {item.category==`electronics`&&<h7>Electories</h7>}
                                                            {item.category==`women's clothing`&&<h7>Women</h7>}
                                                  </div>
                                                  <div>
                                                            <img src={item.image} className="image"/>
                                                  </div>
                                                  <div className='product'>
                                                            <h7 >
                                                                      {item.title}
                                                            </h7>
                                                            <h5>Cost {item.price}</h5>
                                                  </div>
                                                  <button  className="btn btn-primary b1" onClick={()=>onAddHandler(item.id)}>Add To Cart</button>
                                        </div>
                                        </div>
                                        
                              ))}
                    </div>
          )
}

export default List
