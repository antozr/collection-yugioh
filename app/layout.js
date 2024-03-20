
import "./globals.css";



export const metadata = {
  title: "My collection Yu-Gi-Oh",
  description: "This is an application to see your collection of cards Yu Gi Oh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
