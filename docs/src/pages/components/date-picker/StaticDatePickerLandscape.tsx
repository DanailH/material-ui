import * as React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizaitonProvider from '@material-ui/lab/LocalizationProvider';
import StaticDatePicker from '@material-ui/lab/StaticDatePicker';

export default function StaticDatePickerLandscape() {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <LocalizaitonProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker<Date>
        orientation="landscape"
        openTo="day"
        value={value}
        shouldDisableDate={isWeekend}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} variant="standard" />}
      />
    </LocalizaitonProvider>
  );
}
