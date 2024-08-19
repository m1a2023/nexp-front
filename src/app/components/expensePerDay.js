export const ExpensePerdayBlock = () => {
  const Header = () => {
    return (
      <div className="flex flex-col">
        <div>Expenses</div>
        <div className="font-normal text-base">Per day</div>
      </div>
    );
  };

  const SpendEveryday = ({ value, currency }) => {
    return (
      <div className="flex flex-col text-wrap relative">
        <div className="text-wrap">
          <span className="font-bold text-2xl text-electric-indigo">
            ~{value}
            {currency}
          </span>
          <span className="font-light ml-2">you spend everyday in average</span>
        </div>
      </div>
    );
  };

  const DifLastMonth = ({ value, more }) => {
    return (
      <div className="flex flex-col text-wrap relative">
        <div className="text-wrap">
          <span className="font-bold text-2xl text-electric-indigo">
            {value}%
          </span>
          <span className="font-light ml-2">
            {more ? "more" : "less"} than previous month
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-1/8 h-full p-4 gap-y-3 font-bold text-neutral-800 bg-gray-100 text-lg rounded-3xl shadow-2xl select-none">
      <Header />
      <div className="flex flex-col gap-y-4">
        <SpendEveryday value={319} currency={"$"} />
        <DifLastMonth value={32} more={true} />
      </div>
    </div>
  );
};
