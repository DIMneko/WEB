import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function main(){

    try {
        await prisma.$connect();

    } catch (err) {
        return Error("DB接続失敗しました。")
    }

}

// POSTの内容を全取得API
export const GET = async () => {
    try {
        await main();
        // テーブル名: post
        const posts = await prisma.post.findMany();
        return NextResponse.json( {message:"Success", posts }, { status: 200 } );
    } catch (err) {
        return NextResponse.json( {message:"Error", err }, { status: 500 } );
    } finally {
        await prisma.$disconnect();
    }
};