export type CodeGenFunctions = Record<string, CodeGenFunction>;

export interface CodeGenFunction {
  parameters: Record<string, CodeGenFunctionParam>;

  result: {
    // Native type
    type: string;

    // If set this type will be used as the script type.
    overrideType?: string;
  };
}

export interface CodeGenFunctionParam {
  // FFI type.
  type: string;

  // Can the parameter be null.
  nullable?: boolean;

  // If set this type will be used as the script type.
  overrideType?: string;
}

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
