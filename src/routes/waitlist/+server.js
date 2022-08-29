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
  body: data
}

client.request(sendgridRequest)
  .then(([response, body]) => {
    console.log(response.statusCode);
    console.log(response.body);
    return new Response(JSON.stringify({message: 'Good'}))
  })
  .catch(error => {
    console.error(error);
    return new Response(JSON.stringify({message: 'Bad.'}))
  });

  
}
