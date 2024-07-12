export function TemplateCard({ cardTitle, mainInformation, color }) {
  console.log("color is ", color);
  console.log("card title is ", cardTitle);
  console.log("main information is ", mainInformation);

  function SetCardTitle({ cardTitle }) {
    //TODO: write class
    return <div className="flex">{cardTitle}</div>;
  }

  function SetCardMainInformation({ mainInformation }) {
    //TODO: write class
    return <div>{mainInformation}</div>;
  }

  return (
    <div
      className={`flex flex-col w-1/4 p-3 grow justify-start rounded-3xl ${color} shadow-2xl`}
    >
      <SetCardTitle cardTitle={`${cardTitle}`} />

      <SetCardMainInformation mainInformation={`${mainInformation}`} />
    </div>
  );
}
