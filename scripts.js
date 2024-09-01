document.addEventListener("DOMContentLoaded", function () {
  const recordingLinks = document.querySelectorAll(".recordings-table a");
  const overlay = document.querySelector(".overlay");
  const popup = document.querySelector(".recording-popup");
  const iframe = popup.querySelector("iframe");
  const closeBtn = popup.querySelector(".close-btn");

  recordingLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const videoUrl = link.getAttribute("data-video");
      iframe.src = videoUrl;
      overlay.classList.add("visible");
      popup.classList.add("visible");
    });
  });

  closeBtn.addEventListener("click", function () {
    overlay.classList.remove("visible");
    popup.classList.remove("visible");
    iframe.src = ""; // Stop the video playback
  });

  overlay.addEventListener("click", function () {
    overlay.classList.remove("visible");
    popup.classList.remove("visible");
    iframe.src = ""; // Stop the video playback
  });

  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    });
  });
  function toggleDetails(eventId, isUpcoming) {
    var details = document.getElementById(eventId);
    var allDetails = document.querySelectorAll(".event-details");
    var defaultMessage = document.getElementById("defaultMessage");

    allDetails.forEach(function (detail) {
      detail.classList.remove("active");
    });

    if (isUpcoming && !details) {
      defaultMessage.classList.add("active");
    } else {
      defaultMessage.classList.remove("active");
      if (details) {
        details.classList.add("active");
      }
    }
  }

  // Automatically show the first upcoming event or the default message if no upcoming events are available
  document.addEventListener("DOMContentLoaded", function () {
    var upcomingEvents = document.querySelector("#upcomingEvents li");
    if (upcomingEvents) {
      toggleDetails(
        upcomingEvents.getAttribute("onclick").match(/'([^']+)'/)[1],
        true
      );
    } else {
      toggleDetails(null, true); // Show the default message if no upcoming events
    }
  });
});
