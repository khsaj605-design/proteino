import * as THREE from "three";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/controls/OrbitControls.js";

/*
  متن پرسش‌ها از نسخه فعلی script.js و تصاویر ارسالی بازسازی شده است.
  چون بخشی از نوشته‌های عکس‌ها خوانا نبود، موارد نیازمند تأیید با [نیازمند بررسی] مشخص شده‌اند.
  برای تغییر متن فقط همین آرایه questions را ویرایش کنید.
*/
const questions = [
  {
    question: "چرا زیست شناسان؛ داروسازان، و بیوتکنولوژیست ها باید این مهارت ها را یاد بگیرند و دنیا به کدام سمت میرود؟",
    answer: "دنیای امروز بیوتکنولوژی، داروسازی و زیست شناسی به شدت به سمت زیست شناسی محاسباتی و هوش مصنوعی در حال حرکت است. روش های سنتی مطالعه پروتئین ها مانند کارهای آزمایشگاهی زمان بر و پرهزینه؛ به سرعت جای خود را به مدل سازی و شبیه سازی های دقیق کامپیوتری میدهند. ابزار های هوش مصنوعی مانند AlphaFold , RDdiffusion انقلابی در پیش بینی ساختار و طراحی پروتئین های جدید، مانند داروها و آنزیم ها، ایجاد کرده اند. یادگیری این مهارت ها به زیست شناسان کمک میکند تا در خط مقدم تحقیقات علمی قرار بگیرند، سرعت و دقت پژوهش های خود را چند برابر کنند و با نیازهای روز بازار کار جهانی همگام شوند."
  },
  {
    question: "این رویداد دقیقاً درباره چیست و چه موضوعی را آموزش می‌دهد؟",
    answer: "این رویداد بر طراحی و شبیه سازی پروتئین به کمک هوش مصنوعی، تمرکز دارد و شامل سرفصل های عملی و علمی نظیر مفاهیم یادگیری عمیق در بیوانفورماتیک ساختاری، پیش بینی ساختار با AlphaFold، طراحی پروتئین و پپتاید با Diffusion مدل ها، پیش بینی نقاط اتصال و داکینگ پروتئین-پروتئین با HADDOCK"
  },
  {
    question: "استادان و مدرسان این دوره چه کسانی هستند؟",
    answer: "مدرسان این رویداد آقایان فرحان دیسفانی (دانشجوی دکتری بیوفیزیک دانشگاه تربیت مدرس، پژوهشگر حوزه داکینگ پروتئینی و شبیه‌سازی مولکولی و دارنده مدال برنز المپیاد دانشجویی زیست‌شناسی کشور) و محمد اسدی‌زاده (کارشناسی ارشد بیوفیزیک دانشگاه تربیت مدرس و پژوهشگر زیست‌شناسی محاسباتی) هستند."
  },
  {
    question: "رویداد در چه تاریخ‌هایی و در چند جلسه برگزار می‌شود؟",
    answer: "این رویداد در ۸ جلسه، 10 صبح، و طی ۴ روز برگزار می‌شود. تاریخ‌های برگزاری شامل ۲۸ و ۲۹ آبان ماه و ۵ و ۶ آذر ماه است."
  },
  {
    question: "پیش‌نیاز شرکت در این رویداد چیست؟",
    answer: "تنها پیش‌نیاز این دوره، انگیزه و تلاش شما برای یادگیری و پیشرفت است."
  },
  {
    question: "آیا در طول دوره مثال‌های عملی کار می‌کنیم؟",
    answer: "بله، آموزش‌ها همراه با توضیح تئوری و مثال‌ها و پروژه های عملی واقعی ارائه می‌شوند تا مفاهیم به طور کامل کاربردی شوند."
  },
  {
    question: "آیا امکان پرسش و رفع اشکال با استادان وجود دارد؟",
    answer: "بله، امکان رفع اشکال با مدرسین هم در حین برگزاری کلاس و هم بعد از آن فراهم است."
  },
  {
    question: "آیا بعد از اتمام دوره به محتوای کلاس دسترسی خواهیم داشت؟",
    answer: "بله، شما دسترسی همیشگی به محتوای رویداد خواهید داشت."
  },
  {
    question: "آیا مدرک یا گواهی برای این دوره صادر می‌شود؟",
    answer: "بله، پس از اتمام دوره، گواهی انگلیسی از طرف انجمن زیست‌شناسی شبکه نخبگان ایران به شرکت‌کنندگان اعطا می‌شود."
  },
  {
    question: "چه فرصت‌های جانبی دیگری در این رویداد وجود دارد؟",
    answer: "امکان شبکه‌سازی حرفه‌ای و همچنین همکاری در پروژه‌های انجمن زیست‌شناسی شبکه نخبگان ایران و استادان در آینده برای افراد منتخب این دوره فراهم خواهد بود."
  },
  {
    question: "هزینه سرمایه‌گذاری علمی این رویداد چقدر است؟",
    answer: "هدف رویداد های شبکه نخبگان ایران توانمند سازی جامعه آکادمیک ایران هست، بنابراین هزینه رویداد ها در حداقل و پایین ترین حالت ممکن در نظر گرفته می‌شوند. هزینه سرمایه گذاری علمی برای دانشجویان ۵۹۰ هزارتومان و برای سایر علاقمندان ۷۹۰ هزارتومان می‌باشد."
  }
];

