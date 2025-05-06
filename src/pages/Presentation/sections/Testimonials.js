/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
import pondoklogo from "assets/images/logos/logo PPAI HD.png";
import logo from "assets/images/logos/logo_1-nobg.png";
import logoPondok from "assets/images/logos/logo pondok.png";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Trusted by over</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            1,679,477+ People in world
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Many Fortune 500 companies, startups, universities and governmental institutions love
            Creative Tim&apos;s products.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Faqih Rofiqi"
              date="1 day ago"
              review="This is an excellent Ma'had, the Ma'had is excellent and helped me to build my family be a good."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Shailesh Kushwaha"
              date="1 week ago"
              review="I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Samuel Kamuli"
              date="3 weeks ago"
              review="Great product. Helped me cut the time to set up a site. I used the components within instead of starting from scratch. I highly recommend for developers who want to spend more time on the backend!."
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Grid
          container
          spacing={3}
          justifyContent="center"
          wrap="nowrap"
          sx={{
            overflowX: "auto",
            scrollbarWidth: "none", // hilangkan scrollbar di Firefox
            "&::-webkit-scrollbar": { display: "none" }, // hilangkan scrollbar di Chrome
          }}
        >
          {[pondoklogo, logo, logoPondok, pondoklogo, pondoklogo].map((src, index) => (
            <Grid
              item
              key={index}
              sx={{
                flexShrink: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MKBox
                component="img"
                src={src}
                alt={`Logo ${index}`}
                sx={{
                  width: "clamp(60px, 15vw, 120px)",
                  opacity: 0.5,
                  filter: "grayscale(100%) contrast(100%)",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
