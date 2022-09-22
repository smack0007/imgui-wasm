export async function ensureDirectory(path: string): Promise<void> {
  try {
    await Deno.mkdir(path);
  } catch {
    // Ignore
  }
}
