import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.gg51-lpfw010.com/",
  match: "https://www.gg51-lpfw010.com/**","*.ts",
  maxPagesToCrawl: 100,
  outputFileName: "output.json",
  maxTokens: 2000000,
};
