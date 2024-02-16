// pages/api/covenants/[id].js
import dbConnect from '../../../utils/dbConnect';
import Covenant from '../../../models/Covenant';

dbConnect();

const handler = async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const covenant = await Covenant.findById(id);
        if (!covenant) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: covenant });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const covenant = await Covenant.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!covenant) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: covenant });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const deletedCovenant = await Covenant.deleteOne({ _id: id });
        if (!deletedCovenant) {
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
