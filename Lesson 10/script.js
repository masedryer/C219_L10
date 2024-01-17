$(document).ready(function () {
  // FullPage.js configuration
  $("#fullpage").fullpage({
    sectionsColor: ["aliceblue", "aliceblue", "aliceblue", "aliceblue"],
    navigation: true,
    navigationPosition: "right",
    afterLoad: function (origin, destination, direction) {
      // Apply fade-in animation to sections after load
      fadeInElements(".section-content");

      // Check if the destination is the section with animations
      if (destination.index === 0) {
        // Call countUpAnimation for each number when in the first section
        countUpAnimation("#cases", 0, 257510, 2000);
        countUpAnimation("#hospital", 0, 1365, 2000);
        countUpAnimation("#deaths", 0, 678, 2000);
      }
      if (destination.index === 1) {
        // Call the function to animate human icons when in the second section
        animateHumanIcons();
      }
    },
    onLeave: function (origin, destination, direction) {
      // Check if the user is leaving the section with location dots
      if (origin.index === 2) {
        // Call the function to animate location dots when leaving the section
        animateLocationDots();
      }
    },
  });

  // Initialize DataTable
  var sampleData = [
    {
      Name: "Bedok Polyclinic",
      Address:
        "11 Bedok North Street 1 Heartbeat@Bedok #02-01, #03-01, Singapore 469662",
      VaccineType: "Pfizer",
      Phone: "6343 1121",
    },
    {
      Name: "Bukit Batok Polyclinic",
      Address: "50 Bukit Batok West Avenue 3, Singapore 659164",
      VaccineType: "Moderna",
      Phone: "6343 1122",
    },
    {
      Name: "Bukit Merah Polyclinic",
      Address: "162 Bukit Merah Central Level 4, Singapore 150163",
      VaccineType: "Pfizer",
      Phone: "6343 1123",
    },
    {
      Name: "Choa Chu Kang Polyclinic",
      Address: "2 Teck Whye Crescent, Singapore 688846",
      VaccineType: "Moderna",
      Phone: "6343 1124",
    },
    {
      Name: "Clementi Polyclinic",
      Address: "451 Clementi Avenue 3, Singapore 120451",
      VaccineType: "Pfizer",
      Phone: "6343 1125",
    },
    {
      Name: "Geylang Polyclinic",
      Address: "21 Geylang East Central, Singapore 389707",
      VaccineType: "Pfizer",
      Phone: "6343 1126",
    },
    {
      Name: "Hougang Polyclinic",
      Address: "89 Hougang Avenue 4, Singapore 538829",
      VaccineType: "Pfizer",
      Phone: "6765 1121",
    },
    {
      Name: "Jurong Polyclinic",
      Address: "190 Jurong East Avenue 1, Singapore 609788",
      VaccineType: "Pfizer",
      Phone: "6765 1122",
    },
    {
      Name: "Marine Parade Polyclinic",
      Address: "80 Marine Parade Central, Singapore 440080",
      VaccineType: "Pfizer",
      Phone: "6765 1123",
    },
    {
      Name: "Outram Polyclinic",
      Address:
        "3 Second Hospital Avenue, #02-00 Health Promotion Board Building, Singapore 168937",
      VaccineType: "Comirnaty",
      Phone: "6765 1124",
    },
    {
      Name: "Pasir Ris Polyclinic",
      Address: "1 Pasir Ris Drive 4, Singapore 519457",
      VaccineType: "Comirnaty",
      Phone: "6765 1125",
    },
    {
      Name: "Pioneer Polyclinic",
      Address: "26 Jurong West Street 61, Singapore 648201",
      VaccineType: "Moderna",
      Phone: "6765 1126",
    },
  ];

  $("#vaccineCentres").DataTable({
    data: sampleData,
    columns: [
      { data: "Name" },
      { data: "Address" },
      { data: "VaccineType" },
      { data: "Phone" },
    ],
  });

  // Initialize Tippy
  tippy("#bbHotspot", {
    content:
      "Bukit Batok Polyclinic <br> 50 Bukit Batok West Avenue 3, Singapore 659164<br>Vaccine: Moderna <br> Phone: 6343 1122",
    allowHTML: true,
  });
  tippy("#bedokHotspot", {
    content:
      "Bedok Polyclinic <br> 11 Bedok North Street 1 Heartbeat@Bedok #02-01, #03-01, Singapore 469662 <br> Vaccine: Moderna<br>Phone: 6343 1122",
    allowHTML: true,
  });
  tippy("#bmHotspot", {
    content:
      "Bukit Merah Polyclinic<br>162 Bukit Merah Central Level 4, Singapore 150163<br>Vaccine: Moderna<br>Phone: 6343 1122",
    allowHTML: true,
  });

  tippy("#cckHotspot", {
    content:
      "Choa Chu Kang Polyclinic<br>50 Bukit Batok West Avenue 3, Singapore 659164<br>Vaccine: Moderna<br>Phone: 6343 1123",
    allowHTML: true,
  });
  tippy("#clHotspot", {
    content:
      "Clementi Polyclinic<br>50 Bukit Batok West Avenue 3, Singapore 659164<br>Vaccine: Moderna<br>Phone: 6343 1124",
    allowHTML: true,
  });
  tippy("#hgHotspot", {
    content:
      "Hougang Polyclinic<br>50 Bukit Batok West Avenue 3, Singapore 659164<br>Vaccine: Moderna<br>Phone: 6343 1125",
    allowHTML: true,
  });
  tippy("#jrgHotspot", {
    content:
      "Jurong Polyclinic<br>50 Bukit Batok West Avenue 3, Singapore 659164<br>Vaccine: Moderna<br>Phone: 6343 1126",
    allowHTML: true,
  });
  tippy("#mpHotspot", {
    content:
      "Marine Parade Polyclinic<br>50 Bukit Batok West Avenue 3, Singapore 659164<br>Vaccine: Moderna<br>Phone: 6343 1121",
    allowHTML: true,
  });
  tippy("#outHotspot", {
    content:
      "Outram Polyclinic<br>50 Bukit Batok West Avenue 3, Singapore 659164<br>Vaccine: Moderna<br>Phone: 6343 1122",
    allowHTML: true,
  });
  tippy("#prHotspot", {
    content:
      "Pasir Ris Polyclinic<br>50 Bukit Batok West Avenue 3, Singapore 659164<br>Vaccine: Moderna<br>Phone: 6343 1123",
    allowHTML: true,
  });
  tippy("#pioneerHotspot", {
    content:
      "Pioneer Polyclinic<br>50 Bukit Batok West Avenue 3, Singapore 659164<br>Vaccine: Moderna<br>Phone: 6343 1124",
    allowHTML: true,
  });
});

