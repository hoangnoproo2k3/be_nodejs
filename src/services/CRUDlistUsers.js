const connection = require("../config/db")
const getAllUser = async () => {
    const promisePool = connection.promise();
    let [results, fields] = await promisePool.query(`select * from Users`);
    // console.log(results);
    return results;
}
const getUserByID = async (Userid) => {
    const promisePool = connection.promise();

    let [results, fields] = await promisePool.query(`select * from Users where id = ?`, [Userid]);
    console.log(results);
    console.log(Userid);
    let user = results && results.length > 0 ? results[0] : {}
    return user;
}
const updateUserNew = async (email, lname, cty, Userid) => {
    console.log('hi')
    const promisePool = connection.promise();
    let [results, fields] = await promisePool.query(`
    UPDATE Users
    SET email = ?, name= ?, city=?
    WHERE id = ?;`,
        [email, lname, cty, Userid]);
}
const destroyUserByIT = async (id) => {
    const promisePool = connection.promise();
    let [results, fields] = await promisePool.query(`
    DELETE FROM Users WHERE id=?;`,
        [id]);
}
module.exports = {
    getAllUser, getUserByID, updateUserNew, destroyUserByIT
}