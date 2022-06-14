import path from 'path';
import { fileURLToPath } from 'url'

let result: string;

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

(() => {
    if(__dirname.includes("snapshot")) {
        let regex = /\\[a-zA-Z0-9\s.\_-]+\.exe/
        result =  process.execPath.replace(regex, "")
    } else {
        result =  __dirname.replace("\\node_modules\\pkg-file-resolver", "");
    }
})()

export {result as __resolve};