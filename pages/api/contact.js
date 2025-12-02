export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, company, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  // TODO: In a real app, send an email or store in a database.
  // For now we just log to server console and respond success.
  console.log("New contact submission:", { name, email, company, message });

  return res.status(200).json({ message: "Thank you! We have received your message." });
}
