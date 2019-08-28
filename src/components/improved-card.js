import React from 'react';

const imporvedCard = (props) => {

  // Using complex logic
  let awardText;
  if (props.hasOscar) {
    if (props.imdbRate > 7) {
      awardText = <p>WOW Oscar and IMDB rating {props.imdbRate}</p>
    } else {
      awardText = <p>Got the Oscar and IMDB rating {props.imdbRate}</p>      
    }
  } else {
    awardText = <p>Good movie but no oscar, got IMDB rating {props.imdbRate}</p>
  }

  return (
    <div className="movies-list-item">
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>
      {
        // Using ternary operator
        // props.hasOscar
        // ? <p>Got the oscar award</p>
        // : <p>Good movie but no oscar</p>
      }
      {/* Using boolean logic*/}
      {/* {props.hasOscar && <p>Got the oscar award</p>}
      {!props.hasOscar && <p>Good movie but no oscar</p>} */}

      {awardText}
      <button onClick={props.clickToDelete}>Delete</button>
    </div>
  )
}

export default imporvedCard;