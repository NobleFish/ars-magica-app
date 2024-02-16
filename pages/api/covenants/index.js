import dbConnect from '../../../utils/dbConnect';
import Covenant from '../../../models/Covenant';

dbConnect();

const handler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        // Return just the covenant_name field for all covenants
        const covenants = await Covenant.find({}).select('covenant_name');
        res.status(200).json({ success: true, data: covenants });
        console.log("Returning covenants");
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const covenant = await Covenant.create(req.body);
        res.status(201).json({ success: true, data: covenant });
      } catch (error) {
        res.status(400).json({ success: false });
        console.log(error);
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default handler;
