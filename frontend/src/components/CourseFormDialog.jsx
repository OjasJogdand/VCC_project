import { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';

const initialState = {
  title: '',
  details: '',
  semester: '',
  enrollStatus: 'Open',
};

export default function CourseFormDialog({ open, onClose, onSave, course }) {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (course) {
      setForm({
        title: course.title || '',
        details: course.details || '',
        semester: course.semester || '',
        enrollStatus: course.enrollStatus || 'Open',
      });
    } else {
      setForm(initialState);
    }
  }, [course, open]);

  function handleSubmit(event) {
    event.preventDefault();
    onSave(form);
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{course ? 'Edit course' : 'Create course'}</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              label="Title"
              value={form.title}
              onChange={(event) => setForm({ ...form, title: event.target.value })}
              fullWidth
              required
            />
            <TextField
              label="Details"
              value={form.details}
              onChange={(event) => setForm({ ...form, details: event.target.value })}
              fullWidth
              multiline
              minRows={3}
              required
            />
            <TextField
              label="Semester"
              value={form.semester}
              onChange={(event) => setForm({ ...form, semester: event.target.value })}
              fullWidth
              required
            />
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                label="Status"
                value={form.enrollStatus}
                onChange={(event) => setForm({ ...form, enrollStatus: event.target.value })}
              >
                <MenuItem value="Open">Open</MenuItem>
                <MenuItem value="Closed">Closed</MenuItem>
                <MenuItem value="Waitlist">Waitlist</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
