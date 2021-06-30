import React from 'react';
import './Player.css';



const Player = (props) => {
    const playerDetails = props.player;
        const {image, salary, name, info} = playerDetails;
//   console.log(props.player)
    return (
        <div>
            <div className="card m-2" style={{width: '18rem'}}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-primary">{name}</h5>
                <p className="card-text text-secondary text-centre">{info}</p>
                <p className="card-text text-secondary">Yearly Salary :<i className="bi bi-currency-dollar"></i>{salary}</p>
                <button className="btn btn-primary" onClick={()=>props.handleAddPlayer(props.player)}>Add player</button>
            </div>
            </div>
            
        </div>
    );
};

export default Player;