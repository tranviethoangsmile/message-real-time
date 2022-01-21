import express from "express";

const configViews = (app) => {
    app.set("view engine", "ejs");
    app.set("views", "./src/views");

}

export default configViews;