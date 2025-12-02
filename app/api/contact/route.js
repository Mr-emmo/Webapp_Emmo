export async function POST(request) {
  try {
    const body = await request.json();
    const { name, company, email, message } = body || {};

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "Name and email are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // TODO: integrate with your email service or database here.
    // For now we just log the payload server-side.
    console.log("New EMMO contact enquiry:", {
      name,
      company,
      email,
      message
    });

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Contact API error", error);
    return new Response(
      JSON.stringify({ error: "Internal server error." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