let currentQuestion = 0;
let scene, camera, renderer, controls, proteinGroup, animationFrame;
const threeContainer = document.getElementById("threeContainer");

function createProteinModel() {
  proteinGroup = new THREE.Group();

  const ribbonMaterial = new THREE.MeshStandardMaterial({
    color: 0x54e9df,
    metalness: 0.48,
    roughness: 0.25,
    emissive: 0x073d50,
    emissiveIntensity: 0.8
  });
  const accentMaterial = new THREE.MeshStandardMaterial({
    color: 0x4aaee8,
    metalness: 0.35,
    roughness: 0.3,
    emissive: 0x062d55,
    emissiveIntensity: 0.65
  });

  // چند مسیر پیچ‌خورده و متصل، یک نمایش هنری سه‌بعدی از زنجیره پروتئین می‌سازند.
  for (let strand = 0; strand < 4; strand++) {
    const points = [];
    const phase = strand * Math.PI / 2;
    for (let i = 0; i <= 90; i++) {
      const t = i / 90;
      const y = (t - 0.5) * 4.3;
      const radius = 0.72 + 0.26 * Math.sin(t * Math.PI * 3 + phase);
      const x = Math.cos(t * Math.PI * 3.4 + phase) * radius + Math.sin(t * 8 + phase) * 0.23;
      const z = Math.sin(t * Math.PI * 3.4 + phase) * radius + Math.cos(t * 7 + phase) * 0.2;
      points.push(new THREE.Vector3(x, y, z));
    }
    const curve = new THREE.CatmullRomCurve3(points);
    const geometry = new THREE.TubeGeometry(curve, 180, strand % 2 ? 0.075 : 0.095, 10, false);
    proteinGroup.add(new THREE.Mesh(geometry, strand % 2 ? accentMaterial : ribbonMaterial));
  }

  // گره‌های کوچک برای تأکید بر نقاط اتصال زنجیره
  const beadGeometry = new THREE.SphereGeometry(0.105, 16, 16);
  const beadMaterial = new THREE.MeshStandardMaterial({
    color: 0xa3fff5, emissive: 0x1aa9a6, emissiveIntensity: 0.8, roughness: 0.22
  });
  for (let i = 0; i < 34; i++) {
    const t = i / 34;
    const angle = t * Math.PI * 6.8;
    const bead = new THREE.Mesh(beadGeometry, beadMaterial);
    bead.position.set(Math.cos(angle) * 0.95, (t - 0.5) * 4.1, Math.sin(angle) * 0.95);
    proteinGroup.add(bead);
  }

  proteinGroup.rotation.z = 0.18;
  scene.add(proteinGroup);
}

function initThree() {
  if (!threeContainer) return;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
  camera.position.set(0, 0, 8.7);

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  threeContainer.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.045;
  controls.enablePan = false;
  controls.minDistance = 5.5;
  controls.maxDistance = 12;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.65;

  scene.add(new THREE.AmbientLight(0x9bdfea, 1.45));
  const keyLight = new THREE.PointLight(0x65fff0, 34, 18);
  keyLight.position.set(3, 3, 5);
  scene.add(keyLight);
  const blueLight = new THREE.PointLight(0x238bff, 24, 18);
  blueLight.position.set(-4, -2, -3);
  scene.add(blueLight);

  createProteinModel();
  resizeThree();
  window.addEventListener("resize", resizeThree);

  const clock = new THREE.Clock();
  function animate() {
    animationFrame = requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();
    if (proteinGroup) {
      proteinGroup.rotation.y += 0.0017;
      proteinGroup.rotation.x = Math.sin(elapsed * 0.28) * 0.08;
    }
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
}

function resizeThree() {
  if (!renderer || !camera || !threeContainer) return;
  const width = Math.max(1, threeContainer.clientWidth);
  const height = Math.max(1, threeContainer.clientHeight);
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

function showQuestion() {
  const item = questions[currentQuestion];
  document.getElementById("question").textContent = item.question;
  document.getElementById("answer").textContent = item.answer;

  const number = String(currentQuestion + 1).padStart(2, "0");
  document.getElementById("counter").textContent = `${number} / ${String(questions.length).padStart(2, "0")}`;
  document.getElementById("questionIndex").textContent = `STATION ${number}`;
  document.getElementById("visualNumber").textContent = number;

  document.getElementById("prevBtn").disabled = currentQuestion === 0;
  document.getElementById("nextBtn").disabled = currentQuestion === questions.length - 1;

  const card = document.getElementById("qaCard");
  card.style.animation = "none";
  requestAnimationFrame(() => { card.style.animation = ""; });
}

function openQuestion(index) {
  if (index < 0 || index >= questions.length) return;
  currentQuestion = index;
  document.getElementById("mapScreen").hidden = true;
  document.getElementById("detailScreen").hidden = false;
  showQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (controls) controls.autoRotate = false;
}

function backToMap() {
  document.getElementById("detailScreen").hidden = true;
  document.getElementById("mapScreen").hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (controls) controls.autoRotate = true;
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  }
}
function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
}
document.querySelectorAll(".station").forEach((station) => {
  station.addEventListener("click", () => openQuestion(Number(station.dataset.index)));
});
document.getElementById("backButton").addEventListener("click", backToMap);
document.getElementById("nextBtn").addEventListener("click", nextQuestion);
document.getElementById("prevBtn").addEventListener("click", previousQuestion);

initThree();
