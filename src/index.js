export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // GET /
    if (url.pathname === "/" && request.method === "GET") {
      return json({
        message: "Cloudflare Worker API is running",
        service: "cloudflare-worker-api",
      });
    }

    // GET /api/health
    if (url.pathname === "/api/health" && request.method === "GET") {
      return json({
        ok: true,
        timestamp: new Date().toISOString(),
      });
    }

    // GET /api/hello?name=Eduardo
    if (url.pathname === "/api/hello" && request.method === "GET") {
      const name = url.searchParams.get("name") || "world";

      return json({
        message: `Hello, ${name}`,
      });
    }

    // POST /api/echo
    if (url.pathname === "/api/echo" && request.method === "POST") {
      let body;

      try {
        body = await request.json();
      } catch {
        return json(
          {
            error: "Invalid JSON body",
          },
          400,
        );
      }

      return json({
        youSent: body,
      });
    }

    // 404
    return json(
      {
        error: "Route not found",
        path: url.pathname,
      },
      404,
    );
  },
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
