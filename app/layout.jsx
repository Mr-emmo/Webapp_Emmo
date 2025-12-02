import "./globals.css";

export const metadata = {
  title: "EMMO AI Travel Robot",
  description: "Modern landing page for an AI-powered travel assistant robot."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
