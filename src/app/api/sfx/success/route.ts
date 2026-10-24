import { blobAudioResponse } from "@/lib/blobAudioResponse";

export function GET(request: Request) {
  return blobAudioResponse(request, "servo.mp3");
}
