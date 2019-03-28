/// <reference types="node"/>
/// <reference types="http-proxy"/>
import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import {AppServerModuleNgFactory} from './app.module.server.ngfactory';
import {spawn} from 'child_process';

import {createProxyServer} from 'http-proxy';

// There's no point putting Angular's debug messages into the server log
enableProdMode();

const devserverPort = 5432; // FIXME: get the port from right place
// Launch the ts_devserver which is in charge of bundling JS and injecting scripts into the index
const devserverProcess = spawn('src/devserver_launcher.sh');
// FIXME: make sure to always kill this process when we exit
devserverProcess.stderr.on('data', d => console.error('ts_devserver:', d.toString('utf-8')));
devserverProcess.stdout.on('data', d => console.log('ts_devserver:', d.toString('utf-8')));
            
const PORT = Number(process.env.PORT) || 4000;

const proxy = createProxyServer({
    target: `http://localhost:${devserverPort}`,
    selfHandleResponse : true,
});
proxy.on('proxyReq', (proxyRes, req, res) => {
    console.error('proxy response', req.url, res.statusCode);
    var body = Buffer.alloc(0);
    proxyRes.on('data', function (data: Buffer) {
        body = Buffer.concat([body, data]);
    });
    proxyRes.on('end', function () {
        const bodyStr = body.toString();
        if (req.url === '/' || req.url === '/index.html') {
            console.log("res from proxied server:", bodyStr);
            // TODO: create a new HTML payload by running Angular 
        }
        res.end(body);
    });
});
proxy.listen(PORT);
console.error(`Angular SSR Proxy listening on http://localhost:${PORT}`);
