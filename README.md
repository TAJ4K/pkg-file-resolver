# pkg-file-resolver
Easily fix the shortcomings of referencing files locally to your pkg'd executable

## Use
First install the pkg-file-resolver using the npm command line tool
```
npm i -g pkg-file-resolver
```
Then, to use it in your code require it as follows:
```js
const { __resolve } = require("pkg-file-resolver")

console.log(__resolve)
```

## Goal
Within the pkg system the files that are compiled are adding into a snapshot system where they run like they're in a separate drive. This complicates things when you try to reference files local to the exe, as the node program thinks it's in an entirely different drive.  
|                       | node               | pkg                   |
|-----------------------|--------------------|-----------------------|
| __filename            | /dir/file.js       | /snapshot/dir/file.js |
| __dirname              | /dir               | /snapshot/dir         |
| process.cwd()         | /dir as of the cmd | /Users/user           |
| process.execPath      | /node.exe          | /dir/file.exe         |
| process.argv[0]       | /node.exe          | /dir/file.exe         |
| process.argv[1]       | /dir/file.js       | /snapshot/dir/file.js |
| require.main.filename | /dir/file.js       | /snapshot/dir/file.js |
| __resolve             | /dir               | /dir                  |

pkg-file-resolver stands to help jump over this obstacle of just getting the local directory 
