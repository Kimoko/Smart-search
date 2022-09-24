import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import CompositionItem from "./CompositionItem";

const CompositionList = observer(() => {
    const {produts} = useContext(Context)

    return (
        <Row className="d-flex m-2">
            {produts.get_all_produts.map(produts =>
                <CompositionItem key={produts.id} produts={produts}/>
            )}
        </Row>
    );
});

export default CompositionList;