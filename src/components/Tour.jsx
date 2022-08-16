import React from "react";

export default function Tour(props){
  const [isReadMore, setIsReadMore] = React.useState(false)
  const [isInterested, setIsInterested] = React.useState(true)

  const toggleRead = () =>{
    setIsReadMore(!isReadMore)
  }

  const deleteTour = () =>{
    setIsInterested(!isInterested)
  }


  return isInterested ?
  (
    <article className="single-tour">
      <img src={props.image} alt="" />
      <footer>
        <div className="tour-info">
          <h4>{props.name}</h4>
          <h4>{props.price}</h4>
        </div>
        <p>
          {isReadMore ? props.info : props.info.slice(0,200)}
          <button onClick={toggleRead}>read more</button>
        </p>
        <button className="delete-btn" onClick={deleteTour}>not interested</button>                
      </footer>
    </article>
  ) :
  ( <></> )
}