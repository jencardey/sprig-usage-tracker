export default async function handler(req, res) {
  const response = await fetch(
    'https://api.sprig.com/v1/surveys?environment_id=67pxNsvjzRgW&limit=200',
    { headers: { Authorization: `Bearer ${process.env.SPRIG_API_KEY}` } }
  );
  const data = await response.json();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(response.status).json(data);
}
