import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Button, Stack } from '@mui/material';
import iconMap from '../../../utils/iconMap';
import { Link } from 'react-router';
export default function CheckoutOption({option}) {
const Icon = iconMap[option.icon];
const ButtonIcon = iconMap[option.button.buttonIcon];

  return (
    <>
      <Card sx={{ minWidth: 275, bgcolor:"#c5c8bc"}}>
        <CardContent>
          <Avatar>
            {Icon && <Icon />}
          </Avatar>
          <Typography variant="h3" component="div">
            {option.title}
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
            {option.subTitle}
          </Typography>
          <List sx={{ width: '100%', maxWidth: 360 }}>
            {option.features.map((feature,idx) =>
              {
                const FeatureIcon = iconMap[feature.featureIcon];
                return(
                <ListItem key={idx}>
                  <ListItemAvatar>
                    <Avatar>
                      {FeatureIcon && <FeatureIcon />}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={
                    <Typography variant="body2">
                      {feature.featurePara}
                    </Typography>
                  } />
                </ListItem>
                );
             })}
          </List>
        </CardContent>
        <CardActions>
            <Button component={Link} to={option.navigateTo} size="small" sx={{bgcolor:"#516442", color: "#fff", p:2, borderRadius:3, width:"100%", mb:1}}>
              <Stack direction="row" spacing={4}>
                {option.button.name}
                {ButtonIcon && <ButtonIcon />}
              </Stack>
            </Button>
        </CardActions>
        <Typography variant="body2" sx={{textAlign:"center"}}>
          {option.para}
        </Typography>
      </Card>
    </>
  )
}
