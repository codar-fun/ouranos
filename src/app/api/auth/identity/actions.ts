"use server";

import { DEFAULT_SERVICE } from "@/lib/consts/general";

export async function getService(_handle: string) {
  return DEFAULT_SERVICE;
}
