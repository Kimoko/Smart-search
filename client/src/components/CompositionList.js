import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import CompositionItem from "./CompositionItem";

const CompositionList = observer(() => {
    const {produts} = useContext(Context)

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {produts.get_all_produts.map(produts =>
                <CompositionItem key={produts.id} produts={produts}/>
            )}
        </div>
    );
});

export default CompositionList;