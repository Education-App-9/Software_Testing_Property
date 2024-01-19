

const SignUpForm = () => {
  return (
    <form className="mt-4 flex flex-col gap-y-4" action="#">
      <div className="flex flex-col">
        <label className="mx-3 my-2 font-medium" htmlFor="fullname">
          Full Name
        </label>
        <input
          className="bg-transparent border border-black border-opacity-10 rounded-full h-[41px] px-4 text-sm font-medium focus:border-black focus:border focus:border-opacity-50 outline-none"
          type="text"
          id="fullname"
          placeholder="ex: John Doe"
        />
      </div>
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
        <label className="mx-3 my-2 font-medium" htmlFor="accounttype">
          Account Type
        </label>
        <select
          name="accounttype"
          id="accounttype"
          className="form-select appearance-none bg-no-repeat bg-transparent border border-black border-opacity-10 rounded-full h-[41px] pl-4 pr-8 focus:border-black focus:border focus:border-opacity-50 outline-none"
        >
          <option value="company">Company</option>
          <option value="company">Admin</option>
          <option value="company">Employee</option>
        </select>
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
      <div className="flex flex-col">
        <label className="mx-3 my-2 font-medium" htmlFor="confirmpassword">
          Confirm Password
        </label>
        <input
          className="bg-transparent border border-black border-opacity-10 rounded-full h-[41px] px-4 text-sm font-medium focus:border-black focus:border focus:border-opacity-50 outline-none"
          type="confirmpassword"
          id="confirmpassword"
          placeholder="********"
        />
      </div>
      <input className="cursor-pointer font-bold bg-primary h-14 rounded-full mt-4" type="submit" value="Register" />
    </form>
  );
};

export default SignUpForm;
