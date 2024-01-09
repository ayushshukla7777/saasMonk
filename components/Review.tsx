// import React from 'react'

// const Review = () => {
//     return (
//         <main className='border-2 rounded text-gray-800 text-sm  p-2 mb-2'>
//             <div className='flex flex-row justify-between items-center p-2 '>
//                 <p>This is the best movie ever! I really enjoyed it.</p>
//                 <p className=' text-violet-500'>9/10</p>
//             </div>
//             <p className=' italic p-2 pb-0'>By Amitav Khandelwal</p>
//         </main>
//     )
// }

// export default Review

import React from 'react';

interface ReviewProps {
    comments: string;
    rating: number;
    reviewerName: string;
}

const Review: React.FC<ReviewProps> = ({ comments, rating, reviewerName }) => {
    return (
        <main className='border-2 rounded text-gray-800 text-sm p-2 mb-2'>
            <div className='flex flex-row justify-between items-center p-2 '>
                <p>{comments}</p>
                <p className='text-violet-500'>{rating}/10</p>
            </div>
            <p className='italic p-2 pb-0'>By {reviewerName}</p>
        </main>
    );
};

export default Review;
