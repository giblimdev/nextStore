import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { model } = req.query;

  if (!model || typeof model !== 'string') {
    return res.status(400).json({ error: 'Model parameter is required' });
  }

  try {
    let data;

    switch (model) {
      case 'User':
        data = await prisma.user.findMany();
        break;
      case 'Store':
        data = await prisma.store.findMany();
        break;
      case 'Category':
        data = await prisma.category.findMany();
        break;
      case 'Classe':
        data = await prisma.classe.findMany();
        break;
      case 'SubClasse':
        data = await prisma.subClasse.findMany();
        break;
      default:
        return res.status(400).json({ error: 'Invalid model' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
