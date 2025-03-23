const multer = require("multer");
const path = require("path");
const createError = require("http-errors");

function uploader(
  subFolder_path,
  allowed_file_types,
  max_file_size,
  error_msg
) {
  //make upload Object

  //file upload folder
  const UPLOADS_FOLDER = `${__dirname}/../public/uploads/${subFolder_path}/`;

  //define the storage
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, UPLOADS_FOLDER);
    },
    filename: function (req, file, cb) {
      const fileExt = path.extname(file.originalname);
      const fileName =
        file.originalname
          .replace(fileExt, "")
          .toLowerCase.split(" ")
          .join("-") +
        "-" +
        Date.now();
      cb(null, fileName + fileExt);
    },
  });
  //Prepare the final multer upload object
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: max_file_size,
    },
    fileFilter: (req, file, cb) => {
      if (allowed_file_types.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(createError(error_msg));
      }
    },
  });
  return upload;
}

module.exports = uploader;
