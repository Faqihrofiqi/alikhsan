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
import { Box, Grid } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

// Images
import family from "assets/images/family.JPG";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          {/* Kiri: Tulisan Sejarah (75%) */}
          <Grid item xs={12} lg={9}>
            <MKBox
              p={4}
              sx={{
                backgroundColor: "#f5f5f5",
                borderRadius: "lg",
                boxShadow: 1,
                height: "100%",
              }}
            >
              <MKTypography variant="h4" gutterBottom>
                Sejarah Kami
              </MKTypography>
              <>
                <MKTypography variant="body1" color="button">
                  Kurang lebih 5 km arah utara Kota Purwokerto, Kabupaten Banyumas, Provinsi Jawa
                  Tengah, terdapat sebuah pondok pesantren kecil bernama Al-Ikhsan. Kurang genap dua
                  tahun sejak berdirinya, pondok ini telah menyerap sejumlah santri. sehingga dari
                  pihak pengasuh berusaha menambah bangunan gedung untuk menampung para santri yang
                  saat ini berjejalan di dua kamar putra dan dua kamar putri –sementara masih
                  numpang di rumah family kyai.
                </MKTypography>

                <MKTypography variant="body1" color="button" mt={2}>
                  “Pada umumnya, kedatangan mereka karena selain ada madrasah diniyah, juga karena
                  adanya program pengembangan kecakapan bahasa Arab dan Inggris, yang disebut
                  program Arabic English Development Skills (AEDS),” ujar Kiai H. Abu Hamid. Hal ini
                  diamini oleh Syarif Hidayatullah, putra Kiai dan pengelola program dwibahasa yang
                  kini menjadi bahasa komunikasi wajib para santri.
                </MKTypography>

                <MKTypography variant="body1" color="button" mt={2}>
                  Sejak program AEDS tertib pada tahun ajaran 1987–1988, hingga 7 September 1987,
                  jumlah santri mukim mencapai 306 (87 putra, 19 putri, dan 200 santri kalong).
                  Sistem pendidikan memadukan sistem salaf (pengajian kitab kuning ala Lirboyo) dan
                  modern (bahasa Arab-Inggris ala Gontor).
                </MKTypography>

                <MKTypography variant="body1" color="button" mt={2}>
                  Pondok terletak di Desa Beji I, Kecamatan Kedungbanteng, Banyumas. Berdiri 1
                  Januari 1986, tiga bulan kemudian Yayasan Al-Ikhsan resmi berbadan hukum. Awalnya
                  Kiai Abu Hamid hanya menampung beberapa santri di rumah. Meski banyak cibiran,
                  niat beliau tetap lurus karena Allah.
                </MKTypography>

                <MKTypography variant="body1" color="button" mt={2}>
                  Saat Ramadhan 1906 H, 15 santri pertama datang untuk ikut kursus bahasa
                  Arab-Inggris (HTS). Pada ajaran baru 1986–1987 dibuka madrasah diniyah dan program
                  AEDS. Guru diambil dari alumnus Lirboyo dan Gontor.
                </MKTypography>

                <MKTypography variant="body1" color="button" mt={2}>
                  Tahun ajaran baru 1987/1988, santri semakin bertambah, bahkan dari luar
                  Purwokerto. Banyak santri adalah siswa atau mahasiswa di IAIN, UNSOED, dan kampus
                  lain. Mereka belajar agama, bahasa, dan kuliah dengan biaya yang relatif murah.
                </MKTypography>

                <MKTypography variant="h2" mt={4}>
                  Jadwal Harian Santri
                </MKTypography>

                <MKTypography variant="subtitle1" mt={2}>
                  Pondok Putra
                </MKTypography>
                <MKTypography variant="body1" color="button">
                  Diawali dengan qubailash-shubhi, lalu salat subuh berjamaah. Santri belajar AEDS
                  Bahasa Arab hingga jam 06.00, lalu makan, sekolah, hafalan, dan kegiatan lainnya
                  sampai malam.
                </MKTypography>

                <MKTypography variant="subtitle1" mt={2}>
                  Pondok Putri
                </MKTypography>
                <MKTypography variant="body1" color="button">
                  Tidak berbeda dengan putra, santri putri juga mengikuti kegiatan serupa, ditambah
                  pembelajaran keterampilan seperti tata boga dan tata busana.
                </MKTypography>

                <MKTypography variant="subtitle1" mt={2}>
                  Pondok Tahfizhul-Qur’an
                </MKTypography>
                <MKTypography variant="body1" color="button">
                  Fokus pada hafalan al-Qur’an, dimulai sejak dini hari hingga malam. Santri tahfizh
                  wajib menyetorkan hafalan setiap hari dan mengikuti muraja’ah berjamaah.
                </MKTypography>

                <MKTypography variant="h2" mt={4}>
                  Kegiatan Lain
                </MKTypography>
                <MKTypography variant="body1" color="button">
                  - Ziarah makam masyayikh, Yasinan, Tahlilan
                  <br />
                  - Maulid Nabi, Khitobahan
                  <br />
                  - Ekstrakurikuler hadroh, kepenulisan, sepak bola
                  <br />- Kajian kitab salaf, Drama bahasa, Nonton bareng
                </MKTypography>

                <MKTypography variant="h2" mt={4}>
                  Visi
                </MKTypography>
                <MKTypography variant="body1" color="button">
                  Membentuk manusia muslim yang berilmu, berbudi luhur, serta mandiri.
                </MKTypography>

                <MKTypography variant="h2" mt={4}>
                  Misi
                </MKTypography>
                <MKTypography variant="body1" color="button">
                  1. Mewujudkan manusia beriman dan bertanggung jawab
                  <br />
                  2. Mempersiapkan generasi unggul, menuju Al-Ikhsan Go Internasional
                  <br />
                  3. Melaksanakan pembelajaran dan bimbingan yang efektif
                </MKTypography>

                <MKTypography variant="h2" mt={4}>
                  Tujuan
                </MKTypography>
                <MKTypography variant="body1" color="button">
                  - Tujuan Makro: Mencetak insan islami yang siap menghadapi globalisasi
                  <br />- Tujuan Mikro: Mencetak kader muslim penerus perjuangan ulama
                </MKTypography>

                <MKTypography variant="h2" mt={4}>
                  Program Kerja
                </MKTypography>
                <MKTypography variant="body1" color="button">
                  - Pembinaan Iman dan Taqwa
                  <br />
                  - Program Dwi Bahasa
                  <br />
                  - Pengembangan Diri dan Minat
                  <br />
                  - Pembangunan Gedung
                  <br />- Pengadaan Lab Komputer dan Bahasa
                </MKTypography>

                <MKTypography variant="h2" mt={4}>
                  Struktur Kepengurusan
                </MKTypography>
                <MKTypography variant="body1" color="button">
                  Pengasuh: Ky. Achmad Shodiq Mukhtar Idris Al-Hafizd
                  <br />
                  Ustadz dan Ustadzah: Para santri senior dan mahasiswa yang ahli di bidangnya
                </MKTypography>
              </>
            </MKBox>
          </Grid>

          {/* Kanan: Gambar (25%) */}
          <Grid item xs={12} lg={3}>
            {/* Card pertama */}
            <Box sx={{ mb: 5, mt: 5, mx: { xs: 2, lg: 0 } }}>
              <CenteredBlogCard
                image={family}
                title="Get insights on Search"
                description="Website visitors today demand a frictionless user experience — especially when using search. Because of the high standards."
                action={{
                  type: "internal",
                  route: "pages/company/about-us",
                  color: "info",
                  label: "Find out more",
                }}
              />
            </Box>

            {/* Card kedua */}
            <Box sx={{ mx: { xs: 2, lg: 0 } }}>
              <CenteredBlogCard
                image={family}
                title="Get insights on Search"
                description="Website visitors today demand a frictionless user experience — especially when using search. Because of the high standards."
                action={{
                  type: "internal",
                  route: "pages/company/about-us",
                  color: "info",
                  label: "Find out more",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
