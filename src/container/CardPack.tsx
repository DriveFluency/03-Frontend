import Button from "@/components/Button";
import { CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";

interface CardPackProps {
  image: string;
  caption: string;
  title: string;
  description: string;
}

function CardPack({ image, caption, title, description }: CardPackProps) {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 245, margin: "1rem" }} elevation={3}>
      {" "}
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
          sx={{ objectFit: "cover", padding: "1rem" }}
        />
        <CardContent sx={{ padding: "0 1rem" }}>
          <Typography
            gutterBottom
            variant="caption"
            component="div"
            sx={{
              marginBottom: "0",
              color: "text.secondary",
              textTransform: "uppercase",
            }}
          >
            {caption}
          </Typography>
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
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          sx={{
            width: "100%",
            backgroundColor: "secondary.main",
            fontWeight: 900,
          }}
        >
          COMPRAR
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardPack;
