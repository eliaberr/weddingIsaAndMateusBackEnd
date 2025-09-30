export function OptionNavBar() {
  const infoMenu = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "Nossa História",
      link: "",
    },
    {
      name: "Informações do Casamento",
      link: "",
    },
    {
      name: "Confirmar Presença",
      link: "",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row gap-7">
      {infoMenu.map((item, index) => (
        <a
          className="cursor-pointer hover: hover:underline"
          key={index}
          href={item.link}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}
