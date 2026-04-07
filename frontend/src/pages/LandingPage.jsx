import { Box, Button, Card, Container, Stack, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', display: 'grid', placeItems: 'center', px: 2 }}>
      <Container maxWidth="sm">
        <Stack spacing={4} alignItems="center">
          <Typography variant="h3" fontWeight={900} textAlign="center">
            My Courses
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center">
            Choose your role to get started
          </Typography>

          <Stack spacing={3} sx={{ width: '100%' }}>
            <Card
              sx={{
                p: 3,
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                },
              }}
              onClick={() => navigate('/faculty/login')}
            >
              <Stack spacing={2} alignItems="center">
                <SchoolIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                <Typography variant="h5" fontWeight={700}>
                  Faculty
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign="center">
                  Create and manage courses for your students
                </Typography>
                <Button variant="contained" fullWidth sx={{ mt: 1 }}>
                  Faculty Login
                </Button>
                <Button variant="text" fullWidth onClick={(e) => { e.stopPropagation(); navigate('/faculty/register'); }}>
                  Create Faculty Account
                </Button>
              </Stack>
            </Card>

            <Card
              sx={{
                p: 3,
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                },
              }}
              onClick={() => navigate('/student/login')}
            >
              <Stack spacing={2} alignItems="center">
                <PersonIcon sx={{ fontSize: 40, color: 'secondary.main' }} />
                <Typography variant="h5" fontWeight={700}>
                  Student
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign="center">
                  Enroll in courses and manage your academic schedule
                </Typography>
                <Button variant="contained" fullWidth sx={{ mt: 1 }}>
                  Student Login
                </Button>
                <Button variant="text" fullWidth onClick={(e) => { e.stopPropagation(); navigate('/student/register'); }}>
                  Create Student Account
                </Button>
              </Stack>
            </Card>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
