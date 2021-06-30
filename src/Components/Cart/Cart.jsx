import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faFutbol, faUsers } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
   
    const playerDetails = props.player;

    let totalCost = 0;
    for (let i = 0; i <props.player.length; i++) {
      const singlePlayer = props.player[i];
            const cost = singlePlayer.salary;
            totalCost = totalCost + cost;
    }

    const teamMember =   playerDetails.map(singlePlayer =>  <h6 className="me-3 text-end">{singlePlayer.name} :  <span className=" ms-4"> <FontAwesomeIcon  icon={faDollarSign}/> {singlePlayer.salary}</span></h6>);

    return (
        <div className="pt-5 mt-5">
             <h4 className ="mt-5 border rounded border-2 border-success mx-4 py-2">Total Hired Player : {props.player.length}</h4>
             {/* <h5>name:{playerName}</h5> */}
           <div className="text-start mx-2 mt-5 border-bottom border-top border-2 border-light" style={{height:"460px"}}>
               <h5 className="border-bottom  border-1 p-1 border-light "><FontAwesomeIcon icon={faUsers}/> Selected team members <FontAwesomeIcon icon={faFutbol}/></h5>
               {teamMember}
           </div>
             <h5 className="ms-5">Total Cost : <FontAwesomeIcon icon={faDollarSign}/> {totalCost}</h5>
        </div>
    );
};

export default Cart;