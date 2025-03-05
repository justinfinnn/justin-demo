import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;

    const data = {
      email_address: email,
      status: "subscribed",
    };

    const response = await fetch(
      `https://us22e.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/`,
      {
        method: "POST",
        headers: {
          Authorization: `${process.env.MAILCHIMP_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      res.status(200).json({ message: "Successfully subscribed!" });
    } else {
      res.status(500).json({ message: "Unable to subscribe" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
