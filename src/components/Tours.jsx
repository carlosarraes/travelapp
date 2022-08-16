import React from "react";
import Tour from "./Tour";

const url = 'https://course-api.com/react-tours-project'

export default function Tours(){
  const [tourData, setTourData] = React.useState([])

  const getTours = async () =>{
    const response = await fetch(url);
    const tourData = await response.json();
    setTourData(tourData)        
  }

  const tourShow = tourData.map(tour => {
    return(
      <Tour key={tour.id} image={tour.image} name={tour.name} price={tour.price} info={tour.info} />
    )
  } )

  React.useEffect(()=>{
    getTours();
  },[])    

  return(
    <>
      {tourShow}
    </>
  )
}