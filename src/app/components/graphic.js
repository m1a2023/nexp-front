export const TemplateGraphic = ({ graphicTitle, mainInformation, color }) => {
  const GraphicTitle = ({ graphicTitle }) => {
    return (
      <div className="flex w-full justify-start font-bold text-lg">
        {graphicTitle}
      </div>
    );
  };

  const GraphicMainInformation = ({ mainInformation }) => {
    return <div>{mainInformation}</div>;
  };

  return (
    <div
      className={`flex flex-col w-3/4 px-6 py-4 ${color} text-black rounded-3xl shadow-2xl select-none`}
    >
      <GraphicTitle graphicTitle={`${graphicTitle}`} />

      <GraphicMainInformation mainInformation={`${mainInformation}`} />
    </div>
  );
};
