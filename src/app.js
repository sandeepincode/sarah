import express from 'express';
import bodyParser from 'body-parser';
import routes from "./routes/api";

const app = express();
app.use(bodyParser.json());

app.use(routes);

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.listen(4545, () => console.log('Chatbot server is running on port 4545'));
