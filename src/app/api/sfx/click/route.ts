import { blobAudioResponse } from "@/lib/blobAudioResponse";

export function GET(request: Request) {
  return blobAudioResponse(request, "click.mp3");
}
