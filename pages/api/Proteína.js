import prisma from '@/lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const proteina = await prisma.proteina.findMany();
      res.status(200).json(Proteína);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar Proteína' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
