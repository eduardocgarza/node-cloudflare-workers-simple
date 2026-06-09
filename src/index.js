import { handleEcho } from "./handlers/echo.js";
import { handleRoot } from "./handlers/root.js";
import { handleHello } from "./handlers/hello.js";
import { handleHealth } from "./handlers/health.js";
import { handleNotFound } from "./handlers/not-found.js";

const routes = [
  {
    method: "GET",
    pathname: "/",
    handler: handleRoot,
  },
  {
    method: "GET",
    pathname: "/api/health",
    handler: handleHealth,
  },
  {
    method: "GET",
    pathname: "/api/hello",
    handler: handleHello,
  },
  {
    method: "POST",
    pathname: "/api/echo",
    handler: handleEcho,
  },
];

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const route = routes.find(
      ({ method, pathname }) =>
        request.method === method && url.pathname === pathname,
    );

    if (route) {
      return route.handler({ request, env, ctx, url });
    }

    return handleNotFound({ url });
  },
};
