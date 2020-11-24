const express = require("express");
const router = express.Router();
const Category = require("../categories/Category");
const Article = require("./Article");
const slugify = require("slugify");

router.get("/articles", (req, res) => {
    res.send("Rota de Artigos");
});

router.get("/admin/articles/new", (req, res) => {
    Category.findAll().then(categories => {
        res.render("admin/articles/new", { categories });
    });
});

router.post("/articles/save", (req, res) => {
    let title = req.body.title;
    let body = req.body.body;
    let category = req.body.category;

    Article.create({
        title,
        body,
        categoryId: category,
        slug: slugify(title.toLowerCase()),
    });
});

module.exports = router;