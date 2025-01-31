import { useState } from 'react'
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Tabs,
  Tab,
  Grid,
} from '@mui/material'
import { FormOdpb } from './components/FormOdpb'

function App() {
  const [activeTab, setActiveTab] = useState('odpb')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

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
      </Grid>
    </Container>
  )
}

export default App
