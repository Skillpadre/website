import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BackgroundProjectsStyled from "../../styled/BackgroundProjectsStyled";
import BoxItemsProjects from "../../styled/BoxItemsProjects";
import TitleProjectsAnimated from "../../styled/TitleProjectsAnimated";

export type projet = {
    name: string;
    description: string;
    img: string;
    github: string;
    link: string;
}
const projects: projet[] = [
    {
        name: "Masques.org",
        description: "Masques.org est une Web App développée en React JS permettant de mettre en relation fabricants français et toutes personnes intéressées par des masques personnalisés, afin de favoriser les circuits courts et l'économie locale.",
        img: "masques-screen.png",
        github: "https://github.com/ChristopheApp/Masques.org",
        link: "https://masques-project.herokuapp.com/"
    },
    {
        name: "Live Plantos",
        description: "Live Plantos est une Web App développée en React JS qui affiche tous les streams en cours sur le serveur GTA RP de Los Plantos.",
        img: "lp-screen.png",
        github: "https://github.com/ChristopheApp/Live-Plantos",
        link: "https://live-plantos.netlify.app/"
    },
    {
        name: "ENY Token",
        description: "ENY Token est un site qui présente le token En Y, un token ERC20 développé sur la blockchain Ethereum. Il est doté d'une dApp qui permet d'acheter des tokens",
        img: "eny-screen.png",
        github: "https://github.com/ChristopheApp/Eny-front",
        link: "https://eny-token.vercel.app/"
    },
    {
        name: "SpendCoin dApp",
        description: "Spend Coin dApp est une interface destinée à Spend Coin. Elle intéragie avec un smart contract qui permet de swap n'importe quel token ERC20 avec des SPC sur l'agrégateur Quickswap, et de brûler ces SPC.",
        img: "spc-screen.png",
        github: "https://github.com/ChristopheApp/dApp-SpendCoin",
        link: "https://spendcoindapp.netlify.app/"
    },
    {
        name: "Morning News",
        description: "Morning News est une application web développée en React JS qui permet d’afficher les news de plusieurs sites et de plusieurs domaines. On peut aussi mettre des articles en favori pour les sauvegarder en base de données et les lire plus tard.",
        img: "masques-screen.png",
        github: "https://github.com/ChristopheApp/MorningNews",
        link: ""
    },
    {
        name: "My Moviz",
        description: "MyMoviz est une Web App développée en React JS connectée directement à une API permettant de récupérer les informations des films. Elle propose une liste de films, avec les dernières sorties cinéma à jour, et vous permet de créer votre propre wishlist.",
        img: "masques-screen.png",
        github: "https://github.com/ChristopheApp/MyMoviz",
        link: ""
    },
    {
        name: "Web3 Labo",
        description: "Web3 LAbo est une interface sommaire réaliser en React pour tester l'intégrations de smart-contract en Solidity.",
        img: "masques-screen.png",
        github: "https://github.com/ChristopheApp/web3-labo",
        link: ""
    },
    {
        name: "La Cabane",
        description: "La Cabane est un site vitrine d'un logement à louer. Développer avec WordPress.",
        img: "INF.png",
        github: "",
        link: "https://la-cabane13.fr/"
    },
    {
        name: "Tiketac",
        description: "Tiketac est un site de réservation de train développée en React avec base de donnée.",
        img: "INF.png",
        github: "https://github.com/ChristopheApp/Tiketac",
        link: "https://pure-escarpment-44226.herokuapp.com/"
    },
]

export default function Projects() {

    // const projectsList = projects.map((project, index) => {

    //     return (<BoxItemsProjects onClick={handleClick} projet={project} key={index} />)
    // })

    return (
        <BackgroundProjectsStyled>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container direction="column" justifyContent="center" alignItems="center" >
                    <TitleProjectsAnimated>Mes Projets</TitleProjectsAnimated>

                        <div>
                        <BoxItemsProjects  projets={projects}  />
                        {/* {projectsList[projectIndex]} */}
                        </div>

                </Grid>
            </Box>
        </BackgroundProjectsStyled>
    )
}
