'use server'


import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { createClient } from "@/utils/supabase/server"


// // 文字入力の確認
// function isValidEmail(email: string) {
//     var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     return regex.test(email);
// }

// // リダイレクト処理
// export async function redirectToPath(path: string) {
//     return redirect(path);
// }



// ログイン
export async function Login(formData: FormData) {
    const supabase = createClient()

    // singInwithPassword はパスワード形式でログインを行う。
    const { error } = await supabase.auth.signInWithPassword({
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    })
    if ( error ) {
        redirect('/auth/error')
    }
    revalidatePath('/','layout')
    redirect('/')
}

// サインアップ
export async function SignUp(formData: FormData) {
    const supabase = createClient()

    // signUp はメアド・パスワード形式で登録を行う。
    const { error } = await supabase.auth.signUp({
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        options: {
            // ダッシュボードへ
            emailRedirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/Gallery`
        }

    })
    if (error) {
        redirect('/auth/error')
    }
    revalidatePath('/', 'layout')
    redirect('/')

}

