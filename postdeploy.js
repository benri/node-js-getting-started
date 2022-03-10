async function init() {
  console.log("starting postdeployment script", new Date().toString());
  await sleep(70);
  console.log("postdeployment script finished", new Date().toString());
}

function sleep(mins) {
  return new Promise((resolve) => {
    const ms = mins * 60 * 1000;
    setTimeout(resolve, ms);
  });
}

init();
