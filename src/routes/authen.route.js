import express from 'express'
import axios from 'axios';

import config from '../config';
import { successResponse } from '../utils';
export default () => {
  const router = express.Router()

  router.post('/authorization', async (req, res, next) => {
    try {
      const {
        username,
        password
      } = req.body

      const { data } = await axios.post(`${config.userServiceEndPoint}/v1/users/login`, { username, password })
      res.send(data)
    } catch (error) {
      next(error?.response?.data ?? error)
    }
  })

  router.post('/registration', async (req, res, next) => {
    try {
      const {
        firstName,
        lastName,
        email,
        phone,
        password
      } = req.body

      const user = {
        firstName,
        lastName,
        email,
        phone,
        password
      }
      
      const { data } = await axios.post(`${config.userServiceEndPoint}/v1/users`, user)
      res.send(data)
    } catch (error) {
      next(error?.response?.data ?? error)
    }
  })

  return router
}