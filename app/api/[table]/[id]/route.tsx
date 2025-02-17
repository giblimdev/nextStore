import { Ne// Définition des tables valides pour éviter les erreurs de type
const allowedTables = ["users", "products", "orders"] as const;
type AllowedTable = (typeof allowedTables)[number];

// Vérifie si la table est autorisée
const getPrismaModel = (table: string) => {
  if (!allowedTables.includes(table as AllowedTable)) return null;
  return (prisma as any)[table];
};
xtRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";


export async function GET(
  req: NextRequest,
  { params }: { params: { table: string; id: string } }
) {
  const { table, id } = params;
  const prismaModel = getPrismaModel(table);

  if (!prismaModel) {
    return NextResponse.json({ error: `Table "${table}" non valide.` }, { status: 400 });
  }

  try {
    const record = await prismaModel.findUnique({
      where: { id: Number(id) },
    });

    if (!record) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(record);
  } catch (error) {
    return NextResponse.json(
      { error: `Erreur lors de la récupération de "${table}".` },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { table: string; id: string } }
) {
  const { table, id } = params;
  const prismaModel = getPrismaModel(table);

  if (!prismaModel) {
    return NextResponse.json({ error: `Table "${table}" non valide.` }, { status: 400 });
  }

  try {
    const body = await req.json();
    const updatedRecord = await prismaModel.update({
      where: { id: Number(id) },
      data: body,
    });

    return NextResponse.json(updatedRecord);
  } catch (error) {
    return NextResponse.json(
      { error: `Impossible de mettre à jour "${table}".` },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { table: string; id: string } }
) {
  const { table, id } = params;
  const prismaModel = getPrismaModel(table);

  if (!prismaModel) {
    return NextResponse.json({ error: `Table "${table}" non valide.` }, { status: 400 });
  }

  try {
    await prismaModel.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: "Supprimé avec succès" });
  } catch (error) {
    return NextResponse.json(
      { error: `Impossible de supprimer "${table}".` },
      { status: 500 }
    );
  }
}
