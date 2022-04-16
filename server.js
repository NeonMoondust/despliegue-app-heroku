const express = require('express');
const hbs = require('express-handlebars');
const {getUsers, postUser, deleteUser} = require('./queries.js');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {console.log(`Listening PORT: ${PORT}.`)});

app.use(express.json());
app.use(express.static('public'));

//region ROUTES
app.get('/', (request, response) => {
    response.render('index',{layout: 'index',});
});

app.get('/user-create', (request, response) => {
    response.render('userCreate', {layout: 'userCreate'});
});

app.get('/users', async (request, response) => {
    const users = await getUsers();
    response.send(users);
});

app.post('/users', async (request, response) => {
    let body = '';
    request.on('data', chunk =>{
        body += chunk;
    })
    request.on('end', async () =>{
        body = JSON.parse(body);
        const data = await postUser(body.username_data, body.email_data, body.password_data, body.fecha);
        response.send(data);
    });
});

app.delete('/users/:id', async (request, response) => {
    const { id } = request.params;
    const data = await deleteUser(id);
    response.send(`Se ha eliminado al usuario ${id}.`);
});
//#endregion

//#region View Engine Misc -------
app.use(express.static('public'));

app.set("view engine", ".hbs");

app.engine("hbs", hbs.engine({
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/partials/",
    extname: ".hbs",
}));
// #endregion

//#region Wildcard routes
app.get('*', (request, response) =>{
    response.render('404',{
        layout: '404',
    });
});
//#endregion
