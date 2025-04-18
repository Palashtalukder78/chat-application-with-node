const uploader = require("../../utilities/singleUploader");

function avatarUpload(req, res, next) {
  const upload = uploader(
    "avatars",
    ["image/jpg", "image/jpeg", "image/png"],
    1000000,
    "only jpg,jpeg and png allowed"
  );
  //call the middleware function for error handle here
  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({
        errors: {
          avatar: {
            msg: err.message,
          },
        },
      });
    } else {
      next();
    }
  });
}
module.exports = avatarUpload;
