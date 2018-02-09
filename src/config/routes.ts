
/*      Dependencies
 ---------------------------------------------*/
import {Router as router} from 'express';



/*  controller && middleware dependencies
..............................................*/
import {UserController} from '../controllers/';




/**
 |=====================================================================
 |    Routers for the retailer stock app...
 |=====================================================================
 */



/* Routes for Authentication Module
 |........................................ */
/*router.post('/signup', mid.languageSetter, AuthController.signUp);
router.post('/login', mid.languageSetter, AuthController.login);
router.post('/forgot_password', mid.languageSetter, AuthController.forgotPassword);
router.post('/reset_password', mid.languageSetter, AuthController.resetPassword);
router.get('/logout', AuthController.logout);
router.get('/check_auth', [ mid.ensureAuthenticated ], AuthController.checkAuth);

router.post('/facebook', mid.languageSetter, AuthController.facebook);
router.post('/google', mid.languageSetter, AuthController.google);
router.post('/linkedin', mid.languageSetter, AuthController.linkedin);*/


/* Routes for User Module
 |........................................ */
/*router.get('/users_count', [ mid.languageSetter, mid.ensureAuthenticated ], UserController.usersCount);
router.put('/update_profile', [ mid.languageSetter, mid.ensureAuthenticated ], UserController.updateProfile);
router.delete('/remove_profile/:ids', [ mid.languageSetter, mid.ensureAuthenticated ], UserController.deleteUser);
router.put('/modify_password', [ mid.languageSetter, mid.ensureAuthenticated ], UserController.changePassword);
router.all('/all_users', [ mid.languageSetter, mid.ensureAuthenticated ], UserController.getAllUsers);*/


/* Routes for Payment Module
 |........................................ */
/*router.get('/create_payment', [ mid.languageSetter, mid.ensureAuthenticated ], PaymentController.createPayment);
router.get('/execute_payment', [ mid.languageSetter, mid.ensureAuthenticated ], PaymentController.executePayment);
router.get('/transations_list', [ mid.languageSetter, mid.ensureAuthenticated ], PaymentController.getTransactions);
router.post('/paypal_notify', mid.languageSetter, PaymentController.paypalNotifications);*/


/* Routes for Chat Module
 |........................................ */
/*router.get('/chat_list', [ mid.languageSetter, mid.ensureAuthenticated ], ChatController.chatList);
router.post('/save_message', [ mid.languageSetter, mid.ensureAuthenticated ], ChatController.saveMessage);*/


/* Routes for Product Module
 |........................................ */
/*router.get('/product_list', [ mid.languageSetter, mid.ensureAuthenticated ], ProductController.getAllProducts);
router.get('/product_detail', [ mid.languageSetter, mid.ensureAuthenticated ], ProductController.productById);
router.get('/buy_product', [ mid.languageSetter, mid.ensureAuthenticated ], ProductController.buyProduct);*/



export const ApiRouting = router;