import processMessage from "../helpers/processMessage";

export default function messageWebhook(req, res) {
  if (req.body.object === "page") {
    req.body.entry.forEach(entry => {
      entry.messaging.forEach(event => {
        if (event.message && event.message.text) {
          processMessage(event);
        }
      });
    });
    return res.status(200).end();
  }
}