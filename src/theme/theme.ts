import { outlinedInputClasses } from '@mui/material'
import { createTheme } from '@mui/material/styles'

// 🎨 Define Global Theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF0000', // Default primary color
    },
    secondary: {
      main: '#333333', // Default secondary color
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h6: {
      fontWeight: 600, // Default style for h6
    },
  },
  components: {
    // Default styles for buttons
    MuiButton: {
      defaultProps: {
        variant: 'contained', // All buttons will be "contained" by default
        color: 'primary',
      },
      styleOverrides: {
        root: {
          textTransform: 'none', // Prevents uppercase text
          borderRadius: 8,
        },
      },
    },
    // Default styles for text fields
    MuiTextField: {
      defaultProps: {
        variant: 'outlined', // All text fields will be "outlined" by default
        fullWidth: true,
        size: 'small',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#FF0000',
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: '#FF0000',
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: '#FF0000',
          },
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {},
    },
    // Default styles for selects
    MuiSelect: {
      defaultProps: {
        fullWidth: true,
        size: 'small',
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
})

export default theme
