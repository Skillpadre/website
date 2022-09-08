import LinkStyled from "../../styled/LinkStyled";
import TypoStyled from "../../styled/TypoAboutmeSection";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BackgroundAboutMeStyled from "../../styled/BackgroundAboutMeStyled";

import VectorSuite from "../VectorSuite";
import GridItemAboutMe from "../GridItemAboutMe";

export default function AboutMeSection() {

    return (
        <BackgroundAboutMeStyled>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container direction="column" justifyContent="center" alignItems="center" >
                    <h2>About me</h2>

                    <GridItemAboutMe direction="row">
                        <h3>Moi</h3>
                        <TypoStyled>
                            Salut !
                            Je m'appelle Christophe Applanat, je suis développeur web junior. Ce n'était pas mon domaine d'étude à la base, mais montrant un intérêt particulier pour la programamtion, je me suis mis à apprendre le code.
                        </TypoStyled>
                    </GridItemAboutMe>

                    <GridItemAboutMe direction="row-reverse">
                        <h3>Mon parcours</h3>
                        <TypoStyled>
                            J'ai d'abord commencer par apprendre l'algorithmie
                            sur <LinkStyled to="https://info.openclassrooms.com/fr" target="blank">OpenClassRoom</LinkStyled> avant
                            de faire des formations spécialisantes dans le web.
                            Je me suis lancée avec l'école La Capsule pour un Coding Bootcamp JavaScript, puis avec la Wild Code School pour une formation Blockchain. 
                            Ces expériences ont été pour moi très enrichissantes, car j'ai découvert tout un univers, et j'ai appris beaucoup de choses.
                        </TypoStyled>
                    </GridItemAboutMe>

                    <GridItemAboutMe direction="row">
                        <h3>Maintenant</h3>
                        <TypoStyled>
                            Aujourd'hui, je ne cesse de faire évoluer mes compétences en me formant, en me documentant, et en réalisant des projets.
                            Je vous laisse plonger au coeur de mon portfolio et découvrir les secrets qui se cachent dans les profondeurs.
                        </TypoStyled>
                    </GridItemAboutMe>

                    <a href="../pdf/CV_Christophe_Applanat.pdf" target="blank">

                        <VectorSuite />
                    </a>

                </Grid>
            </Box>
        </ BackgroundAboutMeStyled>
    )
}
