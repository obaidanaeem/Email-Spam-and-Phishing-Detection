import React from "react";
import EmailClassifier from "./EmailClassifier";
import { Container, Typography, Paper, Box } from "@mui/material";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
      {/* Animated Header */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <Typography variant="h3" color="primary" fontWeight="bold" gutterBottom>
          AI-Powered Email Classifier
        </Typography>
        <Typography variant="h6" color="secondary">
          Detect Spam & Phishing Emails Instantly
        </Typography>
      </motion.div>

      {/* Card for Email Classifier */}
      <motion.div 
        initial={{ scale: 0.9 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.8 }}
      >
        <Paper elevation={6} sx={{ mt: 4, p: 4, bgcolor: "background.paper", borderRadius: 3 }}>
          <EmailClassifier />
        </Paper>
      </motion.div>

      {/* Footer */}
      <Box mt={5} color="text.secondary">
        <Typography variant="body2">© 2025 AI Email Classifier. All Rights Reserved.</Typography>
      </Box>
    </Container>
  );
};

export default LandingPage;
