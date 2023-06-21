const axios = require('axios');
const assert = require('assert');
const { expect } = require('chai');

describe('Users API Test', () => {

    it('should return a 200 response for GET request', async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        expect(response.status).to.equal(200);
    });

    it('should retrieve users and verify response data', async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');

      console.log(response.data);

      const users = response.data;
  
      assert.strictEqual(users.length, 10, 'Number of users should be 10');
  
      // Verify the data for each user
      users.forEach((user) => {
        assert.ok(user.id, 'User ID should be present');
        assert.ok(user.name, 'User name should be present');
        assert.ok(user.username, 'Username should be present');
        assert.ok(user.email, 'Email should be present');
        // Add more assertions for other properties if needed
      });
    });
  });