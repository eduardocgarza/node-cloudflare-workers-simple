import { json } from "../utils/json.js";

export async function handleEcho({ request }) {
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
