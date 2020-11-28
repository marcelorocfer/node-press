const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");
const usersController = require("./users/UsersController");

const Category = require("./categories/Category");
const Article = require("./articles/Article");
const User = require("./users/User");

// View Engine
app.set('view engine', 'ejs');

// Static
app.use(express.static('public'));

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão realizada com sucesso!");
    }).catch((err) => {
        console.log(err);
    });

app.use("/", categoriesController);
app.use("/", articlesController);
app.use("/", usersController);


app.get("/", (req, res) => {
    Article.findAll().then(articles => {
        res.render("index", { articles });
    });
});

app.listen(8080, () => {
    console.log("The server is running!");
});