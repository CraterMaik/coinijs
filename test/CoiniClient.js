const CoiniClient = require('../src/CoiniClient');
const axios = require('axios');

jest.mock('axios');

describe('CoiniClient', () => {
  const apiKey = 'iQGCenQTfF86vbJE3hCcDHzr5mQvSKC9i5yxqLiE//4=';
  const client = new CoiniClient(apiKey, 'sandbox');

  describe('createOrder', () => {
    it('should successfully create an order', async () => {
      // Mock response for testing
      const mockResponse = { data: { success: true, orderId: '12345' } };
      axios.post.mockResolvedValue(mockResponse);

      const orderData = {
        amount: 100,
        currency: 'PEN',
        transaction: {
          customer: {
            name: 'John Doe',
            email: 'sample@example.com'
          },
          networkId: 1,
          cryptoId: 2
        },
        metadata: {
          description: 'Test Description',
          order: 'order-001',
          hash: 'hash-001'
        }
      };

      const response = await client.createOrder(orderData);
      expect(response).toEqual(mockResponse.data);
      expect(axios.post).toHaveBeenCalledWith('/api/order', orderData, expect.anything());
    });
  });

  describe('getCryptocurrencies', () => {
    it('should retrieve a list of supported cryptocurrencies and networks', async () => {
      // Mock response for testing
      const mockResponse = { data: [{ id: 1, name: 'DAI' }, { id: 2, name: 'Ethereum' }] };
      axios.get.mockResolvedValue(mockResponse);

      const response = await client.getCryptocurrencies();
      expect(response).toEqual(mockResponse.data);
      expect(axios.get).toHaveBeenCalledWith('/api/cryptocurrencies', expect.anything());
    });
  });
});
