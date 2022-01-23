import { Alert, Snackbar } from "@mui/material"
import { useSnack } from "../../hooks";

export default function SnackLayout() {
  const { snack: {
    open, severity, message, vertical, horizontal, autoHideDuration
  }, closeSnack } = useSnack();

  return (
    <Snackbar
      open={open}
      anchorOrigin={{
        vertical: vertical ?? 'top',
        horizontal: horizontal ?? 'center'
      }}
      autoHideDuration={autoHideDuration ?? 6000}
      onClose={() => closeSnack()}
    >
      <Alert
        onClose={() => closeSnack()}
        severity={severity ?? 'info'}
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar >
  )
};
