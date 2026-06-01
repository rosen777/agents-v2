import { tools } from "./tools";
export type ToolName = keyof typeof tools;

export const executeTool = async (name: ToolName, args: any) => {
  const tool = tools[name as ToolName];

  if (!tool) {
    return `Unknown tool, this doesn't exist`;
  }

  const execute = tool.execute;

  if (!execute) {
    return "This is not a registered tool"
  }
};
