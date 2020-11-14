import React, { Component } from 'react';
import MovieLikes from './MovieLikes.js';

export default class MoviesLikesList extends Component {
    render() {
        let {users, profiles, movies} = this.props;

        return (
            <div>
                {Object.values(movies).map(movie => (
                    <MovieLikes movie={movie} users={Object.values(users).filter(user => {
                        let likedProfile = profiles.find(profile => 
                            profile.userID === user.id && profile.favoriteMovieID === movie.id    
                        )

                        return user.id === likedProfile.userID
                    })}/>
                ))}
            </div>
        )
    }
}