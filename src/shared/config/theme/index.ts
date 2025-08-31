const palette = {
  background: "#121212",
  surface: "#1E1E1E",
  primary: "#04547e",
  secondary: "#03DAC6",
  onPrimary: "#000000",
  onSecondary: "#000000",
  text: "#FFFFFF",
  textSecondary: "#B3B3B3",
  success: "#4CAF50",
  error: "#F44336",
  accentBlue: "#2962FF",
  // From button_stop_background.xml
  stopButton: "#bf5911",
};

const typography = {
  fontFamily: "Inter, sans-serif", // Note: The font needs to be loaded.
  headline: {
    fontSize: 24,
    fontWeight: "bold" as const,
  },
  title: {
    fontSize: 20,
    fontWeight: "600" as const, // semi-bold
  },
  body: {
    fontSize: 16,
    fontWeight: "normal" as const, // regular
  },
  caption: {
    fontSize: 12,
    fontWeight: "300" as const, // light
  },
};

const layout = {
  spacing: 16,
  borderRadius: 12,
};

export const theme = {
  palette,
  typography,
  layout,
};
