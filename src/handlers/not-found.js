import { json } from "../utils/json.js";

export function handleNotFound({ url }) {
  return json(
    {
      error: "Route not found",
      path: url.pathname,
    },
    404,
  );
}
