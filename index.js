const fetch = require('node-fetch');

class Payscel {
    constructor(apiKey, linkId) {
        this.apiKey = apiKey;
        this.linkId = linkId;
        this.apiUrl = "https://payscel.com/api/v1/initiate";
        this.queryUrl = "https://payscel.com/api/v1/query";
    }

    async initiate(msisdn, amount, callback) {
        const data = {
            msisdn: msisdn,
            amount: amount,
            callback: callback
        };
        return await this.handle(data, this.apiUrl);
    }

    async query(checkoutId) {
        const data = {
            CheckoutRequestId: checkoutId
        };
        return await this.handle(data, this.queryUrl);
    }

    async handle(data, url) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': 'insomnia/2023.5.8',
                    'apikey': this.apiKey,
                    'linkid': this.linkId
                },
                body: JSON.stringify(data)
            });

            const responseData = await response.json();
            return responseData;
        } catch (error) {
            return "Error: " + error.message;
        }
    }
}

module.exports = Payscel;