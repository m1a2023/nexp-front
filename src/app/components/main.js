import "@fortawesome/fontawesome-free/css/fontawesome.min.css";

export function TemplateMoneyCard({
  cardTitle,
  mainInformation,
  currency,
  color,
  width,
  distance,
}) {
  function SetMoneyCardTitle({ cardTitle }) {
    //TODO: write class
    return (
      <div className="flex w-full h-full justify-start font-bold text-lg">
        <div className="flex">{cardTitle}</div>
      </div>
    );
  }

  function SetMoneyCardMainInformation({ mainInformation }) {
    //TODO: write class
    return (
      <div className="flex grow text-xl justify-start w-full ">
        <div className="truncate text-4xl font-bold">{mainInformation}</div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col snap-start ${width} ${distance} p-3 grow-0 justify-start rounded-3xl ${color} shadow-2xl select-none`}
    >
      <SetMoneyCardTitle cardTitle={`${cardTitle}`} />

      <SetMoneyCardMainInformation mainInformation={`${mainInformation}`} />

      <div className="flex flex-row w-full justify-end">
        <div className="flex justify-end text-2xl opacity-45 font-bold">
          {currency}
        </div>
      </div>
    </div>
  );
}

export function TemplateGraphic({ graphicTitle, mainInformation, color }) {
  function SetGraphicTitle({ graphicTitle }) {
    return (
      <div className="flex w-full justify-start font-bold text-lg">
        {graphicTitle}
      </div>
    );
  }

  function SetGraphicMainInformation({ mainInformation }) {
    return <div>{mainInformation}</div>;
  }

  return (
    <div
      className={`flex flex-col w-3/4 p-4 ${color} rounded-3xl shadow-2xl select-none`}
    >
      <SetGraphicTitle graphicTitle={`${graphicTitle}`} />

      <SetGraphicMainInformation mainInformation={`${mainInformation}`} />
    </div>
  );
}

export function TemplateAbsoluteButton({ styles }) {
  function AddExpensesBlock({ display }) {
    return (
      <div
        id="addExpensesBlock"
        className={`backdrop-blur-lg backdrop-brightness-95 w-full h-full ${display} justify-center items-center`}
      >
        <div className="w-[40%] h-[60%] bg-gray-200 rounded-3xl flex flex-col items-center text-black p-4">
          <h1>Add Expenses</h1>
          <button
            className="p-4 bg-[red] text-white rounded-3xl"
            onClick={() => {
              document.querySelector("#addExpensesBlock").style.display =
                "none";
              document.querySelector("#addExpensesBtn").style.display = "flex";
            }}
          >
            Exit dialog window
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute w-full h-full flex flex-row">
      <AddExpensesBlock display={"hidden"} />
      <div
        id="addExpensesBtn"
        className={
          styles.addInfoBtn +
          " absolute bottom-5 right-5 " +
          styles.addExpensesBtn
        }
        onClick={() => {
          document.querySelector("#addExpensesBlock").style.display = "flex";
          document.querySelector("#addExpensesBtn").style.display = "none";
        }}
      >
        <span>
          {/* <i class="fa-solid fa-plus"></i> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="38"
            height="38"
            color="bg-gray-200"
            fill="none"
          >
            <path
              d="M12 4V20M20 12H4"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
