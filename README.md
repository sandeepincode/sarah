# Sarah
The Choose Wisely chat bot.

### How To Run/Install
 1. npm i
 2. npm run watch
 3. pray
 4. running on port 4545, hopefully
 
### Setting Up Dev Enviroment
<ol>
    <li>Download ngrok ( https://ngrok.com/download )</li>
    <li>You will need to create a Facebook developer account and one for Dialogflow.</li>
    <li>Create a mock agent for dialog flow i.e small talk and then create a test app on
    the facebook dev portal.</li>
    <li>Fill in the information in config.json and start the app</li>
    <li>Once the app has start up, you will need to start ngrok using ./ngrok http 4545. Using 
        ngrok will create a temporary public url which can be used for dev.
        This url will be the callback url since we are not on live.</li>
     <li>Note that your dev enviroment for the bot will only work for your Facebook
     dev account, therefore testing using other Facebook accounts is not possible without
     Facebook reviewing the application submission.</li>
    <li>Now follow the information below:</li>
</ol>
 
### Useful information
 All the information you will ever need to edit is inside config.json
<br/>

<ol>
  <li>Facebook
      <ul>
        <li>The callback URL is used on the verification. 
            <br/>
                - GET route is used to validate.
            <br/>
                - POST route receives facebook message objects.
        </li>
        <li>
            <b>Messenger Setup</b>
            <br/>
                Page access token will be generated under messenger settings.
                "Token Generation", select Choose Wisely and the token will be generated.
        </li>
        <li>
            <b>Web Hooks Setup</b>
            <br/>
                You will need to enter the callback url, from config.json, and 
                the verify token. For "Subscription Fields" you will need to 
                select at least "messages" and "messaging_postbacks", this is
                what will be sent to the POST route.
        </li>
      </ul>
  </li>
  <li>Dialog Flow (api.ai)
    <ul>
        <li>
            Only really need to worry about the token. When an agent
             is created on the Dialog Flow site, it will be assigned
             a "Client access token" under settings. If a new agent is created,
             the on the "Client access token" will need to be changed.
        </li>
    </ul>
  </li>
</ol>