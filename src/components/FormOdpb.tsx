import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
import { PrintPdf } from './PrintPdf/PrintPdf'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { PrintPdfButton } from './PrintPdf/PrintPdfButton'

export type FormShape = {
  jmeno: string
  prijmeni: string
  fasada: number
  strecha: number
  puda: number
  podlaha: number
  sklep: number
  dvere: number
  okna: number
  stineni: number
  solary: string
  vytapeni: string
  rekuperaceVody: string
  rekuperaceVzduchu: string
  rekuperaceVzduchuMnozstvi: number
  destovka: string
  nabijeciStanice: string
  nabijeciStaniceMnozstvi: number
  kombinacni: number
  deti: number
  obec: number
  dotaceOblastA: number
  dotaceOblastC: number
  dotaceOblastD: number
  dotace: number
  rozpocet: number
  doplatek: number
}

export type FormOdpbProps = {}

export const FormOdpb = () => {
  const [formData, setFormData] = useState<FormShape>({
    jmeno: '',
    prijmeni: '',
    fasada: 0,
    strecha: 0,
    puda: 0,
    podlaha: 0,
    sklep: 0,
    dvere: 0,
    okna: 0,
    stineni: 0,
    solary: 'false',
    vytapeni: 'false',
    rekuperaceVody: 'false',
    rekuperaceVzduchu: 'false',
    rekuperaceVzduchuMnozstvi: 0,
    destovka: 'false',
    nabijeciStanice: 'false',
    nabijeciStaniceMnozstvi: 0,
    kombinacni: 0,
    deti: 0,
    obec: 0,
    dotaceOblastA: 0,
    dotaceOblastC: 0,
    dotaceOblastD: 0,
    dotace: 0,
    rozpocet: 0,
    doplatek: 0,
  })

  // Calculated fields
  // const [dotaceOblastC, setDotaceOblastC] = useState(0)
  // const [dotaceOblastD, setDotaceOblastD] = useState(0)
  // const [dotace, setDotace] = useState(0)

  // Update calculations when relevant fields change
  // useEffect(() => {
  //   const newDotace =
  //     Number(formData.oblastC) * 0.2 + Number(formData.oblastD) * 0.3
  //   const newDoplatek =
  //     Number(formData.oblastC) + Number(formData.oblastD) - newDotace
  //   setDotace(newDotace)
  //   setDoplatek(newDoplatek)
  // }, [formData.oblastC, formData.oblastD])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target
    if (!name) return
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form>
      {/* Name Fields */}
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={6}
        >
          <TextField
            label="Jméno klienta"
            name="jmeno"
            value={formData.jmeno}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        <Grid
          item
          xs={6}
        >
          <TextField
            label="Příjmení klienta"
            name="prijmeni"
            value={formData.prijmeni}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
      </Grid>

      {/* Oblast A */}

      <Typography
        variant="h4"
        textAlign="center"
        sx={{ mt: 2 }}
      >
        Oblast A
      </Typography>
      <Typography
        variant="h5"
        sx={{ mt: 2, mb: 2 }}
      >
        Zateplení
      </Typography>

      <Grid
        container
        columns={{
          xs: 4,
          md: 10,
        }}
        spacing={2}
      >
        <Grid
          item
          xs={2}
        >
          <TextField
            label="Fasáda"
            name="fasada"
            type="number"
            value={formData.fasada}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        <Grid
          item
          xs={2}
        >
          <TextField
            label="Střecha"
            name="strecha"
            type="number"
            value={formData.strecha}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        <Grid
          item
          xs={2}
        >
          <TextField
            label="Půda"
            name="puda"
            type="number"
            value={formData.puda}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        <Grid
          item
          xs={2}
        >
          <TextField
            label="Podlaha"
            name="podlaha"
            type="number"
            value={formData.podlaha}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        <Grid
          item
          xs={2}
        >
          <TextField
            label="Sklep"
            name="sklep"
            type="number"
            value={formData.sklep}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
      </Grid>

      <Typography
        variant="h5"
        sx={{ mt: 2, mb: 2 }}
      >
        Výplň otvorů
      </Typography>

      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={12}
          md={4}
        >
          <TextField
            label="Dveře"
            name="dvere"
            type="number"
            value={formData.dvere}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
        >
          <TextField
            label="Okna"
            name="okna"
            type="number"
            value={formData.okna}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
        >
          <TextField
            label="Stínění"
            name="stineni"
            type="number"
            value={formData.stineni}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        <Grid
          item
          xs={12}
        >
          <Typography
            variant="body1"
            fontSize={20}
            sx={{ mt: 2 }}
          >
            Dotace: <strong>{formData.dotaceOblastA.toFixed(2)} CZK</strong>
          </Typography>
        </Grid>
      </Grid>

      {/* Oblast C */}
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ mt: 2 }}
      >
        Oblast C
      </Typography>

      <Typography
        variant="h5"
        sx={{ mt: 2, mb: 2 }}
      >
        Technologie:
      </Typography>

      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={9}
          md={10}
        >
          <Select
            fullWidth
            name="solary"
            value={formData.solary}
            onChange={handleSelectChange}
          >
            <MenuItem value="true">Ano</MenuItem>
            <MenuItem value="false">Ne</MenuItem>
          </Select>
        </Grid>

        <Grid
          item
          xs={9}
          md={10}
        >
          <Select
            fullWidth
            name="vytapeni"
            value={formData.vytapeni}
            onChange={handleSelectChange}
          >
            <MenuItem value="true">Ano</MenuItem>
            <MenuItem value="false">Ne</MenuItem>
          </Select>
        </Grid>

        <Grid
          item
          xs={9}
          md={10}
        >
          <Select
            fullWidth
            name="rekuperaceVody"
            value={formData.rekuperaceVody}
            onChange={handleSelectChange}
          >
            <MenuItem value="true">Ano</MenuItem>
            <MenuItem value="false">Ne</MenuItem>
          </Select>
        </Grid>

        <Grid
          item
          xs={9}
          md={10}
        >
          <Select
            fullWidth
            name="rekuperaceVzduchu"
            value={formData.rekuperaceVzduchu}
            onChange={handleSelectChange}
          >
            <MenuItem value="true">Ano</MenuItem>
            <MenuItem value="false">Ne</MenuItem>
          </Select>
        </Grid>

        <Grid
          item
          xs={3}
          md={2}
        >
          <TextField
            name="rekuperaceVzduchuMnozstvi"
            type="number"
            value={formData.rekuperaceVzduchuMnozstvi}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        <Grid
          item
          xs={12}
        >
          <Typography
            variant="body1"
            fontSize={20}
            sx={{ mt: 2 }}
          >
            Dotace: <strong>{formData.dotaceOblastC.toFixed(2)} CZK</strong>
          </Typography>
        </Grid>
      </Grid>

      {/* Oblast D */}

      <Typography
        variant="h4"
        textAlign="center"
        sx={{ mt: 2, mb: 2 }}
      >
        Oblast D
      </Typography>

      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={9}
          md={10}
        >
          <Select
            fullWidth
            name="destovka"
            value={formData.destovka}
            onChange={handleSelectChange}
          >
            <MenuItem value="true">Ano</MenuItem>
            <MenuItem value="false">Ne</MenuItem>
          </Select>
        </Grid>

        <Grid
          item
          xs={9}
          md={10}
        >
          <Select
            fullWidth
            name="nabijeciStanice"
            value={formData.nabijeciStanice}
            onChange={handleSelectChange}
          >
            <MenuItem value="true">Ano</MenuItem>
            <MenuItem value="false">Ne</MenuItem>
          </Select>
        </Grid>

        <Grid
          item
          xs={3}
          md={2}
        >
          <TextField
            name="nabijeciStaniceMnozstvi"
            type="number"
            value={formData.nabijeciStaniceMnozstvi}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        <Grid
          item
          xs={12}
        >
          <Typography
            variant="body1"
            fontSize={20}
            sx={{ mt: 2 }}
          >
            Dotace: <strong>{formData.dotaceOblastD.toFixed(2)} CZK</strong>
          </Typography>
        </Grid>
      </Grid>

      {/* Bonusy */}
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ mt: 2 }}
      >
        Bonusy
      </Typography>

      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={4}
        >
          <TextField
            label="Kombinační"
            name="kombinacni"
            type="number"
            value={formData.kombinacni}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </Grid>

        <Grid
          item
          xs={4}
        >
          <TextField
            label="Děti"
            name="deti"
            type="number"
            value={formData.deti}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </Grid>

        <Grid
          item
          xs={4}
        >
          <TextField
            label="Obec"
            name="obec"
            type="number"
            value={formData.obec}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </Grid>

        <Grid
          item
          xs={4}
        >
          <TextField
            label="Dotace"
            name="dotace"
            type="number"
            value={formData.dotace}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </Grid>

        <Grid
          item
          xs={4}
        >
          <TextField
            label="Rozpočet"
            name="rozpocet"
            type="number"
            value={formData.rozpocet}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </Grid>

        <Grid
          item
          xs={4}
        >
          <TextField
            label="Doplatek"
            name="doplatek"
            type="number"
            value={formData.doplatek}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </Grid>

        <Grid
          item
          xs={12}
        >
          <PrintPdfButton />
        </Grid>
      </Grid>
    </form>
  )
}
