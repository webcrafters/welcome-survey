
const express = require('express');

const app = express();


const port = 3001;

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000'
}))

app.get('/', (req, res) => {
  const google = require('googleapis').google;
  const credentials = require('./credentials.json');

  const scopes = [
    'https://www.googleapis.com/auth/drive'
  ];

  const auth = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key,
    scopes
  )

  const sheets = google.sheets({ version: 'v4', auth });
  sheets.spreadsheets.values.get({
    spreadsheetId: '12PchsRz8024pj0Vc3YgR6veelz_gSw-oHH2_CpoXnJw',
    range: 'A1:C',
  }, (sheetsErr, sheetsRes) => {
    if (sheetsErr)
      return console.log('The API returned an error: ' + sheetsErr);
    const rows = sheetsRes.data.values;
    if (rows.length > 1) {
      const respJson = {
        submissions: rows.slice(1).map((row) => ({
          date: row[0],
          name: row[1],
          motivation: row[2]
        }))
      };
      res.send(respJson);
      console.log('response successful');
    } else {
      console.log('No data found.');
    }
  });
});
