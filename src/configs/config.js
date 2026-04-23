// Config loader - merges JSON config with environment variables
import configData from "./config_values.json";

// Helper to get env variable with fallback
const getEnv = (key, fallback) => {
  return import.meta.env[key] || fallback;
};

// Process config and replace placeholders with env values
const processConfig = (obj) => {
  if (typeof obj === "string") {
    // Check if it's an env variable placeholder
    if (obj.startsWith("VITE_")) {
      return getEnv(obj, obj);
    }
    return obj;
  }
  
  if (Array.isArray(obj)) {
    return obj.map(processConfig);
  }
  
  if (obj && typeof obj === "object") {
    const result = {};
    for (const key in obj) {
      result[key] = processConfig(obj[key]);
    }
    return result;
  }
  
  return obj;
};

const config = processConfig(configData);

export default config;