function fadeInElements(selector) {
  anime({
    targets: selector,
    opacity: [0, 1], // Fade in from 0 to 1
    easing: "easeInOutQuad", // Easing function
    duration: 1000, // Animation duration in milliseconds
    delay: anime.stagger(100), // Delay between animations for each element
  });
}
function countUpAnimation(target, startValue, endValue, duration) {
  anime({
    targets: target,
    textContent: [startValue, endValue],
    round: 1, // Round the numbers to integers
    easing: "easeInOutQuad",
    duration: duration,
  });
}

const age = anime({
  targets: "#cases",
  opacity: [0, 1],
  innerHTML: [0, 257510],
  round: 1,
  easing: "easeInOutQuad",
  duration: 1500,
});
const hospital = anime({
  targets: "#hospital",
  opacity: [0, 1],
  innerHTML: [0, 1365],
  round: 1,
  easing: "easeInOutQuad",
  duration: 1500,
});
const deaths = anime({
  targets: "#deaths",
  opacity: [0, 1],
  innerHTML: [0, 678],
  round: 1,
  easing: "easeInOutQuad",
  duration: 1500,
});

function animateHumanIcons() {
  anime({
    targets: ".human-icon",
    opacity: [0, 1],
    translateY: [100, 0], // Example translation, adjust as needed
    easing: "easeInOutQuad",
    duration: 1000,
    delay: anime.stagger(100),
  });
}

function animateLocationDots() {
  anime({
    targets: ".location-dot",
    opacity: [0, 1],
    translateY: [20, 0],
    easing: "easeInOutQuad",
    duration: 1000,
    delay: anime.stagger(100),
  });
}

// Apply fade-in animation to sections
fadeInElements(".section-content");

// Apply fade-in animation to left-side and right-side columns
fadeInElements(".left-side, .right-side");

// Apply fade-in animation to icon container
fadeInElements(".icon-container");

// Apply fade-in animation to table
fadeInElements("#vaccineCentres tbody tr");
