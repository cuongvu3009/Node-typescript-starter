import express from 'express'

import {
  createMovie,
  findById,
  deleteMovie,
  findAll,
  updateMovie,
} from './modules/movie/movie.controller'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/movies', findAll)
router.get('/movies/:movieId', findById)
router.put('/movies/:movieId', updateMovie)
router.delete('/movies/:movieId', deleteMovie)
router.post('/movies', createMovie)

export default router
