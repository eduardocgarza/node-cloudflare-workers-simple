import { json } from "../utils/json.js";

export function handleHealth() {
  return json({
    ok: true,
    timestamp: new Date().toISOString(),
  });
}
