
const getHomePage = (req, res) => {
    res.send('Hello you');
}
const getABC = (req, res) => {
    res.render('sample.ejs');
}
module.exports = {
    getHomePage, getABC
}