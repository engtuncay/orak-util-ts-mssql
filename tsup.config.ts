import { defineConfig } from "tsup";

export default defineConfig([
    {
        entry: { "orak-util-ts-mssql": "src/index.ts" },
        format: ["cjs", "esm"],
        dts: true,
        minify: true, // `tsup`'un minify işlemini kullanıyoruz.
        clean: true,
        outDir: "dist"
    },
]);