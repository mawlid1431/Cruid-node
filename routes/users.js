import express from "express";
const router = express.Router();

import { v4 as uuidv4 } from 'uuid';


const userz = [



  //this data or object was the manual data but now you can aad the 
  // postman and you willl inside this array 
 // {
  //   name: 'Ahmed',
  //   nationality: 'Somalilander',
  //   city: 'Hargeisa',
  //   age: 45
  // },
  // {
  //   name: 'muse',
  //   nationality: 'Somalilander',
  //   city: 'Hargeisa',
  //   age: 24
  // },
  // {
  //   name: 'Malit',
  //   nationality: 'Somalilander',
  //   city: 'Hargeisa',
  //   age: 55
  // }
]

router.get("/", (req, res) => {
  res.send(userz);
});

router.post('/', (req, res) => {
  const newUser = req.body;

  const userId = uuidv4();

  const userWithid = {
    ...newUser,
    id: userId
  }


  userz.push(userWithid);
  res.send(`User with the username ${newUser.name} added to the database.`);
});

export default router;
