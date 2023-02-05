
const getHomePage = (req, res) => {
    res.render('home.ejs');
}
const getABC = (req, res) => {
    res.render('sample.ejs');
}
module.exports = {
    getHomePage, getABC
}