"use strict";

///////////////////////////////////////////////////////////////
// Variables
const modalDummy = document.querySelector(".modal-dummy");
const modalDummyCancelBtn = document.querySelector(".modal-dummy__cancel");
const backdrop = document.querySelector(".backdrop");
const cardBtn = document.querySelectorAll(".card__btn");
const modalEnrolment = document.querySelector(".modal-enrolment");
const modalNotice = document.querySelector(".modal-notice");
const modalEnrolmentCancelBtn = document.querySelector(
  ".modal-enrolment__cancel"
);
const modalNoticeAcceptBtn = document.querySelector(".btn-accept");
const enrolAcademyBtn = document.querySelector(".enrol-now__btn");
const nav = document.querySelector(".section-navigation");
const menuBarBtn = document.querySelector(".mobile-nav__menu-bar");
const menuIcons = document.querySelectorAll(".mobile-nav__menu-icon");

///////////////////////////////////////////////////////////
// Functions
function hideNotice() {
  modalNotice.classList.add("invisible");
}

function showNav() {
  showBackdrop();
  if (nav.classList.contains("visible")) {
    nav.classList.remove("visible");

    for (const icon of menuIcons) {
      icon.classList.remove("cancel");
    }

    hideBackdrop();
  } else {
    nav.classList.add("visible");

    for (const icon of menuIcons) {
      icon.classList.add("cancel");
    }
  }
}

function iconCancel() {
  for (const icon of menuIcons) {
    icon.classList.remove("cancel");
  }
}

function hideNav() {
  nav.classList.remove("visible");
  iconCancel();
}

function showModalDummy() {
  modalDummy.classList.add("visible");
}

function hideModalDummy() {
  modalDummy.classList.remove("visible");
}

function showModalEnrolment() {
  modalEnrolment.classList.add("visible");
}

function hideModalEnrolment() {
  modalEnrolment.classList.remove("visible");
}

function showBackdrop() {
  backdrop.classList.add("visible");
}

function hideBackdrop() {
  backdrop.classList.remove("visible");
}

function enrolAcademyBtnClickHandler() {
  showBackdrop();
  showModalEnrolment();
}

function cardBtnClickHandler() {
  showBackdrop();
  showModalDummy();
}

function backdropClickHandler() {
  if (modalEnrolment !== null) {
    hideModalEnrolment();
  }
  hideModalDummy();
  hideBackdrop();
  hideNav();
}

//////////////////////////////////////////////////////////////////////////
// Event listeners
if (modalNoticeAcceptBtn !== null) {
  modalNoticeAcceptBtn.addEventListener("click", hideNotice);
}

for (const item of cardBtn) {
  item.addEventListener("click", cardBtnClickHandler);
}
modalDummyCancelBtn.addEventListener("click", backdropClickHandler);
backdrop.addEventListener("click", backdropClickHandler);
if (enrolAcademyBtn !== null) {
  enrolAcademyBtn.addEventListener("click", enrolAcademyBtnClickHandler);
}
if (enrolAcademyBtn !== null) {
  modalEnrolmentCancelBtn.addEventListener("click", backdropClickHandler);
}
menuBarBtn.addEventListener("click", showNav);
