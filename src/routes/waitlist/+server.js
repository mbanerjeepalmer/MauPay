import 'dotenv/config'

export function PUT ({}) {
  
  return new Response('blah')

// const client = require('@sendgrid/client');
// client.setApiKey(process.env.SENDGRID_API_KEY);

// const data = {
//   "contacts": [
//     {
//       "email": "ryan39@lee-young.com",
//       "custom_fields": {
//         "w1": "2002-10-02T15:00:00Z",
//         "w33": 9.5,
//         "e2": "Coffee is a beverage that puts one to sleep when not drank."
//       }
//     }
//   ]
// };

// const request = {
//   url: `/v3/marketing/contacts`,
//   method: 'PUT',
//   body: data
// }

// client.request(request)
//   .then(([response, body]) => {
//     console.log(response.statusCode);
//     console.log(response.body);
//   })
//   .catch(error => {
//     console.error(error);
//   });
}