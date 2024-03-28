# CoiniJS

CoiniJS is an npm client for interacting with the Coini cryptocurrency payment service API. It allows you to easily perform operations such as creating payment orders and listing supported cryptocurrencies.

## Installation

To install CoiniJS in your project, run:

```bash
npm install coinijs
```

## Basic Usage

### Initial Setup

First, import CoiniJS and create a new instance of the client with your API key:

```bash
const CoiniClient = require('coinijs');

const client = new CoiniClient('your_api_key_here', 'sandbox'); // Use 'production' for the production environment

```

## Create an Order

To create a new payment order:

```bash
async function createOrder() {
  try {
    const order = await client.createOrder({
      amount: 100,
      currency: 'PEN',
      transaction: {
        customer: {
          name: 'John Doe',
          email: 'john.doe@example.com'
        },
        networkId: 1,
        cryptoId: 2
      },
      metadata: {
        description: 'Cryptocurrency course purchase',
        order: 'order-123',
        hash: 'hash-123'
      }
    });
    console.log(order);
  } catch (error) {
    console.error(error);
  }
}

createOrder();

```

## List Supported Cryptocurrencies

To get a list of supported cryptocurrencies and networks:

```bash
async function listCryptocurrencies() {
  try {
    const cryptocurrencies = await client.getCryptocurrencies();
    console.log(cryptocurrencies);
  } catch (error) {
    console.error(error);
  }
}

listCryptocurrencies();
```

## API Documentation

`createOrder(orderData)`

> Creates a new payment order. `orderData` must be an object containing `amount`,
> `currency`, `transaction` and `metadata`

`getCryptocurrencies()`

> Returns a list of the cryptocurrencies and networks supported by Coini.

## Contributions

Contributions to the project are welcome. Please check out the open issues on GitHub or open a new one to discuss changes or report bugs.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
