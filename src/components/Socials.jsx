export default function Socials() {
  const connections = [
    { site: "GitHub", link: "https://github.com/ManonLef" },
    { site: "Twitter", link: "https://twitter.com/Manon_Lef" },
    { site: "LinkedIn", link: "https://www.linkedin.com/in/manon-vb/" },
    { site: "Email", link: "mailto:manon@voorbrood.dev" },
  ];

  return connections.map((social, index) => {
    return (
      <a
        className="bg-white bg-opacity-20 text-center border-2 border-transparent text-white p-3 mx-auto sm:min-w-[90%] md:min-w-[50%] xl:max-w-[70%] rounded-md hover:border-2 hover:border-white hover:bg-opacity-30"
        key={index}
        href={social.link}>
        My {social.site}
      </a>
    );
  });
}
