const mongoose = require('mongoose')
const app = require('../app')
const { MongoMemoryServer } = require('mongodb-memory-server')
const request = require('supertest')
const server = app.listen('8080', () => console.log('Lets test'))
const Todo = require('../models/todo')
let mongoServer

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri())
})

afterAll(async () => {
    await mongoose.connection.close()
    mongoServer.stop()
    server.close()
})

describe('Testing Todo endpoints for a restful json api', () => {
    test('It should display a list of todos', async () => {
        const todo = new Todo({ title: 'test todo', description: 'test', completed: true })
        await todo.save()
        
        const response = request(app).get('/todos')
        
        exprect(response.statusCode).toBe(200)
        expect(Array.isArray(response.body)).toBeTruthy()

        for(let i = 0; i < response.body.length; i++) {
            expect(response.body[i]).toHaveProperty('title')
            expect(response.body[i]).toHaveProperty('description')
            expect(response.body[i]).toHaveProperty('completed')
            expect(response.body[i]).toHaveProperty('createdAt')
        }
    })
})