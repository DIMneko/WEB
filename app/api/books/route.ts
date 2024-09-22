import { NextResponse } from 'next/server';

// GET メソッドの定義
export async function GET() {
  const apiUrl = process.env.BOOKS_BASE_URL;

  if (!apiUrl) {
    // BOOKS_BASE_URL が存在しない場合のエラーレスポンス
    return NextResponse.json({ error: 'BOOKS_BASE_URL is not defined' }, { status: 500 });
  }

  try {
    // 外部 API へのリクエスト
    const res = await fetch(apiUrl);

    if (!res.ok) {
      // API からエラーが返された場合
      return NextResponse.json({ error: 'Failed to fetch books' }, { status: res.status });
    }

    // JSON データの取得
    const books = await res.json();
    return NextResponse.json(books, { status: 200 });
  } catch (error) {
    // 例外処理
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}