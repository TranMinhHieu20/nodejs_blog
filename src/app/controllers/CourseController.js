const Course = require('../models/Course');
const {
    mutipleMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');

class CourseController {
    //[GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                if (!course) {
                    return res.status(404).send('Course not found');
                }
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch((err) => {
                console.error('Error fetching course: ', err);
                next(err);
            });
    }
    //[GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    //[POST] /courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((err) => {
                console.error('Error saving course: ', err);
                next(err);
            });
    }
}

module.exports = new CourseController();
