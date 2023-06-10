import express from "express";
const router = express.Router();

const userz = [
  {
    name: 'Ahmed',
    nationality: 'Somalilander',
    city: 'Hargeisa',
    age: 45
  },
  {
    name: 'muse',
    nationality: 'Somalilander',
    city: 'Hargeisa',
    age: 24
  },
  {
    name: 'Malit',
    nationality: 'Somalilander',
    city: 'Hargeisa',
    age: 55
  }
]

router.get("/", (req, res) => {
  res.send(userz);
});

router.post('/', (req, res) => {
  const newUser = req.body;
  userz.push(newUser);
  res.send(`User with the username ${newUser.name} added to the database.`);
});

export default router;
