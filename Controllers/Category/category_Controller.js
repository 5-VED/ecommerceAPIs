const { default: slugify } = require('slugify');
const Category = require('../../Models/category');

exports.addCategory = async (req, res) => {
    try {
        const categoryObj = new Category({
            name: req.body.name,
            slug: slugify(req.body.name)
        })

        await categoryObj.save((err, result) => {
            if (err) {
                return res.status(400).json({ Message: "Category Already Exist" })
            } else {
                return res.status(201).json(result)
            }
        })
    } catch (err) {
        return res.status(400).json({ Error: err });
    }
}


exports.getCategories = (req, res) => {
    Category.find({}, (err, data) => {
        if (err) {
            res.status(400).json(err);
        } else if (data.length === 0) {
            res.status(400).json({ Message: 'No Categories Exist' });
        } else {
            res.status(200).json({ categories: data })
        }
    })

}