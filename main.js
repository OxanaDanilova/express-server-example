import express from "express";
import cors from "cors";

const port = 3000;
const server = express();
const favourites = [];

server.use(express.json());
server.use(cors());
//Content-Type
server.get("/favorites", (req, res) => {
  res.json(favourites);
  //1. Konvertieren in JSON string
  //2 JSON Header hinzufügen
});

server.post("/addFavorite", express.json(), (req, res) => {
  console.log(req.body);
  const newFav = req.body;
  favourites.push(newFav);
  res.send("recieved data");
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
