export async function GET() {
  return Response.json([{ NAME: "item1" }, { NAME: "item2" }]);
}
export async function POST() {
  return Response.json([{ NAME: "itemPost1" }, { NAME: "itemPost2" }]);
}
