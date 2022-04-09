export default class ChangeMode {
  $changemodeBlock = null;
  $changemode = null;

  constructor($target) {
    const $changemodeBlock = document.createElement("header");
    $changemodeBlock.className = "changeboxblock";
    const $changemode = document.createElement("input");
    $changemode.type = "checkbox";
    this.$changemode = $changemode;

    $changemodeBlock.appendChild($changemode);
    $target.appendChild($changemodeBlock);

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
  }
}
