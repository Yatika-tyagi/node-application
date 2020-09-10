var express = require('express'); // Making Object Of Express
var router = express.Router(); // Using Routing Function of Express
var admin = require('../../controllers/admin');


/*
ADMIN APIs Start
*/

router.route('/addstudent')
  .post(admin.addNewStudent)

router.route('/addfees')
  .post(admin.addNewFee)

// router.route('/AddressList')
//   .get(admin.getAddress)
/*
ADMIN APIs End
*/


module.exports = router; // Exporting router
