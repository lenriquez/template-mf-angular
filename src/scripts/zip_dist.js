import tar from "tar";
import * as fs from "fs";
import { homedir } from "os";

tar.c(
  {
    gzip: true // this will perform the compression too
  },
  [`./dist/${process.argv[2]}`]
).pipe(fs.createWriteStream(`${homedir()}/.config/octant/plugins/${process.argv[2]}.gz`));


