import { json } from "../utils/json.js";

export function handleHello({ url }) {
  const name = url.searchParams.get("name") || "world";

  return json({
    message: `Hello, ${name}`,
  });
}
