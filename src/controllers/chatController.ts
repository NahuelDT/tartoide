import { Request, Response } from 'express';
import { getOpenAIResponse } from '../services/openaiService';

export const chat = async (req: Request, res: Response) => {
  const { message } = req.body;
  try {
    const response = await getOpenAIResponse(message);
    res.json({ reply: response });
  } catch (error) {
    res.status(500).json({ error: 'Error generating response' });
  }
};

