const Card = ({ movie}) => {
    return (
        <div className='w-full text-sm bg-violet-200 text-gray-800 p-4'>
            <p className='p-2 overflow-hidden overflow-ellipsis whitespace-nowrap'>{movie.name}</p>
            <p className='p-2 italic overflow-hidden overflow-ellipsis whitespace-nowrap'>
                Released: {new Date(movie.releaseDate).toLocaleDateString()}
            </p>
            <p className='p-2 font-bold'>Rating: {movie.averageRating}/10</p>
        </div>
    );
};

export default Card;



