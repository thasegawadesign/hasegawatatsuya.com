import { get } from "@vercel/blob";

export async function GET() {
  try {
    const result = await get("click.mp3", {
      access: "private",
    });

    if (!result || result.statusCode !== 200 || !result.stream) {
      return new Response("Not found", { status: 404 });
    }

    return new Response(result.stream, {
      headers: {
        "Content-Type": result.blob.contentType || "audio/mp3",
        "Cache-Control": "public, max-age=86400",
        "Content-Disposition": result.blob.contentDisposition || 'inline; filename="click.mp3"',
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
