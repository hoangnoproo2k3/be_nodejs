const connection = require("../config/db")
const { getAllUser, getUserByID, updateUserNew, destroyUserByIT } = require("../services/CRUDlistUsers")
const { User } = require('../models/user')
const getHomePage = async (req, res) => {
    let results = await User.find({});
    res.render('home.ejs', { listUsers: results });
}
const getABC = (req, res) => {
    res.render('sample.ejs');
}
const createUse = async (req, res) => {
    console.log(req.body);
    let lname = req.body.lname;
    let email = req.body.email;
    let cty = req.body.cty;
    // const promisePool = connection.promise();
    // let [results, fields] = await promisePool.query(`INSERT INTO Users (email, name, city)
    // VALUES (?, ?,?);`,
    //     [email, lname, cty]);
    // console.log(results);
    await User.create({
        name: lname,
        email: email,
        city: cty
    });
    res.send('create success');
}
const createNewUser = (req, res) => {
    res.render('create.ejs');
}
const updateUser = async (req, res) => {
    let userId = req.params.userId;
    // let results = await getUserByID(userId);
    let results = await User.findById(userId).exec();
    console.log(results)

    res.render('update.ejs', { listUsers: results });
}
const updateUserNewController = async (req, res) => {
    let lname = req.body.lname;
    let email = req.body.email;
    let cty = req.body.cty;
    let Userid = req.body.id;
    console.log(Userid);
    // await updateUserNew(email, lname, cty, Userid)
    await User.updateOne({ _id: Userid }, { email: email, name: lname, city: cty })

    res.redirect('/');
}
const deleteUser = async (req, res) => {
    let userId = req.params.userId;
    // let results = await getUserByID(userId);
    // console.log(results)
    let results = await User.findById(userId).exec();
    res.render('delete.ejs', { listUsers: results });
}
const destroyUser = async (req, res) => {
    let Userid = req.body.id;
    // await destroyUserByIT(Userid)
    await User.deleteOne({
        _id: Userid
    })
    res.redirect('/');
}
module.exports = {
    getHomePage, getABC, createUse, createNewUser, updateUser, updateUserNewController, deleteUser, destroyUser
}