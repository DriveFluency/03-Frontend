import CardPack from "@/container/CardPack";
import useHasToken from "@/hooks/useHasToken";
import { getPacks } from "@/services/packs";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Typography from "../components/Typography";


export default function ProductPacks() {
  const [packs, setPacks] = useState<any[]>([]);
  const router = useRouter();
  const hasToken = useHasToken();


  useEffect(() => {
    getPacks().then((data) => {
      console.log(data);
      setPacks(data.packs);
    });
  }, []);

  const handleOpen = () => {
    if (!hasToken) {
      router.push('/SignIn');
    }else {
      router.push('/dashboard');
    }


  };

  return (
    <Box id="pack-de-clases" sx={{
      pb: 8,
      backgroundImage: `url('img/wallpapers/section-packs.svg')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center -8px",
    }}>
    <Container
      component="section"
    >
      <Typography variant="h4" marked="center" align="center" component="h2" sx={{color: "white"}}>
        ¡ELEGÍ TU PACK DE MANEJO!
      </Typography>
      <Typography variant="h5" marked="center" align="center" component="h3" sx={{color: "white"}}>
        ¡PODÉS PRACTICAR EL RECORRIDO DE LA COMUNA DONDE RENDÍS!
      </Typography>

        <Typography
          variant="h5"
          marked="center"
          fontWeight={700}
          align="center"
          sx={{
            backgroundColor: "secondary.main",
            padding: ".6rem 5rem",
            borderRadius: 2,
            width: "fit-content",
            margin: "1rem auto",
          }}
        >
          Packs
        </Typography>

      <Grid container sx={{ mt: 4, justifyContent: "space-around" }}>
        {packs.map((pack) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            key={pack.id}
            sx={{ minWidth: 245 }}
          >
            <CardPack image={"https://medias.spotern.com/spots/w640/51/51112-1581937236.jpg"} title={pack.name} description={pack.description}  handleOpen={handleOpen} />
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
  );
}
