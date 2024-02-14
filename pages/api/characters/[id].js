// pages/api/characters/[id].js

import dbConnect from '../../../utils/dbConnect';
import Character from '../../../models/Character';

dbConnect();

const handler = async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const character = await Character.findById(id);
        if (!character) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: character });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const character = await Character.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!character) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: character });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const deletedCharacter = await Character.deleteOne({ _id: id });
        if (!deletedCharacter) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default handler;