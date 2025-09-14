import './InfoBox.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function InfoBox({ info }) {
    if (!info) return null;

    return (
        <div className='InfoBox'>
            <h3>Weather Information for {info.cityName}</h3>

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="/world map.png"
                    alt="Weather image"
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.weather}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <strong>Temperature:</strong> {info.temp}°C<br />
                        <strong>Feels Like:</strong> {info.feelsLike}°C<br />
                        <strong>Min Temp:</strong> {info.minTemp}°C<br />
                        <strong>Max Temp:</strong> {info.maxTemp}°C<br />
                        <strong>Humidity:</strong> {info.humidity}%
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
}
