import React,{useState} from 'react';
import {useDispatch,useSelector } from 'react-redux';
import { buyIceCream } from './iceCream/iceCreamActions';


function IceCreamContainer(props) {
    const numOfIceCreams = useSelector(state => state.icecream.numOfIceCreams)
    const dispatch = useDispatch();
  return (
    <div>
        <h2>Number of IceCream - {numOfIceCreams}</h2>
        <button onClick = {()=> dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  )
}


export default IceCreamContainer;
