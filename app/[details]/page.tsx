"use client";

import React from 'react'
import Review from '@/components/Review'
import { trpc } from '.././_trpc/client';
import { serverClient } from ".././_trpc/serverClient";

type Props = {
    params: {
        details: number;
    };
};

function Page({ params: { details } }: Props) {

    console.log(details);
    const fetchAllReview = trpc.getAllReviewsByMovieId.useQuery({
        id: details
    });
    console.log(fetchAllReview.data);
    return (
        <main className='flex flex-col space-y-4 text-gray-900 p-3'>
            <div title='reviews'>
                {fetchAllReview?.data?.map((review: any, index: number) => (
                    <Review
                        key={index}
                        comments={review.comments}
                        rating={review.rating}
                        reviewerName={review.reviewerName || 'Anonymous'}
                    />
                ))}
            </div>
        </main>
    )
}

export default Page

