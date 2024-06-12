import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface CardTurnosProps {
  title: string;
  observations: {
    horario: string;
    encuentro: string;
    instructor: string;
  };
}

function CardTurnos({ title, observations }: CardTurnosProps) {
  return (
    <Card sx={{ maxWidth: 300, marginLeft: "2rem",margin: "1rem auto" }} elevation={3}>
      {" "}
      <CardActionArea>
        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              marginBottom: "0",
              fontWeight: 700,
              fontSize: "1rem",
              textTransform: "capitalize",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              marginBottom: "0",
              fontSize: ".8rem",
              textTransform: "capitalize",
            }}
          >
            Horario: {observations.horario}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              marginBottom: "0",
              fontSize: ".8rem",
              textTransform: "capitalize",
            }}
          >
            Encuentro: {observations.encuentro}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              marginBottom: "0",
              fontSize: ".8rem",
              textTransform: "capitalize",
            }}
          >
            Instructor: {observations.instructor}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardTurnos;
