
var response = require("./response");
var Constants = require("../utils/constants");
var Student = require("../model/student");
var Fee = require("../model/fee");


exports.addNewStudent = (req, res) => {
  let sql = `INSERT INTO student (student_name, enrollment_number, class, created_at) VALUES (?, ?, ?, ?)`;
  con.query(
    sql,
    [
      req.body.student_name,
      req.body.enrollment_number,
      req.body.class,
      Date.now()
    ],
    (err, result) => {
      if (err) throw err;
      else if (result.length === 0) {
        response.onError(res, Constants.Strings.ERROR, 204);
      } else {
        response.onSuccess(res, {}, Constants.Strings.Add, 200);
      }
    }
  );
};

exports.addNewFee = (req, res) => {
  let sql = `INSERT INTO fee (student_id, student_name, enrollment_number, class, amount, created_at) VALUES (?, ?, ?, ?, ?, ?)`;
  con.query(
    sql,
    [
      req.body.student_id,
      req.body.student_name,
      req.body.enrollment_number,
      req.body.class,
      req.body.amount,
      Date.now()
    ],
    (err, result) => {
      if (err) throw err;
      else if (result.length === 0) {
        response.onError(res, Constants.Strings.ERROR, 204);
      } else {
        response.onSuccess(res, {}, Constants.Strings.Add, 200);
      }
    }
  );
};

exports.getdetails =(req, res) => { // Function to Get the data from Headings
  Fee.find({student_id: req.student_id}, function(err, response) { // Function to Find all the Headings from collection "Heading"
  if (err) {
      return res.json(req, res, err);
  }

  res.json(response);
  })
};


// exports.getAddress = (req, res) => {
//   let sql = "SELECT * FROM address";
//   con.query(sql, (err, result) => {
//     console.log(result);
//     if (err) throw err;
//     else if (result.length === 0) {
//       response.onError(res, Constants.Strings.DATA_NOT_FOUND, 204);
//     } else {
//       response.onSuccess(res, result, 200, Constants.Strings.Data_Fetch);
//     }
//   });
// };
