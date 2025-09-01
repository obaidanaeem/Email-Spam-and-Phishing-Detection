import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Paper, Typography, CircularProgress, Box } from "@mui/material";
import { motion } from "framer-motion";

const EmailClassifier = () => {
  const [emailText, setEmailText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const classifyEmail = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:5000/classify", {
        email_text: emailText,
      });
  
      console.log("API Response:", response.data); // Debugging output
      setResult(response.data);
    } catch (error) {
      console.error("Error classifying email:", error);
      setResult({ error: "Failed to connect to the server." });
    }
    setLoading(false);
  };
  

  return (
    <Paper sx={{ p: 3, bgcolor: "background.default", textAlign: "center" }}>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        <Typography variant="h5" color="primary" gutterBottom>
          Enter Email for Classification
        </Typography>
      </motion.div>

      <TextField
        label="Email Text"
        multiline
        rows={4}
        fullWidth
        variant="outlined"
        value={emailText}
        onChange={(e) => setEmailText(e.target.value)}
        sx={{ mt: 2, bgcolor: "background.paper", borderRadius: 1 }}
      />

      <Box mt={2}>
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={classifyEmail} 
            disabled={loading}
            sx={{ px: 4, py: 1.5, fontSize: "1rem", borderRadius: 2 }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Classify"}
          </Button>
        </motion.div>
      </Box>

      {result && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <Paper sx={{ mt: 4, p: 2, bgcolor: "background.paper", borderRadius: 2 }}>
            <Typography variant="h6">Classification Result:</Typography>
            <Typography variant="body1"><strong>Spam:</strong> {result.spam ? "Yes" : "No"}</Typography>
            <Typography variant="body1"><strong>Phishing:</strong> {result.phishing ? "Yes" : "No"}</Typography>
          </Paper>
        </motion.div>
      )}
    </Paper>
  );
};

export default EmailClassifier;
