import { useState } from 'react';
import { Alert, Box, Button, Divider, Paper, Stack, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { useAuth } from '../context/AuthContext';

export default function FacultyLoginPage() {
  const { login, googleLogin } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(username, password);
      navigate('/faculty/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setError('');
      setLoading(true);
      try {
        await googleLogin(tokenResponse.access_token, 'faculty');
        navigate('/faculty/dashboard');
      } catch (err) {
        setError(err.response?.data?.message || 'Google sign-in failed');
      } finally {
        setLoading(false);
      }
    },
    onError: () => setError('Google sign-in was cancelled or failed'),
  });

  return (
    <Box sx={{ minHeight: '100vh', display: 'grid', placeItems: 'center', px: 2 }}>
      <Paper elevation={10} sx={{ width: '100%', maxWidth: 440, p: 4 }}>
        <Stack spacing={2} component="form" onSubmit={handleSubmit}>
          <Typography variant="h4">Faculty Portal</Typography>
          <Typography color="text.secondary">Sign in to manage your courses.</Typography>
          {error ? <Alert severity="error">{error}</Alert> : null}
          <TextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} required fullWidth />
          <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required fullWidth />
          <Button type="submit" variant="contained" size="large" disabled={loading}>
            {loading ? 'Signing in...' : 'Login'}
          </Button>
          <Divider>or</Divider>
          <Button
            variant="outlined"
            size="large"
            disabled={loading}
            onClick={() => handleGoogleLogin()}
            startIcon={
              <svg width="18" height="18" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.14 0 5.95 1.08 8.17 2.85l6.09-6.09C34.46 3.19 29.56 1 24 1 14.82 1 7.07 6.48 3.64 14.22l7.08 5.5C12.43 13.88 17.77 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.52 24.5c0-1.64-.15-3.22-.42-4.75H24v9h12.67c-.55 2.97-2.2 5.48-4.68 7.17l7.19 5.59C43.44 37.42 46.52 31.4 46.52 24.5z"/>
                <path fill="#FBBC05" d="M10.72 28.28A14.6 14.6 0 0 1 9.5 24c0-1.49.26-2.93.72-4.28L3.14 14.22A23.94 23.94 0 0 0 0 24c0 3.82.9 7.44 2.5 10.64l8.22-6.36z"/>
                <path fill="#34A853" d="M24 47c5.56 0 10.22-1.84 13.63-5.01l-7.19-5.59C28.72 37.7 26.45 38.5 24 38.5c-6.23 0-11.57-4.38-13.28-10.22l-8.22 6.36C6.07 42.28 14.44 47 24 47z"/>
              </svg>
            }
          >
            Continue with Google
          </Button>
          <Typography variant="body2">
            No account yet? <Link to="/faculty/register">Create one</Link>
          </Typography>
          <Typography variant="body2">
            <Link to="/">Back</Link>
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
}
