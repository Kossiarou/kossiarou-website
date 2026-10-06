import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // i18n: user-facing text lives in src/i18n/dictionaries/{fr,en}.ts, not in the JSX.
    // Only brand name and non-linguistic symbols may be written directly in a component.
    files: ["src/components/**/*.tsx"],
    rules: {
      "react/jsx-no-literals": [
        "error",
        {
          noStrings: false,
          ignoreProps: true,
          allowedStrings: ["kossiarou", "AK", "CNY", "EUR", "←", "⇅", "−", "+", "•", "•••• •••• •••• 2277"],
        },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
