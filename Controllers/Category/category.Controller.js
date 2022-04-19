const { default: slugify } = require('slugify');
const Category = require('../../Models/category');
const { StatusCodes } = require('http-status-codes');
const logger = require('../../lib/logger')


function createCategories(categories, parentId = null) {
    const categoryList = [];
    let category;
    if (parentId == null) {
      category = categories.filter((cat) => cat.parentId == undefined);
    } else {
      category = categories.filter((cat) => cat.parentId == parentId);
    }
  
    for (let cate of category) {
      categoryList.push({
        _id: cate._id,
        name: cate.name,
        slug: cate.slug,
        parentId: cate.parentId,
        type: cate.type,
        children: createCategories(categories, cate._id),
      });
    }
  
    return categoryList;
  }

exports.addCategory = async (req, res) => {
    try {
        const categoryObj = new Category({
            name: req.body.name,
            slug: slugify(req.body.name)
        })

        if (req.body.parentId) {
            categoryObj.parentId = req.body.parentId
        }
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
    Category.find({}).exec((error, categories) => {
        if (error) {
            logger.warn("Error in Fetching Categories")
            return res.status(StatusCodes.BAD_REQUEST).json({ error: error.message, data: [] })
        }
        if (categories) {
            const categoryList = createCategories(categories);
            logger.info('Categories fetched succesfully');
            return res.status(StatusCodes.OK).json({ data: categoryList, message: 'Categories Fetched Succesfully' })
        }
    })

}