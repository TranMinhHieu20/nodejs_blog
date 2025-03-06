const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    //[GET] /
    async index(req, res, next) {
        try {
            const courses = await Course.find({});
            // const coursesData = courses.map((course) => course.toObject());
            res.render('home', {
                courses: mutipleMongooseToObject(courses),
            });
            // res.json(courses);
        } catch (err) {
            console.log('err:', err);
            res.status(500).json({ error: 'ERROR!!!!' });
        }
    }
    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
