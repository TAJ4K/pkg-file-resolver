(() => {
    if(__dirname.includes("snapshot")) {
        filename = __dirname.replace("C:\\snapshot\\", "")
        filename = filename.substring(0, filename.indexOf(`\\node_modules`))
        result =  process.execPath.replace(`\\${filename}.exe`, "")
    } else {
        result =  __dirname.replace("\\node_modules\\pkg-file-resolver", "");
    }
})()

exports.__resolve = result