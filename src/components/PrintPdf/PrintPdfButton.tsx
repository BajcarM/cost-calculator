import { Button } from '@mui/material'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { PrintPdf } from './PrintPdf'

export const PrintPdfButton = () => {
  return (
    <PDFDownloadLink
      document={<PrintPdf />}
      fileName="nabidka.pdf"
    >
      {/* @ts-ignore */}
      {({ loading }) => (
        <Button
          type="button"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          {loading ? 'Generování PDF...' : '📄 Stáhnout PDF'}
        </Button>
      )}
    </PDFDownloadLink>
  )
}
