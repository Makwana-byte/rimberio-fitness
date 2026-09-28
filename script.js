document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });

  // 2. Interactive BMI Calculator
  const bmiForm = document.getElementById('bmiForm');
  const weightInput = document.getElementById('weight');
  const heightInput = document.getElementById('height');
  const bmiFeedback = document.getElementById('bmiFeedback');
  const bmiVal = document.getElementById('bmiVal');
  const bmiRec = document.getElementById('bmiRec');

  bmiForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const weight = parseFloat(weightInput.value);
    const heightInMeters = parseFloat(heightInput.value) / 100;

    if (weight > 0 && heightInMeters > 0) {
      const score = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      bmiVal.textContent = score;

      let category = '';
      let suggestion = '';

      if (score < 18.5) {
        category = 'Underweight';
        suggestion = 'Strength & Muscle Training program recommend kiya jata hai hypertrophy aur lean muscle mass ke liye.';
      } else if (score >= 18.5 && score <= 24.9) {
        category = 'Optimal / Fit Weight';
        suggestion = 'Badhiya fitness level! Apni body ko functional aur athletic conditioning ke zariye maintain karein.';
      } else if (score >= 25 && score <= 29.9) {
        category = 'Overweight';
        suggestion = 'Fat Loss & HIIT Program + Macro nutrition planning se fast body recomposition achieve hoga.';
      } else {
        category = 'High BMI';
        suggestion = '1-on-1 Personal Coaching recommend ki jaati hai safe aur progressive fat burning ke liye.';
      }

      bmiRec.innerHTML = `<strong>Category:</strong> ${category}<br><span style="color: #C77DFF;">${suggestion}</span>`;
      bmiFeedback.style.display = 'block';
    }
  });

  // 3. Free Trial Pass Form Handler (Slide 10 CTA)
  const leadForm = document.getElementById('leadForm');
  const formMsg = document.getElementById('formMsg');

  leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const memberName = document.getElementById('nameInput').value;
    const selectedGoal = document.getElementById('goalInput').value;

    formMsg.className = 'form-status-box active';
    formMsg.innerHTML = `🔥 Welcome to Rimberio, <strong>${memberName}</strong>! Aapka Free Trial Session <strong>${selectedGoal}</strong> ke liye confirm ho gaya hai. Hum aapko WhatsApp par schedule bhej rahe hain.`;

    leadForm.reset();

    setTimeout(() => {
      formMsg.style.display = 'none';
    }, 7000);
  });
});
