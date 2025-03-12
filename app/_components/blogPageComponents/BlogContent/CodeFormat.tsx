"use client";
import { useState, useEffect, useCallback } from "react";
import { dracula, CodeBlock } from "react-code-blocks";
import * as prettier from "prettier/standalone";
import prettierPluginBabel from "prettier/plugins/babel";
import prettierPluginEstree from "prettier/plugins/estree";
import prettierPluginHtml from "prettier/plugins/html";

function CodeFormat({ code }: { code: string }) {
  const [codeFormat, setCodeFormat] = useState(code);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeFormat);
      setCopied(true);

      // Reset emoji after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const formatCode = useCallback(
    async (codeString: string = "") => {
      try {
        const formattedCode = await prettier.format(codeString, {
          parser: "babel",
          plugins: [
            prettierPluginBabel,
            prettierPluginEstree,
            prettierPluginHtml,
          ],
          semi: true,
          singleQuote: true,
          tabWidth: 4,
        });
        return formattedCode;
      } catch (error) {
        console.error("Error formatting code:", error);
        return code;
      }
    },
    [code]
  );

  useEffect(() => {
    const formatCodeEffect = async () => {
      const formattedCode = await formatCode(code);
      setCodeFormat(formattedCode);
    };

    formatCodeEffect();
  }, [setCodeFormat, code, formatCode]); // Empty dependency array means this runs once after the component mounts

  return (
    <div className="relative">
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="absolute top-2  text-xs right-2  text-white px-4 py-2 rounded transition duration-300 "
      >
        {copied ? "✅ Copied" : "📋 Copy"}
      </button>

      {/* Code Block */}
      <div className="bg-[#282a36] overflow-scroll ">
        <CodeBlock
          text={codeFormat}
          language="tsx"
          showLineNumbers={false}
          theme={dracula}
          customStyle={{ padding: "0.8rem" }}
        />
      </div>
    </div>
  );
}

export default CodeFormat;
