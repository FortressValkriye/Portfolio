import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'
import WindiCSS from "vite-plugin-windicss"

const config: UserConfig = {
  plugins: [react(), ssr(), WindiCSS({
    scan: {
      // By default only `src/` is scanned
      dirs: ["pages"],
      // We only have to specify the file extensions we actually use.
      fileExtensions: ["js", "ts", "jsx", "tsx"]
    }
  })],
}

export default config
