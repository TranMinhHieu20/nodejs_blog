const index = (req, res) => {
    res.render('news');
};

const show = (req, res) => {
    res.send('new details');
};

module.exports = {
    index,
    show,
};
