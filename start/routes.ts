/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import CalculAgesController from '#controllers/calcul_age_controller'
import router from '@adonisjs/core/services/router'

router.get('/', [CalculAgesController, 'index'])
