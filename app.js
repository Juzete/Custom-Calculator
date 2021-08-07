const buttonPanel = document.querySelector(".button-panel");
const result = document.querySelector(".result");

buttonPanel.addEventListener("click", (event) => {
  const element = event.target.textContent;
  let resultContent = document.querySelector(".result").textContent.trim();

  if (!event.target.closest("button")) return;
  console.log(element);
  if (event.target.closest(".number"))
    result.innerHTML = numberHandler(element, resultContent);
  console.log(resultContent, " resCont");
});

function numberHandler(input, value) {
  console.log(value, " val");
  if (value == 0) value = input;
  else input != null ? (value += input) : (value = 0);
  console.log(value, " num");
  return value;
}
