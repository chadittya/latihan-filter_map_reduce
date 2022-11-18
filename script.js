//tugas:
// - ambil dan jumlahkan total video dengan tema javascript lanjutan
// - total durasi untuk video dengan tema javascript lanjutan

// step
// ambil semua element video
const videos = Array.from(document.querySelectorAll("[data-duration"));

// pilih yang JS lanjutan
let jsLanjutan = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

  // ambil durasi masing - masing video
  .map((dur) => dur.getAttribute("data-duration"))

  // ubah durasi dari string ke float, & ubah menitnya jadi detik
  .map((time) => {
    //10:30 dipecah jadi array [10,30] = split
    const parts = time.split(":").map((toInt) => parseFloat(toInt));
    return parts[0] * 60 + parts[1]; //ex : 10*60+30 = 630
  })

  // jumlahin semua detiknya
  .reduce((acc, cur) => acc + cur);

// ubah formatnya jadi jam:menit:detik
const jam = Math.floor(jsLanjutan / 3600);
//mengambil sisa detik dari pengambilan jam diatas
jsLanjutan = jsLanjutan - jam * 3600;
const menit = Math.floor(jsLanjutan / 60);
const detik = jsLanjutan - menit * 60;

// simpan di dom
const jmlvideo = (document.querySelector(".jumlah-video").innerHTML =
  videos.filter((video) => video.textContent.includes("JAVASCRIPT")).length +
  " Video");
const hasilDur = (document.querySelector(
  ".total-durasi"
).innerHTML = `${jam} jam, ${menit} Menit,${detik} Detik`);
