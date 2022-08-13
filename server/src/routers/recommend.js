const express = require("express")
const router = express.Router()
const { getAll, getById, getByType, create, update, remove } = require("../controllers/recommend")

router.get('/', getAll)
router.get('/:id', getById)
router.get('/type/:type', getByType)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

module.exports = router