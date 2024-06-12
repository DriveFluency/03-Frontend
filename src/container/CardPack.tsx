import Button from "@/components/Button";
import { CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface CardPackProps {
  caption: string;
  title: string;
  description: string;
  price?: number;
  image?: string;
  handleOpen?: () => void;
}

function CardPack({ image, caption, title, description, price, handleOpen }: CardPackProps) {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 245, margin: "1rem auto" }} elevation={3}>
      <CardActionArea sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start",textAlign: "left" }} >
      {price && (
            <Typography
              variant="h6"
              component="div"
              sx={{
                marginTop: "1rem",
                marginLeft: "1rem",
                fontWeight: 900,
                fontSize: "2rem",
                textTransform: "capitalize",
                color: "secondary.main",
              }}
            >
              ${price}
            </Typography>
          )}
        {image && (
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={title}
            sx={{ objectFit: "cover", padding: "1rem" }}
          />
        )}
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
          onClick={handleOpen}
        >
          COMPRAR
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardPack;