import express from "express";
const router = express.Router();

import { v4 as uuidv4 } from 'uuid';

let userz = [];

router.get("/", (req, res) => {
  res.send(userz);
});

router.post('/', (req, res) => {
  const newUser = req.body;
  const userId = uuidv4();
  const userWithId = {
    ...newUser,
    id: userId
  }
  userz.push(userWithId);
  res.send(`User with the username ${newUser.name} added to the database.`);
});

// Getting user by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const findUser = userz.find((user) => user.id === id);
  if (findUser) {
    res.send(findUser);
  } else {
    res.status(404).send('User not found.');
  }
});

// Deleting user by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  userz = userz.filter((user) => user.id !== id);
  res.send(`Deleted the user with the ID ${id} and removed from the database.`);
});





//patch section is here 


router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { name, nationality, city, age } = req.body;
  const userUpdate = userz.find((user) => user.id === id);

  if (!userUpdate) {
    res.status(404).send('User not found.');
    return;
  }

  if (name) userUpdate.name = name;
  if (nationality) userUpdate.nationality = nationality;
  if (city) userUpdate.city = city;
  if (age) userUpdate.age = age;

  res.send(`User with ID ${id} has been updated.`);
});


export default router;
