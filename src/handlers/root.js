import { json } from "../utils/json.js";

export function handleRoot() {
  return json({
    message: "Cloudflare Worker API is running",
    service: "node-cloudflare-workers-simple",
  });
}
