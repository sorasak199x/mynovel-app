function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff"
    }
  });
}

export async function onRequestGet({ env }) {
  return jsonResponse({
    configured: Boolean(env.TOKENME_API_KEY?.trim()),
    model: env.TOKENME_MODEL?.trim() || "deepseek-ai/deepseek-v4-flash-0731"
  });
}
