import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
);

export default function PediatricianDashboardWritePostCard() {
  return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
            <Typography variant="body2">
               You have 3 new followers today!
                <br />
                {/*{'"a benevolent smile"'}*/}
            </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          2022/09/09
          </Typography>
          <Typography variant="h5" component="div" sx={{ fontSize: 20 }}>
              Start a new article for more followers
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {/*adjective*/}
          </Typography>
            <CardActions>
                <Link to="/pt/PediatricianWriteArticles" className="link">
                    <Button variant="contained">Start Article</Button>
                </Link>

            </CardActions>
        </CardContent>

      </Card>
  );
}
