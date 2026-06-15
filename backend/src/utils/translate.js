const Anthropic = require('@anthropic-ai/sdk');

const translateToEnglish = async (texts) => {
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const prompt = `Translate the following Indonesian texts to English. 
Return ONLY a JSON object with the exact same keys but translated values.
Be natural and professional in translation.

Input JSON:
${JSON.stringify(texts, null, 2)}

Return only the JSON object, no explanation.`;

  const message = await client.messages.create({
    model: 'claude-sonnet-4-5',
    max_tokens: 2048,
    messages: [{ role: 'user', content: prompt }]
  });

  const raw = message.content[0].text.trim();
  const clean = raw.replace(/```json|```/g, '').trim();
  return JSON.parse(clean);
};

module.exports = { translateToEnglish };