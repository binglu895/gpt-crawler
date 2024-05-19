import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.builder.io/c/docs/developers",
  match: "mp4",
  maxPagesToCrawl: 5,
  outputFileName: "output.json",
  maxTokens: 2000000,
};
