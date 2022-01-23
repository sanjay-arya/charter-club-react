import { Card, CardContent, CardMedia, Typography, Chip } from "@mui/material";

export default function VehicleCard({ sx = [], vehicle }) {
  return (
    <Card
      sx={[
        {
          maxWidth: 345,
        },
        ...(Array.isArray(sx) ? sx : [sx])
      ]}
    >
      <CardMedia
        component="img"
        height="140"
        image={`/images/vehicles/${vehicle.image}`}
        alt={vehicle.title}
      />
      <CardContent>
        <Chip color="primary" label={`$${vehicle.price}`} />
        <Typography gutterBottom noWrap variant="body1" sx={{ fontWeight: 'bold', m: 1 }}>
          {vehicle.title}
        </Typography>
      </CardContent>
    </Card>
  )
};
