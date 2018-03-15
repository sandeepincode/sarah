import credentials from "../config.json";
export default function verification(req, res) {

  const hubChallenge = req.query["hub.challenge"];
  const hubMode = req.query["hub.mode"];

  const verifyTokenMatches = (req.query["hub.verify_token"] === credentials.facebook.verifyToken);
  if (hubMode && verifyTokenMatches) {
    res.status(200).send(hubChallenge);
  } else {
    res.status(403).end();
  }
}