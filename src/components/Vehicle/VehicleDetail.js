import { Card, CardContent, CardMedia, Typography, Chip, Box, Divider, Stack, Grid, Button } from "@mui/material";

export default function VehicleDetail({ sx = [], vehicle, onBook }) {
  return (
    <Card
      sx={[
        {
          display: 'flex',

        },
        ...(Array.isArray(sx) ? sx : [sx])
      ]}
    >
      <CardMedia
        component="img"
        sx={{ width: '20%' }}
        image={`/images/vehicles/${vehicle.image}`}
        alt={vehicle.title}
      />
      <CardContent sx={{ p: 1 }}>
        <Grid container spacing={1} height='100%'>
          <Grid item container xs={10}>
            <Grid item xs={12}>
              <Typography gutterBottom noWrap variant="h6">
                {vehicle.title}
              </Typography>
              <Divider />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body2" color="text.secondary">
                {vehicle.desc}
              </Typography>
            </Grid>


          </Grid>

          <Grid item container xs={2} direction='column' alignItems='center' justifyContent='center'>
            {/* <Grid item xs>
              <Chip color='primary' label={`$${vehicle.price}`} sx={{ fontWeight: 'bold' }} />
            </Grid>
            <Grid item xs>
              <Button
                variant='outlined'
              >
                Book
                <Chip color='primary' label={`$${vehicle.price}`} sx={{ ml: 1 }} />
              </Button>
            </Grid> */}
            <Button
              variant='outlined'
              onClick={() => {
                if (onBook && typeof onBook === 'function') {
                  onBook({ ...vehicle });
                }
              }}
            >
              Book
              <Chip color='primary' label={`$${vehicle.price}`} sx={{ ml: 1 }} />
            </Button>

          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
};
