

const LoginForm = () => {
  return (
    <form className="mt-4 flex flex-col gap-y-4" action="/admin">
      <div className="flex flex-col">
        <label className="mx-3 my-2 font-medium" htmlFor="email">
          Email
        </label>
        <input
          className="bg-transparent border border-black border-opacity-10 rounded-full h-[41px] px-4 text-sm font-medium focus:border-black focus:border focus:border-opacity-50 outline-none"
          type="email"
          id="email"
          placeholder="ex: john_doe@gmail.com"
        />
      </div>
      <div className="flex flex-col">
        <label className="mx-3 my-2 font-medium" htmlFor="password">
          Password
        </label>
        <input
          className="bg-transparent border border-black border-opacity-10 rounded-full h-[41px] px-4 text-sm font-medium focus:border-black focus:border focus:border-opacity-50 outline-none"
          type="password"
          id="password"
          placeholder="********"
        />
      </div>
      <input
        className="cursor-pointer font-bold bg-primary h-14 rounded-full mt-4"
        type="submit"
        value="Login"
      />
    </form>
  );
};

export default LoginForm;
