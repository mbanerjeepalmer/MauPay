import 'dotenv/config'
import client from '@sendgrid/client'


export async function PUT ({request}) {
  const submission = await request.json()
  console.log(submission.email)
  
  


client.setApiKey(process.env.SENDGRID_API_KEY);

const data = {
  "contacts": [
    {
      "email": submission.email
    }
  ]
};

const sendgridRequest = {
  url: `/v3/marketing/contacts`,
  method: 'PUT',
  body: JSON.stringify(data)
}
console.info(sendgridRequest)

let statusCode;
let message;

client.request(sendgridRequest)
  .then(([response, body]) => {
    console.log(response.statusCode);
    console.log(response.body);
    message = response.body
  })
  .catch(error => {
    console.error(error);
    message = error
  });

  return new Response(JSON.stringify({message: message}))
}
