let result: string;

(() => {
    if(__dirname.includes("snapshot")) {
        let regex = /\\[a-zA-Z0-9\s.\_-]+\.exe/
        result =  process.execPath.replace(regex, "")
    } else {
        result =  __dirname.replace("\\node_modules\\pkg-file-resolver", "");
    }
})()

export {result as __resolve};