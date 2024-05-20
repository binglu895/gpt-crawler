import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.baidu.com/",
  match: "https://www.baidu.com/**",
  maxPagesToCrawl: 500,
  outputFileName: "output.json",
  maxTokens: 2000000,
};
