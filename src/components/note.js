/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { useColorMode } from "theme-ui";
import hex2rgba from "hex2rgba";

export default function Note({ children }) {
  return (
    <React.Fragment>
      <div
        sx={{
          borderLeftColor: t => t.colors.note.border,
          padding: "12px 24px 12px 30px",
          margin: "2em 0",
          borderLeftWidth: "4px",
          borderLeftStyle: "solid",
          backgroundColor: t => t.colors.note.background,
          position: "relative",
          borderBottomRightRadius: "2px",
          borderTopRightRadius: "2px",
          "&:before": {
            position: "absolute",
            top: "14px",
            left: "-12px",
            backgroundColor: t => t.colors.note.border,
            color: t => t.colors.white,
            width: "20px",
            height: "20px",
            borderRadius: "100%",
            textAlign: "center",
            lineHeight: "20px",
            content: "'!'",
            fontSize: "14px"
          }
        }}
      >
        {children}
      </div>
    </React.Fragment>
  );
}
