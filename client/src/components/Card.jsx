import React from 'react';

function Card(props) {
    return(
        <div>
        {/* <img className="card-img-top" src={props.img} alt="Card image cap"/> */}
        <h2>{props.title}</h2>
        <a href="#" className="btn btn-primary">Donate</a>
      </div>
    );
}

export default Card;