import React, {useContext, useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import Cardtitle from "../components/cardtitle";
import CompositionList from "../components/CompositionList";

const buyer = observer(() => {
     const {produts} = useContext(Context)

    useEffect(()=>{
        fetchCompositionAPI(produts.selectedType.id, produts.selectedGenre.id).then(data => produts.setComposition(data))

    },[])

<<<<<<< Updated upstream
    return (
=======

    return (

>>>>>>> Stashed changes
      <div style={{marginLeft: 'auto', marginRight: 'auto', width:'80%', marginTop:'5%'}}>
      <div style={{marginLeft: '25%'}}>
      <input type={'text'} style={{width:'60%',height:'35px'}} ></input>
      <button type="button" class="btn" style={{color:'white', backgroundColor:"#1400dc", height:'28px',paddingBottom:'30px'}}>Найти</button>
      </div>
      <div>
          <div style={{marginLeft: '0', marginRight: 'auto', width:'20%'}}>
          <h2>Фильтр</h2>
              <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label class="form-check-label" for="flexSwitchCheckDefault">Только с фото</label>
              </div>
              <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label class="form-check-label" for="flexSwitchCheckDefault">Товары с уценкой</label>
              </div>
              <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label class="form-check-label" for="flexSwitchCheckDefault">В наличии</label>
              </div>
          </div>
              <div style={{marginLeft: 'auto', marginRight: '0', width:'80%'}}>
              <CompositionList/>
              </div>
          </div>
  </div>
    );
});

<<<<<<< Updated upstream
=======

import React from "react";
import Cardtitle from "../components/cardtitle";

const buyer = () => {
  return (
    <div style={{marginLeft: 'auto', marginRight: 'auto', width:'80%', marginTop:'5%'}}>
        <div style={{marginLeft: '25%'}}>
        <input type={'text'} style={{width:'60%',height:'35px'}} ></input>
        <button type="button" class="btn" style={{color:'white', backgroundColor:"#1400dc", height:'28px',paddingBottom:'30px'}}>Найти</button>
        </div>
        <div>
            <div style={{marginLeft: '0', marginRight: 'auto', width:'20%'}}>
            <h2>Фильтр</h2>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label class="form-check-label" for="flexSwitchCheckDefault">Только с фото</label>
                </div>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label class="form-check-label" for="flexSwitchCheckDefault">Товары с уценкой</label>
                </div>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label class="form-check-label" for="flexSwitchCheckDefault">В наличии</label>
                </div>
            </div>
                <div style={{marginLeft: 'auto', marginRight: '0', width:'80%'}}>
                    <Cardtitle/>
                </div>
            </div>
    </div>
  );
};

>>>>>>> Stashed changes

export default buyer;