const { MailinatorClient, GetInboxRequest } = require('mailinator-client');

const mailinatorClient = new MailinatorClient("token");

mailinatorClient.request(
    new GetInboxRequest("domain")
).then(
    response => console.log(response)
)


