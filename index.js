const connect_buttons = document.querySelectorAll(
  ".entity-result__actions.entity-result__divider"
);

for (let i = 0; i < connect_buttons.length; i++) {
  const parentElement = connect_buttons[i].parentElement;

  if (!parentElement) continue;

  const getConnectionName = parentElement
    ?.querySelector(
      ".entity-result__content.entity-result__divider > .mb1 .t-roman.t-sans .entity-result__title-text > .app-aware-link > span"
    )
    ?.innerText.split("\n")[0];

  console.log("Adicionando ", getConnectionName);

  const isConnectButton = ["Conectar", "Connect"].includes(
    connect_buttons[i].innerText
  );

  if (!isConnectButton) continue;

  const addButton = connect_buttons[i].querySelector("button");
  addButton?.click();

  await sleep(1000);

  const confirmButton = document.querySelector(
    ".artdeco-modal .artdeco-modal__actionbar .artdeco-button--primary"
  );

  confirmButton?.click();

  console.log(getConnectionName, " adicionado(a) com sucesso!");

  await sleep(1000);
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
