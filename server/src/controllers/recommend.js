const { objectIdIsValid } = require("../utils/validations")
const Recommend = require("../models/recommend")

const getAll = async (req, res) => {
    try {
        const recommends = await Recommend.find({ userId: req.user.userId })

        return res.status(200).json({
            items: recommends,
            total: recommends.length
        })
    } catch (e) {
        return res.status(500).json(e)
    }
}

const getById = async (req, res) => {
    try {
        const recommendId = req.params.id

        if (!recommendId || !objectIdIsValid(recommendId)) {
            return res.status(400).json({
                error: {
                    message: "Invalid recommend id"
                }
            })
        }

        const recommend = await Recommend.findOne({ _id: recommendId })

        return res.status(200).json(recommend)
    } catch (e) {
        return res.status(500).json(e)
    }
}

const create = async (req, res) => {
    try {
        const { type, name, description, rating } = req.body

        if (!type || !name) {
            return res.status(400).json({
                error: {
                    message: 'Type and name is required'
                }
            })
        }

        await Recommend.create({
            userId: req.user.userId,
            type,
            name,
            description,
            rating
        })

        return res.status(201).send()
    } catch (e) {
        return res.status(500).json(e)
    }
}

const update = async (req, res) => {
    try {
        const recommendId = req.params.id

        if (!recommendId || !objectIdIsValid(recommendId)) {
            return res.status(400).json({
                error: {
                    message: "recommend id is required"
                }
            })
        }

        const { type, name, description, rating } = req.body

        if (!type || !name) {
            return res.status().json({
                error: {
                    message: 'Type and name is required'
                }
            })
        }

        const result = await Recommend.findOneAndUpdate({
            _id: recommendId
        }, {
            type,
            name,
            description,
            rating
        }, { new: true, runValidators: true })

        if (result) {
            return res.status(200).send()
        } else {
            return res.status(404).json({
                error: {
                    message: "recommend not found"
                }
            })
        }
    } catch (e) {
        return res.status(500).json(e)
    }
}

const remove = async (req, res) => {
    try {
        const recommendId = req.params.id

        if (!recommendId || !objectIdIsValid(recommendId)) {
            return res.status(400).json({
                error: {
                    message: "recommend id is required"
                }
            })
        }

        const result = await Recommend.findOneAndRemove({ _id: recommendId })

        if (result) {
            return res.status(200).send()
        } else {
            return res.status(404).json({
                error: {
                    message: "recommend not found"
                }
            })
        }
    } catch (e) {
        return res.status(500).json(e)
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}