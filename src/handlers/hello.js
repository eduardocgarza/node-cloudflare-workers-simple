import { json } from "../utils/json.js";

export function handleHello({ url }) {
  const name = url.searchParams.get("name") || "red";

  return json({
    message: `Morning, ${name}`,
  });
}
