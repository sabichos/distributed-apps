const express = require('express');
const apiMap = require("./api/index.js");
const regexparam = require('regexparam');

const app = express();
const port = 4510;


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



const fallback = (...args) => (req, res, next) => {
    if ((req.method === 'GET' || req.method === 'HEAD') && req.accepts('html') && !req.url.endsWith(".html")) {
        (res.sendFile || res.sendfile).call(res, ...args, err => err && next())
    } else next()
}

app.use(express.static('app'));
app.use(fallback('index.html', { root: "app" }))


app.listen(port, () => {
    console.log(`Yotam Admin app listening on port ${port}`);
});