import axios from 'axios';
(async () => {
    const DATA_URL = "http://127.0.0.1:4040/api/tunnels"
    if (process.env.WebhookURL == null) return;
    const WEBHOOK = process.env.WebhookURL
    const request = await axios.get(DATA_URL)
    axios.post(WEBHOOK, {username: "foundry", content:`foundry server is up at ${request.data.tunnels[0].public_url}`})
})();