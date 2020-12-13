import ToggleButton from '@material-ui/lab/ToggleButton'
import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const BccToggleButton = withStyles({
  root: {
    borderColor: '#00A755',
    '&:hover': {
      backgroundColor: '#00A755',
      '& span': {
        color: 'white',
      },
    },
    '&.Mui-selected': {
      backgroundColor: '#00A755',
      '&:hover': {
        backgroundColor: '#7DCEA0',
      },
      '& span': {
        color: 'white',
      },
    },
    '& span': {
      color: '#00A755',
    },
  },
})((props: any) => <ToggleButton disableFocusRipple disableRipple {...props} />)

export default BccToggleButton
