import { parse } from 'regexparam';


export default function mockServerPlugin(apiMap = {}) {
    const server = mockServer.bind(null, apiMap);
    return server;
}

function mockServer(map, req, res) {
    console.info("serving: ", req.url);
    setTimeout(() => {
        //Respond
        const apiName = Object.keys(map).find(url => {
            const resolver = parse(url);
            return resolver.pattern.test(req.url);
        });

        const api = map[apiName];

        if (api && api[req.method.toLowerCase()]) {
            const mock = api[req.method.toLowerCase()]({ ...req.params, ...req.query, ...req.body });
            res.statusCode = mock.status || 200;
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(mock.result))
        } else {
            res.statusCode = 404;
            const { url, method } = req;
            res.end('mock server: no handler found, { url: "' + url + '", method: "' + method + '" }');
        }
    }, 1000); //delay time

};