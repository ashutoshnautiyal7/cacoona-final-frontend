import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function PATCH (req, {params}) {

  try{
  const timerId  = params.timerID;
  const timer = await db.saleTimer.update({
    where: {
      id: timerId
    },
    data: {
      isRunning: false
    }
  });
  return NextResponse.json(timer);}

  catch(error) {
    console.log('[PATCH_TIMER]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
}