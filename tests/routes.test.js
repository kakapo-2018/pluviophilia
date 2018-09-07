let server = require('../server/server.js')
let request = require('supertest')

// jest.mock('../db', () => ({
//     getUser: (id) => Promise.resolve(
//       {id: id, name: 'test user', email: 'test@user.nz'}
//     ),
//     getUsers: () => Promise.resolve([
//       {id: 2, name: 'test user 2', email: 'test2@user.nz'},
//       {id: 4, name: 'test user 4', email: 'test4@user.nz'}
//     ])
//   }))

test('test the home route', () => {
    return request(server).get('/')
    .expect(400)
    .then((res) => {

    })
  })