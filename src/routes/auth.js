router.get('/check', authenticateToken, async (req, res) => {
  try {
    // User is already authenticated through the middleware
    const user = {
      id: req.user.id,
      email: req.user.email,
      name: req.user.name
    };
    res.json({ user });
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
}); 