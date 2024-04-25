import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/system';
import Switch from '@mui/material/Switch';


export default function Slider({ label, onHandle }) {

  return (
    <div className="m-2 p-2">
      <FormGroup>
        <FormControlLabel control={<Switch />} label={label} onChange={onHandle} />
      </FormGroup>
    </div>
  );
}
