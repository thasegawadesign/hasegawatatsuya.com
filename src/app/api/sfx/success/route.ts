import { blobAudioResponse } from "@/lib/blobAudioResponse";

export function GET(request: Request) {
  return blobAudioResponse(request, "success.mp3");
}
