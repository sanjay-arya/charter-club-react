import { Card, CardContent, CardMedia, Typography, Chip, Box, Divider, Stack, Grid, Button } from "@mui/material";

export default function VehicleDetail({ sx = [], vehicle, onBook }) {
  return (
    <Card
      sx={[
        {
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }

        },
        ...(Array.isArray(sx) ? sx : [sx])
      ]}
    >
      <CardMedia
        component="img"
        sx={{ width: { xs: '100%', md: '20%' } }}
        image={`/images/vehicles/${vehicle.image}`}
        alt={vehicle.title}
      />
      <CardContent sx={{ p: 1 }}>
        <Grid container spacing={1} height='100%' direction={{ xs: 'column', md: 'row' }}>
          <Grid item container xs={10} md={9} lg={10} spacing={1}>
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

            <Grid item xs={6} md={3}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'right' }} >
                Body Style:
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="body2">
                {vehicle.body}
              </Typography>
            </Grid>

            <Grid item xs={6} md={3}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'right' }} >
                Engine:
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="body2">
                {vehicle.engine}
              </Typography>
            </Grid>

            <Grid item xs={6} md={3}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'right' }} >
                Mileage:
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="body2">
                {vehicle.mileage} KM
              </Typography>
            </Grid>

            <Grid item xs={6} md={3}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'right' }} >
                Color:
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="body2">
                {vehicle.color}
              </Typography>
            </Grid>

            <Grid item xs={6} md={3}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'right' }} >
                Transmission:
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="body2">
                {`${vehicle.gear}-speed ${vehicle.transmission}`}
              </Typography>
            </Grid>

            <Grid item xs={6} md={3}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'right' }} >
                Specs:
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="body2">
                {`${vehicle.passenger}-Passenger, ${vehicle.door}-Door`}
              </Typography>
            </Grid>

          </Grid>

          <Grid item container xs={2} md={3} lg={2} direction='column' alignItems='center' justifyContent='center'>
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
              sx={{ width: { xs: '100%', md: 'auto' } }}
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
