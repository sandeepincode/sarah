import credentials from "../config.json";
import _ from "lodash";
import sendTextMessage from "./sendTextMessage";
const apiAiClient = require("apiai")(credentials.apiai.token);

export default function processMessage(event) {

  const senderId = event.sender.id;
  const message = event.message.text;

  if (!_.isUndefined(event.message.tags)) {
    console.log(`This message came from ${event.message.tags.source}`)
  } else {
    console.log(`This message came from fb chat`);
  }

  const apiaiSession = apiAiClient.textRequest(message, {
    sessionId: credentials.apiai.sessionId,
  });

  apiaiSession.on("response", (response) => {
    const result = response.result.fulfillment.speech;
    sendTextMessage(senderId, result);
  });

  apiaiSession.on("error", error => console.log(error));

  apiaiSession.end();
}
