export const Goals = () => {
  return (
    <div className="flex flex-col w-full min-h-[55%] grow-0 p-7 gap-3 rounded-3xl mt-3 bg-black font-bold text-xl text-white selection:bg-electric-indigo shadow-2xl hover:shadow-violet-400 hover:shadow-xl duration-500">
      <textarea className="p-3 h-full caret-white duration-150 bg-black appearance-none outline-none focus:ring-4 focus:ring-ash-gray rounded-xl resize-none"></textarea>
      <div className="flex justify-end h-fit select-none">Your goals</div>
    </div>
  );
};
