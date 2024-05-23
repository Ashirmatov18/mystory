// api/proxy.js
export default async (req, res) => {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,POST,PUT,DELETE,OPTIONS"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    res.status(204).end();
    return;
  }

  const targetUrl = `https://v5-v6ovqwi4ya-el.a.run.app${req.url}`;
  const response = await fetch(targetUrl, {
    method: req.method,
    headers: {
      ...req.headers,
      "Content-Type": req.headers["content-type"] || "application/json",
    },
    body: req.method !== "GET" && req.method !== "HEAD" ? req.body : undefined,
  });

  const data = await response.json();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(response.status).json(data);
};
