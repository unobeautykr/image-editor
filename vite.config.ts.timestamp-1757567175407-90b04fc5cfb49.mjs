// vite.config.ts
import { defineConfig } from "file:///Users/zombcat.zomb/workspaces/image-editor/node_modules/vite/dist/node/index.js";
import react from "file:///Users/zombcat.zomb/workspaces/image-editor/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///Users/zombcat.zomb/workspaces/image-editor/node_modules/vite-plugin-svgr/dist/index.js";
import dts from "file:///Users/zombcat.zomb/workspaces/image-editor/node_modules/vite-plugin-dts/dist/index.mjs";
import * as path from "path";
var __vite_injected_original_dirname = "/Users/zombcat.zomb/workspaces/image-editor";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      }
    }),
    dts()
  ],
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "ImageEditor",
      formats: ["es", "umd"],
      fileName: (format) => `image-editor.${format}.js`
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@mui/material",
        "@mui/icons-material",
        "@emotion/react",
        "@emotion/styled"
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@mui/material": "MuiMaterial",
          "@mui/icons-material": "MuiIconsMaterial",
          "@emotion/react": "EmotionReact",
          "@emotion/styled": "EmotionStyled"
        }
      }
    }
  },
  resolve: {
    alias: {
      "~": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvem9tYmNhdC56b21iL3dvcmtzcGFjZXMvaW1hZ2UtZWRpdG9yXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvem9tYmNhdC56b21iL3dvcmtzcGFjZXMvaW1hZ2UtZWRpdG9yL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy96b21iY2F0LnpvbWIvd29ya3NwYWNlcy9pbWFnZS1lZGl0b3Ivdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgc3ZnciBmcm9tICd2aXRlLXBsdWdpbi1zdmdyJztcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHN2Z3Ioe1xuICAgICAgc3Znck9wdGlvbnM6IHtcbiAgICAgICAgLy8gc3ZnciBvcHRpb25zXG4gICAgICB9LFxuICAgIH0pLFxuICAgIGR0cygpLFxuICBdLFxuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXgudHMnKSxcbiAgICAgIG5hbWU6ICdJbWFnZUVkaXRvcicsXG4gICAgICBmb3JtYXRzOiBbJ2VzJywgJ3VtZCddLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBpbWFnZS1lZGl0b3IuJHtmb3JtYXR9LmpzYCxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXG4gICAgICAgICdyZWFjdCcsXG4gICAgICAgICdyZWFjdC1kb20nLFxuICAgICAgICAnQG11aS9tYXRlcmlhbCcsXG4gICAgICAgICdAbXVpL2ljb25zLW1hdGVyaWFsJyxcbiAgICAgICAgJ0BlbW90aW9uL3JlYWN0JyxcbiAgICAgICAgJ0BlbW90aW9uL3N0eWxlZCcsXG4gICAgICBdLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICByZWFjdDogJ1JlYWN0JyxcbiAgICAgICAgICAncmVhY3QtZG9tJzogJ1JlYWN0RE9NJyxcbiAgICAgICAgICAnQG11aS9tYXRlcmlhbCc6ICdNdWlNYXRlcmlhbCcsXG4gICAgICAgICAgJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnOiAnTXVpSWNvbnNNYXRlcmlhbCcsXG4gICAgICAgICAgJ0BlbW90aW9uL3JlYWN0JzogJ0Vtb3Rpb25SZWFjdCcsXG4gICAgICAgICAgJ0BlbW90aW9uL3N0eWxlZCc6ICdFbW90aW9uU3R5bGVkJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnfic6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVQsU0FBUyxvQkFBb0I7QUFDaFYsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixPQUFPLFNBQVM7QUFDaEIsWUFBWSxVQUFVO0FBSnRCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxNQUNILGFBQWE7QUFBQTtBQUFBLE1BRWI7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxFQUNOO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFZLGFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQzdDLE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUNyQixVQUFVLENBQUMsV0FBVyxnQkFBZ0IsTUFBTTtBQUFBLElBQzlDO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFVBQ2IsaUJBQWlCO0FBQUEsVUFDakIsdUJBQXVCO0FBQUEsVUFDdkIsa0JBQWtCO0FBQUEsVUFDbEIsbUJBQW1CO0FBQUEsUUFDckI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQVUsYUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
