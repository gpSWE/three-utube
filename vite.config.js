import { defineConfig } from "vite"
import path from "path"

export default defineConfig( {
	server: {
		host: true,
	},
	resolve: {
		alias: {
			"@lib": path.resolve( __dirname, "./src/library" ),
		},
	},
	optimizeDeps: {
		esbuildOptions: {
			target: "esnext",
		}
	},
	build: {
		target: "esnext",
	}
} )
