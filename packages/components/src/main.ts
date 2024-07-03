import "./styles/global.scss";

let app;

import("./App.svelte").then((module) => {
  const svelteComponent = module.default;

  app = new svelteComponent({
    target: document.body,
  });
});

export default app;
