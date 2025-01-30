//? Number Validation :--
let User_Number = document.querySelectorAll(".User_Number");

User_Number.forEach((number_field) => {
  number_field.addEventListener("input", () => {
    if (number_field.validity.patternMismatch) {
      number_field.setCustomValidity(
        "It seems the number is invalid, Your number must start with 9, 8, 7 or 6 and it must be 10 digits only."
      );
    } else {
      number_field.setCustomValidity("");
    }
  });
});

// === POPUP Calendly ====
const popupOpenBtns = document.querySelectorAll(".openModal");
const calendlyPopup = document.querySelector(".popUpCalendly");
const calendlyCloseBtn = document.querySelector(".close_calendly");

popupOpenBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    calendlyPopup.style.display = "flex";
  });
});

calendlyCloseBtn.addEventListener("click", () => {
  calendlyPopup.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  // DOM Elements
  const calendarDays = document.getElementById("popup_cal_calendar-days");
  const currentMonthDisplay = document.getElementById(
    "popup_cal_current-month"
  );
  const prevMonthBtn = document.getElementById("popup_cal_prev-month");
  const nextMonthBtn = document.getElementById("popup_cal_next-month");
  const selectedDateDisplay = document.querySelectorAll(
    ".popup_cal_selected-date"
  );
  const timeSlotContainer = document.querySelector(
    ".popup_cal_time-slots-section"
  );
  const timeDisplay = document.querySelector(".time_display");
  const calenderArea = document.querySelector(".popup_cal_right-panel");
  const nextBtns = document.querySelectorAll(".popup_cal_next-button");
  const modalForm = document.querySelector(".popupForm");
  const previousBtn = document.querySelector(".previous_btn_popup");
  const addGuestBtn = document.querySelector(".add_guest");
  const addGuestInput = document.getElementById("add_guestInput");
  const dateInput = document.querySelector(".selected_date_Input");
  const timeInput = document.querySelector(".selected_time_Input");
  const noTimeSlotDiv = document.querySelector(".no_slots_div");
  const timezoneSelect = document.querySelector(
    ".popup_cal_timezone-selector select"
  );

  // Initialize timezone selector
  timezoneSelect.innerHTML = `
        <!-- Asia -->
    <optgroup label="Asia">
        <option value="Asia/Kolkata">(GMT+05:30) India Standard Time (IST)</option>
        <option value="Asia/Dubai">(GMT+04:00) Gulf Standard Time (GST)</option>
        <option value="Asia/Singapore">(GMT+08:00) Singapore Time (SGT)</option>
        <option value="Asia/Tokyo">(GMT+09:00) Japan Standard Time (JST)</option>
        <option value="Asia/Shanghai">(GMT+08:00) China Standard Time (CST)</option>
        <option value="Asia/Hong_Kong">(GMT+08:00) Hong Kong Time (HKT)</option>
        <option value="Asia/Seoul">(GMT+09:00) Korea Standard Time (KST)</option>
        <option value="Asia/Bangkok">(GMT+07:00) Indochina Time (ICT)</option>
        <option value="Asia/Manila">(GMT+08:00) Philippine Time (PHT)</option>
        <option value="Asia/Jakarta">(GMT+07:00) Western Indonesian Time (WIB)</option>
        <option value="Asia/Karachi">(GMT+05:00) Pakistan Standard Time (PKT)</option>
        <option value="Asia/Dhaka">(GMT+06:00) Bangladesh Standard Time (BST)</option>
        <option value="Asia/Riyadh">(GMT+03:00) Arabia Standard Time (AST)</option>
        <option value="Asia/Tehran">(GMT+03:30) Iran Standard Time (IRST)</option>
    </optgroup>

    <!-- Europe -->
    <optgroup label="Europe">
        <option value="Europe/London">(GMT+00:00) British Standard Time (BST)</option>
        <option value="Europe/Paris">(GMT+01:00) Central European Time (CET)</option>
        <option value="Europe/Berlin">(GMT+01:00) Central European Time (CET)</option>
        <option value="Europe/Moscow">(GMT+03:00) Moscow Standard Time (MSK)</option>
        <option value="Europe/Rome">(GMT+01:00) Central European Time (CET)</option>
        <option value="Europe/Madrid">(GMT+01:00) Central European Time (CET)</option>
        <option value="Europe/Amsterdam">(GMT+01:00) Central European Time (CET)</option>
        <option value="Europe/Istanbul">(GMT+03:00) Turkey Time (TRT)</option>
    </optgroup>

    <!-- North America -->
    <optgroup label="North America">
        <option value="America/New_York">(GMT-05:00) Eastern Time (ET)</option>
        <option value="America/Chicago">(GMT-06:00) Central Time (CT)</option>
        <option value="America/Denver">(GMT-07:00) Mountain Time (MT)</option>
        <option value="America/Los_Angeles">(GMT-08:00) Pacific Time (PT)</option>
        <option value="America/Phoenix">(GMT-07:00) Mountain Standard Time (MST)</option>
        <option value="America/Toronto">(GMT-05:00) Eastern Time (ET)</option>
        <option value="America/Vancouver">(GMT-08:00) Pacific Time (PT)</option>
        <option value="America/Mexico_City">(GMT-06:00) Central Time (CT)</option>
    </optgroup>

    <!-- South America -->
    <optgroup label="South America">
        <option value="America/Sao_Paulo">(GMT-03:00) Brasilia Time (BRT)</option>
        <option value="America/Buenos_Aires">(GMT-03:00) Argentina Time (ART)</option>
        <option value="America/Lima">(GMT-05:00) Peru Time (PET)</option>
        <option value="America/Bogota">(GMT-05:00) Colombia Time (COT)</option>
        <option value="America/Caracas">(GMT-04:00) Venezuela Time (VET)</option>
    </optgroup>

    <!-- Australia & Pacific -->
    <optgroup label="Australia & Pacific">
        <option value="Australia/Sydney">(GMT+10:00) Australian Eastern Time (AET)</option>
        <option value="Australia/Melbourne">(GMT+10:00) Australian Eastern Time (AET)</option>
        <option value="Australia/Perth">(GMT+08:00) Australian Western Time (AWT)</option>
        <option value="Australia/Brisbane">(GMT+10:00) Australian Eastern Time (AET)</option>
        <option value="Pacific/Auckland">(GMT+12:00) New Zealand Standard Time (NZST)</option>
        <option value="Pacific/Fiji">(GMT+12:00) Fiji Time (FJT)</option>
    </optgroup>

    <!-- Africa -->
    <optgroup label="Africa">
        <option value="Africa/Cairo">(GMT+02:00) Eastern European Time (EET)</option>
        <option value="Africa/Johannesburg">(GMT+02:00) South African Standard Time (SAST)</option>
        <option value="Africa/Lagos">(GMT+01:00) West Africa Time (WAT)</option>
        <option value="Africa/Nairobi">(GMT+03:00) East Africa Time (EAT)</option>
        <option value="Africa/Casablanca">(GMT+00:00) Western European Time (WET)</option>
    </optgroup>

    <!-- Atlantic -->
    <optgroup label="Atlantic">
        <option value="Atlantic/Azores">(GMT-01:00) Azores Time (AZOT)</option>
        <option value="Atlantic/Cape_Verde">(GMT-01:00) Cape Verde Time (CVT)</option>
        <option value="Atlantic/Reykjavik">(GMT+00:00) Greenwich Mean Time (GMT)</option>
    </optgroup>
    `;

  // Calendar Variables
  const today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function generateDynamicTimeSlots(selectedDate) {
    const selectedTimezone = timezoneSelect.value;
    timeSlotContainer.innerHTML = "";

    dateInput.value = selectedDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });

    const now = new Date();
    const selected = new Date(selectedDate);
    const endTime = new Date(selected);
    endTime.setHours(19, 0, 0, 0); // End at 7:00 PM
    let startTime;

    // Determine if selected date is today
    const isToday =
      selected.getDate() === now.getDate() &&
      selected.getMonth() === now.getMonth() &&
      selected.getFullYear() === now.getFullYear();

    if (isToday && now >= endTime) {
      noTimeSlotDiv.style.display = "flex";
      timeSlotContainer.appendChild(noTimeSlotDiv);
      return;
    } else {
      noTimeSlotDiv.style.display = "none";
    }

    // Set start time based on date
    if (isToday) {
      startTime = new Date();
      startTime.setHours(11, 0, 0, 0); // Start at 11:00 AM

      if (now > startTime) {
        startTime = new Date(now);
        startTime.setMinutes(Math.ceil(startTime.getMinutes() / 30) * 30, 0, 0);
      }
    } else {
      startTime = new Date(selected);
      startTime.setHours(11, 0, 0, 0); // Start at 11:00 AM
    }

    // Convert times to selected timezone
    const tzStartTime = new Date(
      startTime.toLocaleString("en-US", { timeZone: selectedTimezone })
    );
    const tzEndTime = new Date(
      endTime.toLocaleString("en-US", { timeZone: selectedTimezone })
    );

    while (tzStartTime <= tzEndTime) {
      const timeString = tzStartTime.toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: selectedTimezone,
      });

      const buttonGroup = document.createElement("div");
      buttonGroup.classList.add("popup_cal_button-group");

      const timeSlotSelected = document.createElement("div");
      timeSlotSelected.classList.add(
        "popup_cal_time-slot-selected",
        "right_form_time_slot"
      );
      timeSlotSelected.textContent = timeString;

      const nextButton = document.createElement("button");
      nextButton.classList.add("popup_cal_next-button");
      nextButton.textContent = "Next";

      buttonGroup.appendChild(timeSlotSelected);
      buttonGroup.appendChild(nextButton);
      timeSlotContainer.appendChild(buttonGroup);

      tzStartTime.setMinutes(tzStartTime.getMinutes() + 30);
    }

    attachTimeSlotListeners();
  }

  function attachTimeSlotListeners() {
    const timeSelectedBtns = document.querySelectorAll(
      ".popup_cal_time-slot-selected"
    );
    const nextBtns = document.querySelectorAll(".popup_cal_next-button");

    timeSelectedBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        timeSelectedBtns.forEach((button) => button.classList.remove("active"));
        this.classList.add("active");
        timeDisplay.textContent = this.textContent;
        timeInput.value = this.textContent;
      });
    });

    nextBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        calenderArea.style.display = "none";
        modalForm.classList.add("active");
        previousBtn.style.display = "flex";
      });
    });
  }

  function renderCalendar() {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    currentMonthDisplay.textContent = `${months[currentMonth]} ${currentYear}`;
    calendarDays.innerHTML = "";

    // Handle previous month button disable state
    const currentMonthCheck = new Date();
    if (
      currentMonth === currentMonthCheck.getMonth() &&
      currentYear === currentMonthCheck.getFullYear()
    ) {
      prevMonthBtn.disabled = true;
      prevMonthBtn.classList.add("popup_cal_disabled");
    } else {
      prevMonthBtn.disabled = false;
      prevMonthBtn.classList.remove("popup_cal_disabled");
    }

    // Add empty slots for days before the first of the month
    for (let i = 0; i < (firstDayOfMonth + 6) % 7; i++) {
      const emptyDay = document.createElement("div");
      emptyDay.classList.add("popup_cal_day", "popup_cal_disabled");
      calendarDays.appendChild(emptyDay);
    }

    // Add the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayElement = document.createElement("div");
      dayElement.classList.add("popup_cal_day");
      dayElement.textContent = day;

      const currentDate = new Date(currentYear, currentMonth, day);
      const isBeforeToday = currentDate < new Date().setHours(0, 0, 0, 0);
      const isSunday = currentDate.getDay() === 0;

      if (isBeforeToday || isSunday) {
        dayElement.classList.add("popup_cal_disabled");
        if (isSunday) {
          dayElement.classList.add("popup_cal_sunday");
        }
      } else {
        dayElement.addEventListener("click", () => {
          document
            .querySelectorAll(".popup_cal_day.popup_cal_selected")
            .forEach((selectedDay) =>
              selectedDay.classList.remove("popup_cal_selected")
            );

          dayElement.classList.add("popup_cal_selected");
          const selectedDate = new Date(currentYear, currentMonth, day);

          selectedDateDisplay.forEach((display) => {
            display.textContent = selectedDate.toLocaleDateString("en-IN", {
              weekday: "long",
              month: "short",
              day: "numeric",
              year: "numeric",
            });
          });

          generateDynamicTimeSlots(selectedDate);
        });
      }

      if (
        day === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear() &&
        !isSunday
      ) {
        dayElement.classList.add("popup_cal_today", "popup_cal_selected");
        generateDynamicTimeSlots(today);
      }

      calendarDays.appendChild(dayElement);
    }
  }

  // Navigation event listeners
  prevMonthBtn.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar();
  });

  nextMonthBtn.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar();
  });

  // Add Guest button functionality
  addGuestBtn.addEventListener("click", () => {
    addGuestBtn.style.display = "none";
    addGuestInput.style.display = "flex";
  });

  // Previous button functionality
  previousBtn.addEventListener("click", () => {
    calenderArea.style.display = "flex";
    modalForm.classList.remove("active");
    previousBtn.style.display = "none";
  });

  // Timezone change handlers
  timezoneSelect.addEventListener("change", function () {
    const selectedDay = document.querySelector(
      ".popup_cal_day.popup_cal_selected"
    );
    if (selectedDay) {
      const selectedDate = new Date(
        currentYear,
        currentMonth,
        parseInt(selectedDay.textContent)
      );
      generateDynamicTimeSlots(selectedDate);
    }

    // Update timezone display in left panel
    const timezoneDisplay = document.querySelector(
      ".time_date_info:last-child"
    );
    const selectedOption = this.options[this.selectedIndex];
    timezoneDisplay.innerHTML = `
            <img src="images/planet-earth.webp" alt="" />
            ${selectedOption.text}
        `;
  });

  // Initialize calendar
  renderCalendar();
});

