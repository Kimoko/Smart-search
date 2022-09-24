<<<<<<< HEAD
import React, {useContext, useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import CompositionList from "../components/CompositionList";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import Cardtitle from "../components/cardtitle";

const buyer = observer(() => {
     const {produts} = useContext(Context)

    // useEffect(()=>{
    //     // fetchTypeAPI().then(data => composition.setTypes(data))
    //     // fetchGenreAPI().then(data => composition.setGenre(data))
    //     // fetchCompositionAPI(composition.selectedType.id, composition.selectedGenre.id).then(data => composition.setComposition(data.rows))
    //
    // },[])
    // useEffect(()=>{
    //     // fetchCompositionAPI(composition.selectedType.id, composition.selectedGenre.id).then(data => composition.setComposition(data.rows))
    // },[composition.selectedType, composition.selectedGenre])

    return (
      <Container style = {{background: '#3C5B74', height: window.innerHeight - 54}}>
        <Row className="mt-2" >
          <Col md={3}>

          </Col>
          <Col md={9}>
              <CompositionList/>
          </Col>
        </Row>
      </Container>

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
});

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
>>>>>>> main

export default buyer;