# Payscel Node.js Library

This library provides a simple interface for interacting with the Payscel payment gateway in your Node.js applications.


## Installation
You can install the library via npm:

```
npm install payscel
```
## Usage
Instantiate the Payscel class:
```js
const Payscel = require('payscel');

const apiKey = 'YOUR_API_KEY';
const linkId = 'YOUR_LINK_ID';
const payscel = new Payscel(apiKey, linkId);
```

Initiate a payment:

```js
const msisdn = '254712345678'; // Phone number
const amount = 10; // Amount in KES
const callback = 'https://your-website.com/callback'; // Your callback URL

payscel.initiate(msisdn, amount, callback)
    .then(response => {
        // Handle the response
        console.log(response);


    })
    .catch(error => {
        // Handle errors
        console.error(error);
    });

```

Query the status of a payment:

```js
const checkoutId = 'CHECKOUT_ID_FROM_INITIATE_RESPONSE';

payscel.query(checkoutId)
    .then(response => {
        // Handle the response
        console.log(response);
    })
    .catch(error => {
        // Handle errors
        console.error(error);
    });

```
### Methods
- initiate($msisdn, $amount, $callback): Initiates a payment.
- query($checkoutId): Queries the status of a payment.

### Examples
Please see the examples directory for more detailed usage examples.

### Contributing
We welcome contributions! Please see the CONTRIBUTING.md file for more information.

### License
This library is licensed under the MIT License. See the LICENSE file for more information.