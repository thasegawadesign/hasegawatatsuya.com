import { get } from "@vercel/blob";

// 範囲指定（Range）に応えず一括で流すと、Safari は再生はしても MediaElementAudioSourceNode に音を流さず、
// BGM の解析が無音になってシェーダーが踊らない。ブラウザの Range をそのまま Blob に渡して 206 で返す
export async function blobAudioResponse(request: Request, pathname: string): Promise<Response> {
  try {
    const range = request.headers.get("range");
    const result = await get(pathname, {
      access: "private",
      headers: range ? { range } : undefined,
    });

    if (!result || result.statusCode !== 200 || !result.stream) {
      return new Response("Not found", { status: 404 });
    }

    const contentRange = result.headers.get("content-range");
    const contentLength = result.headers.get("content-length");
    const headers = new Headers({
      "Content-Type": result.blob.contentType || "audio/mpeg",
      "Accept-Ranges": "bytes",
      "Cache-Control": "public, max-age=86400",
      "Content-Disposition":
        result.blob.contentDisposition || `inline; filename="${pathname.split("/").pop()}"`,
      "X-Content-Type-Options": "nosniff",
    });
    if (contentLength) headers.set("Content-Length", contentLength);
    if (contentRange) headers.set("Content-Range", contentRange);

    return new Response(result.stream, { status: contentRange ? 206 : 200, headers });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
