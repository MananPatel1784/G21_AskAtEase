const express = require('express');
const router = express.Router();
const User = require('../models/User');

// 1. Get total user count
router.get('/count', async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.json({ count });
  } catch (err) {
    console.error('Error fetching user count:', err.message); // Log for debugging
    res.status(500).json({ message: 'Error fetching user count' });
  }
});

// 2. Get user email by ID
router.get('/:id/email', async (req, res) => {
  try {
    const user = await User.findById(req.params.id, 'emailId');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ emailId: user.emailId });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 3. Get specific user details
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id, 'username emailId createdAt');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 4. Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 5. Create a new user
router.post('/', async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    emailId: req.body.emailId,
    role: req.body.role,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;









// earlier code 

// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');


// router.get('/count', async (_req, res) => {
//   try {
//     const count = await User.countDocuments();
//     res.json({ count });
//   } catch (err) {
//     console.error('Error fetching user count:', err.message); // Log for debugging
//     res.status(500).json({ message: 'Error fetching user count' });
//   }
// });


// // 1 Get user email by ID
// router.get('/:id/email', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id, 'emailId');
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json({ emailId: user.emailId });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // 2 Get specific user details
// router.get('/:id', async (req, res) => {
//   try {
//     // const count=await User.countDocuments();
//     const user = await User.findById(req.params.id, 'username emailId createdAt');
//     // console.log(count)
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
// // router.get('/temp', async (req, res) => {
// //   console.log("You are at temp")
// // });
// // Get all users
// router.get('/', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });


// // Create user
// router.post('/', async (req, res) => {
//   const user = new User({
//     username: req.body.username,
//     password: req.body.password,
//     emailId: req.body.emailId,
//     role: req.body.role
//   });

//   try {
//     const newUser = await user.save();
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// module.exports = router;