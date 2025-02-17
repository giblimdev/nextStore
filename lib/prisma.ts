import { PrismaClient } from '@prisma/client';

// Crée une instance unique de Prisma Client
const prisma = new PrismaClient();

// Exporte l'instance de Prisma Client pour une utilisation dans d'autres parties de l'application
export default prisma;
