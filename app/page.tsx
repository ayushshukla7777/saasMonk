"use client";
import { useEffect, useState } from 'react';
import Card from '@/components/Card';
import { trpc } from './_trpc/client';
import { serverClient } from "./_trpc/serverClient";
import Link from 'next/link';


export default function Home() {
  const fetchAllMovies = trpc.getAllMovies.useQuery();
  
  useEffect(() => {
    fetchAllMovies.refetch();
  }, []);

  return (
    <main className='flex h-screen flex-col space-y-8 p-4'>
      <p>The best movie reviews site!</p>
      <div className='flex flex-wrap'>
        {fetchAllMovies?.data?.map((movie) => (
          <div key={movie.id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
            <Link href={`/${movie.id}`}>
                <Card movie={movie} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

