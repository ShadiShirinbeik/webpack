import { groupBy } from "lodash-es";
import people from "./people";
import "@babel/polyfill";

const managerGroups = groupBy(people, "manager");
const root = document.createElement("div");
root.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`;
document.body.appendChild(root);