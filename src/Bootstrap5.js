import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App(){

    return(
    <>
    <div className="container">
    <h1 className="text-center">WELCOME</h1>

    <br>

    </br>

    <div className="text-center">

    <div class="card" style={{width: "18rem"}}>
  <img src="https://picsum.photos/seed/picsum/400/300" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://getbootstrap.com/docs/4.5/components/card/" class="btn btn-outline-danger">Go somewhere</a>
  </div>
</div>

    
    </div>

    </div>
    </>
    );
}

export default App;