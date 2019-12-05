import {users} from './db';
import {movies} from './db';

const resolvers = {
    Query: {
        hello: () => "Hello World!", 
        user: (parent, {id}, context, info) => {
            return users.find(user => user.id == id);
        },
        users: (parent, args, context, info) => {
        return users;
        },
        movies: (parent, args, context, info) => {
            return movies
        },
        movie: (parent, {id}, context, info) => {
            return movies.find(movie => movie.id == id)
        } 
    }
}

export default resolvers;