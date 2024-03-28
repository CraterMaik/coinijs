// CoiniClient.js

const axios = require('axios');

/**
 * Client for interacting with the Coini cryptocurrency payment service API.
 */
class CoiniClient {
  /**
   * Constructs an instance of the CoiniClient.
   * @param {string} apiKey The API key for authentication.
   * @param {string} environment The environment to use ('sandbox' or 'production').
   */
  constructor(apiKey, environment = 'sandbox') {
    const baseUrl = environment === 'production'
      ? 'https://api-pay.coini.tech'
      : 'https://api-pay-qa.coini.tech';
    
    this.client = axios.create({
      baseURL: baseUrl,
      headers: {
        'Authorization': apiKey,
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Creates a new order on the Coini platform.
   * @param {Object} orderData The data for the order to create.
   * @returns {Promise<Object>} The response from creating the order.
   */
  async createOrder(orderData) {
    try {
      const response = await this.client.post('/api/order', orderData);
      return response.data;
    } catch (error) {
      console.error('Error creating order:', error.response ? error.response.data : error.message);
      throw error;
    }
  }

  /**
   * Lists all cryptocurrencies and networks supported by the Coini platform.
   * @returns {Promise<Array>} A promise that resolves to an array of supported cryptocurrencies and networks.
   */
  async getCryptocurrencies() {
    try {
      const response = await this.client.get('/api/cryptocurrencies');
      return response.data;
    } catch (error) {
      console.error('Error retrieving cryptocurrencies:', error.response ? error.response.data : error.message);
      throw error;
    }
  }

  // Additional methods to interact with different parts of the API can be added here.
}

module.exports = CoiniClient;
