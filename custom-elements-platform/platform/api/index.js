const express = require('express');
const apiMap = require("./map.js");
const regexparam = require('regexparam');

const app = express();
const port = 4525;


app.use("/api", (req, res, next) => {

    setTimeout(() => {
        //Respond
        const apiName = Object.keys(apiMap).find(url => {
            const resolver = regexparam.parse(url);
            return resolver.pattern.test(req.url);
        });

        const api = apiMap[apiName];

        if (api && api[req.method.toLowerCase()]) {
            const mock = api[req.method.toLowerCase()]({ ...req.params, ...req.query, ...req.body });
            res.setHeader('Content-Type', 'application/json');
            res.status(mock.status || 200).send(JSON.stringify(mock.result));
        } else {
            const { url, method } = req;
            res.status(404).send('mock server: no handler found, { url: "' + url + '", method: "' + method + '" }');
        }
        next();
    }, 1000); //delay time


});


app.listen(port, () => {
    console.log(`Yotam Admin app listening on port ${port}`);
});