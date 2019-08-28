import React from 'react';

import ImprovedCard from './improved-card';

export default class DynamicMoviesList extends React.Component {

  filteredMovies;

  constructor() {
    super();
    this.state = {
      movies: [
        { title: 'Jurasic Park', director: 'Steven Spielberg', hasOscar: false, imdbRate: 7 },
        { title: 'The Godfather', director: 'Francis Ford Coppola', hasOscar: true, imdbRate: 9 },
        { title: 'Pulp Fiction', director: 'Quentin Tarantino', hasOscar: true, imdbRate: 7 },
        { title: 'Star Wars', director: 'Ryan Johnson', hasOscar: false, imdbRate: 9 },
      ],
      showOscarAwarded: false
    }
  }

  toggleOscarWinner() {
    this.setState({
      movies: [
        { title: 'Jurasic Park', director: 'Steven Spielberg', hasOscar: false, imdbRate: 7 },
        { title: 'The Godfather', director: 'Francis Ford Coppola', hasOscar: true, imdbRate: 9 },
        { title: 'Pulp Fiction', director: 'Quentin Tarantino', hasOscar: true, imdbRate: 7 },
        { title: 'Star Wars', director: 'Ryan Johnson', hasOscar: false, imdbRate: 9 },
      ],
      showOscarAwarded: !this.state.showOscarAwarded
    })
  }

  deleteItemHandler = (index) => {
    const moviesCopy = [...this.filteredMovies];
    moviesCopy.splice(index, 1);
    this.setState({
      movies: moviesCopy
    });
  }

  render() {
    console.log(this.state.movies);
    const { showOscarAwarded } = this.state;
    this.filteredMovies = this.state.movies.filter( movie => movie.hasOscar || showOscarAwarded)

    return(
      <div>
        {
          this.filteredMovies.map( (movie, index) => {
            return <ImprovedCard key={index} {...movie} clickToDelete={() => this.deleteItemHandler(index)}></ImprovedCard>
          })
        }
        <button onClick={() => this.toggleOscarWinner()}>
          {showOscarAwarded ? ' Hide Oscar Winner' : ' Show Oscar Winner'}
        </button>
      </div>
    )
  }
}