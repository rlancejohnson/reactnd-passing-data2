import React, { Component } from 'react';
import MovieLikes from './MovieLikes.js';

export default class MoviesLikesList extends Component {
    render() {
        let {users, profiles, movies} = this.props;

        return (
            <div>
                {Object.values(movies).map(movie => (
                    <MovieLikes key={movie.id} movie={movie} users={Object.values(users).filter(user => {
                        let profile = profiles.find(profile => 
                            Number(profile.userID) === user.id && Number(profile.favoriteMovieID) === movie.id    
                        )

                        return user.id === Number(profile ? profile.userID : 0)
                    })}/>
                ))}
            </div>
        )
    }
}