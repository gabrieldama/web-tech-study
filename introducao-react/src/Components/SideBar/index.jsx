import "./SideBar.css"
import homeIcon from "../../assets/home.svg"

function SideBar() {
	const links = [
	{ label: "Início", url: "/", icon: homeIcon },
	{ label: "Componentes", url: "/componentes", icon: homeIcon },
  { label: "Sobre", url: "/sobre" }
];

	return (
		<aside className="sidebar">
			<h2>Menu</h2>
				<ul>
					{links.map((nome) => {
                        return (
						<li key={nome.url}>
							<a href={nome.url}>
                              {<img src={nome.icon} alt="" />}
                              {nome.label}
							</a>
						</li>
                        )
					})}
				</ul>
		</aside>
	)
}

export default SideBar
