export default class ChangeMode {
  $changemode = null;

  constructor($target) {
    const $changemode = document.createElement("input");
    $changemode.type = "checkbox";
    $changemode.className = "Changebox";
    this.$changemode = $changemode;

    $changemode.addEventListener("click", () => {
      const currentmode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      //기본 OS다크모드 상태
      if (currentmode && $changemode.checked) {
        document.querySelector("body").className = "light";
      } else if (currentmode && !$changemode.checked) {
        document.querySelector("body").className = "dark";
      }

      //기본 OS라이트모드 상태
      if (!currentmode && $changemode.checked) {
        document.querySelector("body").className = "dark";
      } else if (!currentmode && !$changemode.checked) {
        document.querySelector("body").className = "light";
      }
    });

    $target.appendChild($changemode);
  }
}
