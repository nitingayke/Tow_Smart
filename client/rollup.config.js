import { defineConfig } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  input: "src/main.ts",
  output: {
    file: "dist/bundle.js",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false,
    }),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
  ],
  external: [], // Add any external dependencies here
});
