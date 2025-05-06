import React from "react";

import Cartoes from "./Cartoes";
import { Link } from "react-router";






const Perfil = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100dvh" }}
      
    >
      
      <div className="d-flex">
    
        <div className="d-flex flex-column gap-2 m-3">

         <button  className="edicao"  ><h5 className="m-0 text-light mt-1">
          
        Cadastro</h5><p className="textEdicao">Edite seus dados</p>
       
     
         </button>  
        
            
      
         <button className="edicao"><h5 className="m-0 text-light mt-1"> 
          <Link to={"/cartoes"} className="text-light text-decoration-none">
            Cartões
          </Link>
          </h5><p className="textEditar">Ver seus cartões cadastrados</p></button>
        </div>
        <div className="perfil "></div>
      </div>
    </div>
    

  );

};

export default Perfil;
