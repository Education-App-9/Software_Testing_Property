

const MostSearchesCard = ({title}) => {
  const searches = [
    "Rent houses",
    "Best renting houses",
    "Apartments",
    "Rooms",
    "Furnished Rooms",
    "Villa",
  ];
  return (
    <div className="flex flex-col border rounded-md shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08),0px_0px_4px_0px_rgba(0,0,0,0.12)] w-full">
      <div className="flex justify-between items-center px-5 py-3 border-b">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-xs text-themetext">Updated 2 days ago</p>
      </div>
      <div className="flex flex-col gap-3 py-3">
        {searches.map((search, i) => (
          <div className="flex gap-5 items-center text-sm px-5" key={i}>
            <span className="text-[rgba(0,0,0,0.4)]">{i+1}</span>
            <p>{search}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostSearchesCard;
