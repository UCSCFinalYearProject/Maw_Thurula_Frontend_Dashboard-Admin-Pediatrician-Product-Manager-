import {
  Avatar,
  Box,
  Card,
  Icon,
  IconButton,
  MenuItem,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material';
import { Paragraph } from 'app/components/Typography';
import {Routes, Route, useNavigate} from 'react-router-dom';
//import ViewMessage from "./ViewMessage";
const CardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

const ProductTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: 'pre',
  '& small': {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
  },
  '& td': { borderBottom: 'none' },
  '& td:first-of-type': { paddingLeft: '16px !important' },
}));

const Small = styled('small')(({ bgcolor }) => ({
  width: 50,
  height: 15,
  color: '#fff',
  padding: '2px 8px',
  borderRadius: '4px',
  overflow: 'hidden',
  background: bgcolor,
  boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}));

const PediatricianDashboardTopSellingTable = () => {
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;
  const navigate = useNavigate();
  function ViewMessage() {
    //navigate('ViewMessage.jsx');
  }
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <CardHeader>
        <Title>Feedback comments-today</Title>
        <div>{date}</div>
      {  /*<Select size="small" defaultValue="this_month">
          <MenuItem value="this_month">This Month</MenuItem>
          <MenuItem value="last_month">Last Month</MenuItem>
        </Select>*/}
      </CardHeader>

      <Box overflow="auto">
        <ProductTable>
          <TableHead>
            <TableRow>
              <TableCell sx={{ px: 6 }} colSpan={4}>
                Email
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={3}>
                Post
              </TableCell>

              <TableCell sx={{ px: 0 }} colSpan={2}>
                comment
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={3}>
                Like
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Reply
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {productList.map((product, index) => (
              <TableRow key={index} hover onClick={ViewMessage}>
                <TableCell colSpan={4} sx={{ px: 0, textTransform: 'capitalize' }}>
                  <Box display="flex" alignItems="center">

                    <Paragraph sx={{ m: 0, ml: 4 }}>{product.name}</Paragraph>
                  </Box>
                </TableCell>
                <TableCell colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
                  {product.available}
                </TableCell>

                <TableCell colSpan={3} sx={{ px: 0, textTransform: 'capitalize' }}>
                  {product.comment}
                </TableCell>

                <TableCell sx={{ px: 0 }} align="left" colSpan={3}>
                  <IconButton>
                    <Icon color="primary">favorite_border</Icon>
                  </IconButton>
                </TableCell>

                <TableCell sx={{ px: 0 }} colSpan={3}>
                  <IconButton>
                    <Icon color="primary">sms</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ProductTable>
      </Box>
    </Card>
  );
};

const productList = [
  {

    name: 'maneesha@gmail.com',
    comment: 'Request names',
    available: 'Healthy family' ,
  },
  {

    name: 'amali@gmail.com',
    comment: 'Request names',
    available: 30,
  },
  {

    name: 'acd@gmail.com',
    comment: 'Request names',
    available: 35,
  },
  {

    name: 'sara@gmail.com',
    comment: 'Request names',
    available: 0,
  },
  {

    name: 'kane@gmail.com',
    comment: 'Request names',
    available: 5,
  },
];

export default PediatricianDashboardTopSellingTable;