export function Balance({ currentBalance }) {
  return (
    <div
      className="flex flex-col p-3 grow justify-start rounded-3xl max-h-40 min-h-20 max-w-72 min-w-36 
      bg-medium-state-blue "
    >
      <div className="flex flex-end justify-left">Current balance</div>
      <div key={currentBalance}>{currentBalance}</div>
    </div>
  );
}

export function TemplateCard({ cardTitle, mainInformation, color }) {
  console.log("color is ", color);
  console.log("card title is ", cardTitle);
  console.log("main information is ", mainInformation);

  function SetCardTitle({ cardTitle }) {
    return <div className="flex">{cardTitle}</div>;
  }

  function SetCardMainInformation({ mainInformation }) {
    return <div>{mainInformation}</div>;
  }

  return (
    <div
      className={`flex flex-col p-3 grow justify-start rounded-3xl max-h-40 min-h-20 max-w-72 min-w-36 ${color}
      shadow-2xl`}
    >
      <SetCardTitle cardTitle={`${cardTitle}`} />
      <SetCardMainInformation mainInformation={`${mainInformation}`} />
    </div>
  );
}