// Email handling functionality
const forms = [
  document.querySelector(".right_sticky_form"),
  document.querySelector(".popupForm"),
];

forms.forEach((form) => {
  if (!form) return;

  const emailInput = form.querySelector("#email-input");
  const emailContainer = form.querySelector("#email-container");

  if (!emailInput || !emailContainer) return;

  function handleEmailInput() {
    let email = emailInput.value.trim();
    email = email.replace(/[, ]$/, "");

    if (email) {
      if (validateEmail(email)) {
        addEmailChip(email, emailContainer);
        updateEmailInputValue(emailContainer, emailInput);
        emailInput.value = "";
      } else {
        showTooltip(emailInput, "Invalid email format!");
      }
    }
  }

  emailInput.addEventListener("keyup", function (event) {
    if (
      event.key === "Enter" ||
      event.key === "," ||
      event.key === " " ||
      emailInput.value.endsWith(",") ||
      emailInput.value.endsWith(" ")
    ) {
      handleEmailInput();
      event.preventDefault();
    }
  });

  emailInput.addEventListener("blur", handleEmailInput);

  emailContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("close-btn")) {
      const chip = event.target.parentElement;
      emailContainer.removeChild(chip);
    }
  });

  emailContainer.addEventListener(
    "blur",
    function (event) {
      if (event.target.classList.contains("email-chip")) {
        const email = event.target.textContent.replace("×", "").trim();
        if (validateEmail(email)) {
          event.target.innerHTML = `${email} <span class="close-btn">×</span>`;
          event.target.classList.remove("invalid-email");
        } else {
          emailContainer.removeChild(event.target);
        }
      }
    },
    true
  );

  emailContainer.addEventListener("keydown", function (event) {
    if (
      event.target.classList.contains("email-chip") &&
      event.key === "Enter"
    ) {
      event.target.blur();
      event.preventDefault();
    }
  });

  form.addEventListener("submit", function () {
    updateEmailInputValue(emailContainer, emailInput);
  });
});

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function addEmailChip(email, emailContainer) {
  const chip = document.createElement("div");
  chip.classList.add("email-chip");
  chip.setAttribute("contenteditable", "true");
  chip.innerHTML = `
        ${email}
        <span class="close-btn">×</span>
    `;
  emailContainer.prepend(chip);
}

function updateEmailInputValue(emailContainer, emailInput) {
  const chips = emailContainer.querySelectorAll(".email-chip");
  const emailList = Array.from(chips)
    .filter((chip) => validateEmail(chip.textContent.replace("×", "").trim()))
    .map((chip) => chip.textContent.replace("×", "").trim());

  emailInput.value = emailList.length > 0 ? emailList.join(", ") : "";
}

function showTooltip(inputElement, message) {
  const existingTooltip = inputElement.parentElement.querySelector(".tooltip");
  if (existingTooltip) existingTooltip.remove();

  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.textContent = message;

  inputElement.parentElement.appendChild(tooltip);
  tooltip.style.top = `${inputElement.offsetTop + inputElement.offsetHeight}px`;
  tooltip.style.left = `${inputElement.offsetLeft}px`;

  setTimeout(() => {
    if (tooltip.parentElement) tooltip.remove();
  }, 3000);
}
