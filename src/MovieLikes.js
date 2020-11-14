import React, { Component } from 'react';

export default class MovieLikes extends Component {
    render() {
        let {movie, users} = this.props;

        return (
            <div>
                <h2>{movie.name}</h2>
                <p>Liked By:</p>
                <ul>
                    {users.map(user => (
                        <li>{user.name}</li>
                    ))}
                </ul>
            </div>
            
        )
    }
}