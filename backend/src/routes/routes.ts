import {Router} from 'express'

import usersController from '../controllers/UserController'
const routes = Router()

routes.get('/', (req, res) =>{
    return res.send('ahhhhiooio')
})

routes.get('/users', usersController.index)
routes.get('/create', usersController.create)
    
export default routes