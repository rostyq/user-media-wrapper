import typescript from "@rollup/plugin-typescript";

import pkg from "./package.json";

export default {
  input: "user-media-wrapper.ts",
  output: { file: pkg.module, format: 'es', sourcemap: true },
  plugins: [
    typescript({ tsconfig: "./tsconfig.json" }),
  ]
}
