import { writeStructs } from "./codegen/generators.ts";
import { structs } from "./codegen/structs.ts";
import { joinPath, SRC_PATH } from "./paths.ts";

async function main(): Promise<void> {
  await writeStructs(joinPath(SRC_PATH, "structs.ts"), structs);
}

await main();
