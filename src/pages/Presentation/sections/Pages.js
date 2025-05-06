import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

import ExampleCard from "pages/Presentation/components/ExampleCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Mengimpor galeri dan prestasi
import { galeri, prestasi } from "pages/Presentation/sections/data/pagesData";

// Fungsi membagi array jadi kelompok 10
function chunkArray(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

// Komponen SwiperGallery untuk menampilkan galeri dengan Swiper
function SwiperGallery({ data, chunkSize }) {
  const chunkedData = chunkArray(data, chunkSize);

  return chunkedData.map((group, index) => (
    <MKBox key={index} sx={{ mb: 8 }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          960: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
      >
        {group.map(({ image, name, route }) => (
          <SwiperSlide key={name}>
            <Link to={route}>
              <ExampleCard
                image={image}
                name={name}
                display="grid"
                minHeight="auto"
                onError={(e) => (e.target.src = "https://placehold.co/600x300/png")}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </MKBox>
  ));
}

function Pages() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="boost creativity"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h2" fontWeight="bold">
            MEDIA SANTRI
          </MKTypography>
          <MKTypography variant="body1" color="text">
            The easiest way to get started is to use one of our
            <br /> pre-built example pages.
          </MKTypography>
        </Grid>
      </Container>

      <Container sx={{ mt: { xs: 8, lg: 16 } }}>
        <Grid container spacing={6}>
          <Grid item xs={12} lg={9}>
            {/* Gunakan prestasi langsung, tanpa data */}
            <SwiperGallery data={galeri} chunkSize={10} />
          </Grid>

          <Grid item xs={12} lg={3}>
            <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
              <MKTypography variant="h3" fontWeight="bold" mb={1}>
                Galeri Santri
              </MKTypography>
              <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
                These is just a small selection of the multiple possibilities you have. Focus on the
                business, not on the design.
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ mt: { xs: 8, lg: 16 } }}>
        <Grid container spacing={6}>
          <Grid item xs={12} lg={9}>
            {/* Mengganti SwiperGallery dengan Grid biasa */}
            <Grid container spacing={3}>
              {prestasi.map(({ image, name, route }) => (
                <Grid item xs={12} sm={6} md={4} key={name}>
                  <Link to={route}>
                    <ExampleCard
                      image={image}
                      name={name}
                      display="grid"
                      minHeight="auto"
                      onError={(e) => (e.target.src = "https://placehold.co/600x400/png")} // Set placeholder on error
                    />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} lg={3}>
            <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
              <MKTypography variant="h3" fontWeight="bold" mb={1}>
                Prestasi Santri
              </MKTypography>
              <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
                These is just a small selection of the multiple possibilities you have. Focus on the
                business, not on the design.
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Pages;
