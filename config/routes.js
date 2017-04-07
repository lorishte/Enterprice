const userController = require('./../controllers/user');
const projectController = require('./../controllers/project');
const customerController = require('./../controllers/customer');
const teamController = require('./../controllers/team');
const taskController = require('./../controllers/task');
const rateController = require('./../controllers/rate');

module.exports = (app) => {



    /* PROJECTS */

    /* create */
    app.get('/project/create', projectController.createGet);
    app.post('/project/create', projectController.createPost);

    /* details */
    app.get('/project/details/:id', projectController.projectDetails);

    /* list */
    app.get('/project/list', projectController.mainGet);



    /* USERS */

    /* login */
    app.get('/', userController.loginGet);
    app.post('/', userController.loginPost);

    /* logout */
    app.get('/user/logout', userController.logout);

    /* register */
    app.post('/user/register', userController.registerPost);

    /* list */
    app.get('/userViews/allUsers', userController.usersGet);

    /* own profile */
    app.get('/userViews/userProfile', userController.profileGet);

    /* details*/
    app.get('/userViews/userProfile/:id', userController.userDetailsGet);



    /* RATES */

    /* list */
    app.get('/rate/list', rateController.ratesGet);



    /* CUSTOMERS */

    /* create */
    app.get('/customer/create', customerController.customerCreateGet);
    app.post('/customer/create', customerController.customerCreatePost);



    /* TEAMS */

    /* create */
    app.get('/team/create', teamController.teamCreateGet);
    app.post('/team/create', teamController.teamCreatePost);

    /* edit */
    app.get('/team/edit/:id', teamController.editGet);

    
    
    /* TASKS */

    /* create */
    app.post('/task/create', taskController.taskCreatePost);

    /* details*/
    app.post('/task/details/:id', taskController.taskDetailsGet);
};

