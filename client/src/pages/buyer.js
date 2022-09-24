import React, {useContext, useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import CompositionList from "../components/CompositionList";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {fetchCompositionAPI} from "../http/compositionAPI";

const buyer = observer(() => {
     const {produts} = useContext(Context)

    // useEffect(()=>{
    //     // fetchTypeAPI().then(data => composition.setTypes(data))
    //     // fetchGenreAPI().then(data => composition.setGenre(data))
    //     // fetchCompositionAPI(composition.selectedType.id, composition.selectedGenre.id).then(data => composition.setComposition(data.rows))
    //
    // },[])
    useEffect(()=>{
        fetchCompositionAPI(produts.selectedType.id, produts.selectedGenre.id).then(
            data => alert(data)

            // produts.setComposition(data.rows)
        )
    },[produts.selectedType, produts.selectedGenre])

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
    );
});


export default buyer;