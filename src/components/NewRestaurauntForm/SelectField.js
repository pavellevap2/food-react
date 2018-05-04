import React from 'react'
import { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { FormControl } from 'material-ui/Form'
import Select from 'material-ui/Select'
import { withStyles } from 'material-ui'

const styles = theme => ({
  formControl: {
    width: '90%',
  },
})

const SelectField = ({
  data,
  selectValue,
  selectName,
  classes,
  onChange,
  value,
}) => (
  <FormControl className={classes.formControl}>
    <InputLabel htmlFor="age-simple">{selectName}</InputLabel>
    <Select value={value} onChange={e => onChange(e)}>
      {data.map((item, i) => (
        <MenuItem key={i} value={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
)

export default withStyles(styles)(SelectField)
