export type CodeGenStructs = Record<string, CodeGenStruct>;

export interface CodeGenStruct {
  // Size of the struct in bytes.
  size: number;

  // Struct members.
  members: Record<string, CodeGenStructMember>;
}

export interface CodeGenStructMember {
  // Native type.
  type: string;

  // Offset of the member in bytes.
  offset: number;

  // If the member is an array than indicates the length
  // of the array.
  length?: number;
}
