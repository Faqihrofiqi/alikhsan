import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";

// Material Kit 2 React routes
import routes from "routes";
import SignInBasic from "pages/LandingPages/SignIn";
import { Helmet } from "react-helmet";

export default function App() {
  <Helmet>
    <title>Pondok Pesantren Al Ikhsan</title>
    <meta
      name="description"
      content="Website resmi Pondok Pesantren Al Ikhsan untuk menyediakan pendidikan agama berkualitas."
    />
  </Helmet>;
  const { pathname } = useLocation();

  // Mengatur scroll ke atas saat berpindah rute
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  // Fungsi untuk mendapatkan semua route secara rekursif
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse); // Jika ada nested routes, panggil getRoutes secara rekursif
      }

      if (route.route) {
        return (
          <Route
            path={route.route}
            element={route.component} // Render komponen yang sesuai
            key={route.key} // Berikan key untuk setiap route
          />
        );
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)} {/* Render semua route yang ada di routes */}
        <Route path="/presentation" element={<Presentation />} />{" "}
        {/* Rute tambahan untuk halaman presentasi */}
        <Route path="*" element={<Navigate to="/presentation" />} />{" "}
        {/* Redirect ke /presentation jika route tidak ditemukan */}
        <Route path="/SignIn" element={<SignInBasic />} />{" "}
      </Routes>
    </ThemeProvider>
  );
}
