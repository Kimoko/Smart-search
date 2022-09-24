import React, {useState} from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import {BUYER_ROUTE} from "../utils/consts";
// import {COMPOSITION_ROUTE} from "../utils/consts";

const CompositionItem = ({produts}) => {


    const history = useHistory()
    // const getRate = (rating) => {
    //     const new_rate = rating / 10
    //     if((`${new_rate}`).length == 1 || new_rate == 10)
    //     {
    //         return(rating / 10 + ".0")
    //     }
    //     else
    //     {
    //         return(rating / 10)
    //     }
    // };
    return (
            
            <div class="col" onClick={() => history.push(BUYER_ROUTE + '/' + produts.id)}>
                <div class="card" style={{width:'100%'}} >
               <img src={produts.imageUrl} class="card-img-top" style={{width: '90%'}} alt="Image"/>
                <div class="card-body">
                <div>{produts.id}</div>
                    <h6 class="card-title">{produts.name}</h6>
                    {produts.comp}
                    <p class="card-text">{produts.price}</p>
                    <h5 class="card-text" style={{textAlign:"center"}}>~{produts.сkl}~</h5>
                    <a href="#" class="btn btn-primary" style={{marginLeft: '20%'}}>Перейти к товару</a>            
                </div>
                </div>
            </div>
            
    );
};

export default CompositionItem;