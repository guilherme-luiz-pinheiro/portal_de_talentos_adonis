'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/candidatos', 'CandidatoController.store')
Route.get('/candidatos', 'CandidatoController.index')
Route.post('/candidatos', 'CadastroCandidatoController.store');
Route.post('/register', 'AuthController.register');


Route.on('/').render('welcome')
