import db from '../models/index';
import CRUDService from '../services/CRUDService';
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });

    } catch (e) {
        console.log(e);
    }
}

let getAboutPage = (req, res) => {
    return res.render('about.ejs');
}

let getCRUD = async (req, res) => {
    await CRUDService.createNewUSer(req.body);
    return res.render('crud.ejs');
}

let postCRUD = (req, res) => {
    console.log(req.body);
    return res.send('post crud from server');
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,

}