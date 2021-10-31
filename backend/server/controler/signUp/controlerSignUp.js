const signUpModel = require("./../../models/signUp/signUpModels");

// create user
exports.create = (req, res) => {
  //    validation
  if (!req.body) {
    res.status(403).send({ message: "اطلاعات ثبت نام نمی تواند خالی باشد" });
  }

  const signUp = new signUpModel({
    fullName: req.body.fullName,
    userName: req.body.userName,
    password: req.body.password,
    email: req.body.email,
    age: req.body.age,
  });

  signUp
    .save()
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};

// get info user
exports.infoUser = (req, res) => {
  signUpModel
    .find()
    .then((data) => {
      if (!data) {
        res.status(401).send({ message: "اطلاعاتی یافت نشد" });
      } else {
        res.status(200).send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "error server" });
    });
};

// login
exports.login = (req, res) => {
  signUpModel.findOne({ userName: req.body.userName }, (err, user) => {
    if (user) {
      if (req.body.password === user.password) {
        res.status(200).send({ message: "ورود موفق" ,user});
      } else {
        res
          .status(403)
          .send({ message: "نام کاربری یا رمز عبور صحیح نمی باشد" });
      }
    } else {
      res.status(404).send({ message: "کاربری با این مشخصات یافت نشد" });
    }
  });
};
