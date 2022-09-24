import React from "react";

const Cardtitle = () => {
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card">
               <img src="https://mobimg.b-cdn.net/v3/fetch/fc/fc97db329bd4482025eaa1e3961dc80e.jpeg" class="card-img-top" alt="Image"/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> 
                    <a href="#" class="btn btn-primary" style={{marginLeft: '20%'}}>Перейти к товару</a>            
                </div>
                </div>
            </div>
            </div>
        </div>
         );    
    };
        

export default Cardtitle;