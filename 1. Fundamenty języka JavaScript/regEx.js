const stringFiles = "file01.mp3 file02.mp3 file03.mp3 file04.mp3 file05.mp3 file06.mp3"
const regEx = /(\w+)\.mp3/g;
let match = regEx.exec(stringFiles);

while (match) {
    const fileNamee = match[1];
    console.log(fileNamee);
    match = regEx.exec(stringFiles)
}