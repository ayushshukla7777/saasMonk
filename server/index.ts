
import { publicProcedure, router } from './trpc';
import { PrismaClient } from '@prisma/client'
import z from 'zod';

const getMovieByIdSchema = z.object({
    id: z.number(),
});

const deleteMovieByIdSchema = z.object({
    id: z.number(),
});

const updateMovieSchema = z.object({
    id: z.number(),
    name: z.string().optional(),
    releaseDate: z.date().optional(),
    averageRating: z.number().optional(),
});

const createMovieSchema = z.object({
    name: z.string(),
    releaseDate: z.date(),
    averageRating: z.number().optional(),
});

const createReviewSchema = z.object({
    movieId: z.number(),
    reviewerName: z.string().optional(),
    rating: z.number(),
    comments: z.string(),
});

const deleteReviewByIdSchema = z.object({
    id: z.number(),
});

const updateReviewSchema = z.object({
    id: z.number(),
    reviewerName: z.string().optional(),
    rating: z.number().optional(),
    comments: z.string().optional(),
});


const prisma = new PrismaClient()

export const appRouter = router({
    getAllMovies: publicProcedure.query( async ({ctx}) =>{
        const allUsers = await prisma.movie.findMany();
        return allUsers;
        }),

    getMovieById: publicProcedure.input(getMovieByIdSchema).query( async ({ctx, input}) =>{
        const movie = await prisma.movie.findUnique({
            where: {
                id: input.id,
            }
        });
        return movie;
    }),
    deleteMovieById: publicProcedure.input(deleteMovieByIdSchema).mutation(async ({ ctx, input }) => {
        const deletedMovie = await prisma.movie.delete({
            where: {
                id: input.id,
            },
        });

        // Delete all reviews with the same movieId
        await prisma.review.deleteMany({
            where: {
                movieId: input.id,
            },
        });

        return deletedMovie;
    }),

    updateMovie: publicProcedure.input(updateMovieSchema).mutation(async ({ ctx, input }) => {
        const updatedMovie = await prisma.movie.update({
            where: {
                id: input.id,
            },
            data: {
                name: input.name,
                releaseDate: input.releaseDate,
                averageRating: input.averageRating,
            },
        });
        return updatedMovie;
    }),

    createMovie: publicProcedure.input(createMovieSchema).mutation(async ({ ctx, input }) => {
        const newMovie = await prisma.movie.create({
            data: {
                name: input.name,
                releaseDate: input.releaseDate,
                averageRating: input.averageRating,
            },
        });
        return newMovie;
    }),
    createReview: publicProcedure.input(createReviewSchema).mutation(async ({ ctx, input }) => {
        const newReview = await prisma.review.create({
            data: {
                movieId: input.movieId,
                reviewerName: input.reviewerName,
                rating: input.rating,
                comments: input.comments,
            },
        });
        return newReview;
    }),

    deleteReviewById: publicProcedure.input(deleteReviewByIdSchema).mutation(async ({ ctx, input }) => {
        const deletedReview = await prisma.review.delete({
            where: {
                id: input.id,
            },
        });
        return deletedReview;
    }),

    updateReview: publicProcedure.input(updateReviewSchema).mutation(async ({ ctx, input }) => {
        const updatedReview = await prisma.review.update({
            where: {
                id: input.id,
            },
            data: {
                reviewerName: input.reviewerName,
                rating: input.rating,
                comments: input.comments,
            },
        });
        return updatedReview;
    }),

    getAllReviewsByMovieId: publicProcedure.input(getMovieByIdSchema).query(async ({ ctx, input }) => {
        const reviews = await prisma.review.findMany({
            where: {
                movieId: input.id,
            },
        });
        return reviews;
    }),
});
export type AppRouter = typeof appRouter;







