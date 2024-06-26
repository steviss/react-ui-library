import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";

// eslint-disable-next-line prettier/prettier
import packageJson from "./package.json" assert { type: "json" };


const config = [
  {
    input: "src/index.ts",
    external: ['react-dom'],
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      json(),
      postcss({
        config: {
          path: "./postcss.config.cjs",
          ctx: {
            env: process.env.NODE_ENV,
          },
        }
      })
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|scss)$/],
  },
];

export default config;
