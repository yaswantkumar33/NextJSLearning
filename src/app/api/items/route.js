import { log } from "console";

export async function GET(req) {
  let reqdataget = req.nextUrl.searchParams.get("type");
  log(reqdataget); //you get all your req data in this req
  return Response.json([{ NAME: "item1" }, { NAME: "item2" }]);
}
export async function POST(req) {
  let reqdatapost = await req.json();
  console.log(reqdatapost);

  const responseData = [{ NAME: "itemPost1" }, { NAME: "itemPost2" }];

  return Response.json(responseData);
}
