import { useState } from 'react'
import { Container, Button, Grid } from '@mui/material'
import { FormOdpb } from './components/FormOdpb'

function App() {
  const [activeTab, setActiveTab] = useState('odpb')

  return (
    <Container maxWidth="md">
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={12}
          md={6}
        >
          <Button
            variant={activeTab === 'odpb' ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => setActiveTab('odpb')}
            fullWidth
            size="large"
          >
            ODPB
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
        >
          <Button
            variant={activeTab === 'light' ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => setActiveTab('light')}
            fullWidth
            disabled
            size="large"
          >
            LIGHT
          </Button>
        </Grid>

        <Grid
          item
          xs={12}
        >
          {activeTab === 'odpb' && <FormOdpb />}
        </Grid>

        {/* <Grid
          item
          xs={12}
        >
          <PDFViewer
            width="100%"
            height={1200}
          >
            <PrintPdf />
          </PDFViewer>
        </Grid> */}
      </Grid>
    </Container>
  )
}

export default App
