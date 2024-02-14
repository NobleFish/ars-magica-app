// pages/api/characters/index.js

import dbConnect from '../../../utils/dbConnect';
import Character from '../../../models/Character';

dbConnect();

const handler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const characters = await Character.find({}).select('character_type character_name');
        res.status(200).json({ success: true, data: characters });
        console.log("Returning characters");
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const character = await Character.create(req.body);
        res.status(201).json({ success: true, data: character });
      } catch (error) {
        res.status(400).json({ success: false  });
        console.log(error);
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default handler;