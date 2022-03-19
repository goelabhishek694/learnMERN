const fs = require("fs"); //fs module
const path = require("path"); //path module
let types = {
    media: ["mp4", "mkv", "mp3","mov"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex',"csv",'json'],
    app: ['exe', 'dmg', 'pkg', "deb","apk"],
    images: ['png','jpg','jpeg']
}


function organize(srcPath) {
  //1. to check if srcPath is present
  if (srcPath == undefined) {
    //The process.cwd() method returns the current working directory of the Node.js process.
    //console.log(srcPath); //undefined
    srcPath = process.cwd();
    // console.log("source path is ",srcPath);
  }

  //2. to create a directory-> organized_files
  // let organizedFiles = srcPath + "/" + "organized_files";
  let organizedFiles = path.join(srcPath, "organized_files");
  console.log("organized files folder path is ", organizedFiles);
  if (fs.existsSync(organizedFiles) == false) {
    //organizedfiles naam ka folder exist nhi krta to ek folder bana do warna rhne do
    fs.mkdirSync(organizedFiles);
  } else console.log("folder already exists");

  //3. scan the entire srcPath(doenloads folder in this case)

  //Reads the contents of the directory.-> basically reads the names of files present in directory
    let allFiles = fs.readdirSync(srcPath);
    // console.log(allFiles);

  //4.trvaerse over all the files and classify them on the basis of their extension (.pdf , .mp3)
    for (let i = 0; i < allFiles.length; i++){
      // let ext = allFiles[i].;
      //extname returns the extension of the file
      let fullPathOfFile = path.join(srcPath, allFiles[i]);
      console.log(fullPathOfFile);
      //1. check if it is a file or folder
      //lstatsync gives the information regarding the link provided ,
      let isThisAFile = fs.lstatSync(fullPathOfFile).isFile(); //true-> file hai to  or false-> agar folder h 
      console.log(allFiles[i] + " is " + isThisAFile);
      if (isThisAFile) {
        //1.1 get ext name
        let ext = path.extname(allFiles[i]).split(".")[1];
        // console.log(ext);
        //1.2 get folder name from extension
        let folderName = getFolderName(ext); //archives
        // console.log(folderName);
        //1.3 copy from src folder (srcPath) and paste in dest folder (folder_name e.g. document, media etc)
                        //copy      kya copy kro    paste
        copyFileToDest(srcPath, fullPathOfFile, folderName);
      }
    }
}


function getFolderName(ext) {
  //magic
  for (let key in types) {
    // console.log(key);
    for (let i = 0; i < types[key].length; i++) {
      if (types[key][i] == ext) {
        return key;
      }
    }
  }
  return "miscellaneous"
}

function copyFileToDest(srcPath, fullPathOfFile, folderName) {
  //1. folderName ka path banana h
  let destFolderPath = path.join(srcPath, "organized_files", folderName); //....../downloads/organized_files/archives
  // console.log(des);
  //2 check folder if exists, if it does not, then make folder

  if (!fs.existsSync(destFolderPath)) {
    fs.mkdirSync(destFolderPath);
  }
  //3. copy file from src folder to dest folder

  // Returns the last portion of a path
  let fileName = path.basename(fullPathOfFile); //abc.zip
  let destFileName = path.join(destFolderPath, fileName);    
                      // src        dest
  fs.copyFileSync(fullPathOfFile, destFileName);
  //magic
}


// let srcPath="/Users/abhishekgoel/Desktop/Desktop/AbhishekGoel/FJP5/Node/fileOrganizer/downloads"
// organize(srcPath);

module.exports = {
  organize:organize
}

