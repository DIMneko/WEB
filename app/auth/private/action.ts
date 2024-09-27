'use server'


import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"

// ログアウト

export async function LogOut() {
    const supabase = createClient()
    const { error } = await supabase.auth.signOut();
    if(!error){
        redirect('/')
    } 
}
