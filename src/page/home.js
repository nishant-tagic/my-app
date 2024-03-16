import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import CardHeader from '@mui/material/CardHeader';

import DataGridBasic from '../components/DataGrid';
import sample from '../__Mock/GridDummyData';

export default function Home() {
console.log(sample,"Home");
  return (
    <>
      <Container sx={{ my: 10 }}>
        <Stack spacing={5}>
          <Card>
            <CardHeader title="Basic" sx={{ mb: 2 }} />
            <Box sx={{ height: 390 }}>
              <DataGridBasic data={sample} />
            </Box>
          </Card>
        </Stack>
      </Container>
    </>
  );
}