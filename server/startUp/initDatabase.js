// import professionsMock from '../mockData/professions.json' assert { type: 'json' }
import Category from '../models/Category.js'
import categoriesApi from '../mockData/categories.api.js'

async function initDatabase() {
    const categories = await Category.find()
    if (categories.length !== categoriesApi.length) {
        await createInitialEntity(Category, categoriesApi)
    }
}

async function createInitialEntity(Model, data) {
    await Model.collection.drop()
    return Promise.all(
        data.map(async item => {
            try {
                delete item._id
                const newItem = new Model(item)
                await newItem.save()
                return newItem
            } catch (error) {
                return error
            }
        })
    )
}

export default initDatabase
