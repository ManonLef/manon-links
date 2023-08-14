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
        className="bg-white bg-opacity-20 text-center text-white tracking-wide p-3 mx-auto sm:min-w-[90%] md:min-w-[50%] lg:max-w-[70%] rounded-md"
        key={index}
        href={social.link}>
        My {social.site}
      </a>
    );
  });
}
