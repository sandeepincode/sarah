import express from 'express';
import messageWebhook from '../controllers/messageWebhook';
import verification from '../controllers/verification';

const router  = express.Router();

router.get("/",(req, res) => {
  return verification(req, res);
});

router.post("/",(req, res) => {
  return messageWebhook(req, res);
});

module.exports = router;