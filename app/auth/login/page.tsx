
import { redirect } from 'next/navigation';
import { Login, SignUp } from './actions'
import { getUser } from '@/utils/supabase/queries';
import { createClient } from '@/utils/supabase/server';





export default async function LoginPage() {

  const supabase = createClient();
  const [user] = await Promise.all([
      getUser(supabase),
  ]);
  // 既にログイン状態であればプライベートエリアへ
  if (user) {
      return redirect('/auth/private')
  }


  return (
    <main className="">
      <form className='login_form w-[600px] mx-auto my-4 flex flex-col border-box p-8'>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />

        <div className='flex flex-col gap-2 text-center border-box p-8'>
          <button className='bg-black text-white w-[150px] text-center py-2 px-4 mx-auto' formAction={Login}>Log in</button>
          <button className='bg-black text-white w-[150px] text-center py-2 px-4 mx-auto' formAction={SignUp}>Sign up</button>
        </div>
      </form>
    </main>
  );
}
