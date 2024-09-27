import { redirect } from "next/navigation";
import { LogOut } from "./action";
// import { getUser } from "@/utils/supabase/queries";
import { createClient } from "@/utils/supabase/server";

export default async function Private_Page() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);

  if (!user) {
    return redirect("/");
  }

  return (
    <>
      <div>ログイン状態のみ見れます。{user.email}</div>
      <form>
        <button formAction={LogOut}>ログアウト</button>
      </form>
    </>
  );
}
