"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_proxy_middleware_1 = require("./http-proxy-middleware");
function proxy(context, opts) {
    const { middleware } = new http_proxy_middleware_1.HttpProxyMiddleware(context, opts);
    return middleware;
}
module.exports = proxy;
