/* Nexaone Infotech Solutions - site behaviour */
const CONFIG = {
  // Base URL of the Node server (server/server.js). Empty = same origin.
  API_BASE: "",
  // Contact form target. Default is the Web3Forms key already used on your previous site.
  // Set CONTACT_MODE to "server" to post to our own /api/contact instead.
  CONTACT_MODE: "web3forms",
  WEB3FORMS_URL: "https://api.web3forms.com/submit",
  WEB3FORMS_KEY: "787cd000-7a8e-4e71-aa35-a4e3402d9f70",
  // WhatsApp uses the first phone number from your supplied files. Change if you use another number.
  WHATSAPP: "919560706880"
  // Social media links are plain HTML in index.html (header, contact section and footer).
};

const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

const SERVICES = [
 ["🧩","SAP Business One Implementation","Plan and roll out SAP B1 so it matches how your company works.",["Requirement study and scoping","Company setup, chart of accounts and master data","User roles, authorisations and go-live support"]],
 ["🧭","SAP B1 Functional Consulting","Guidance on configuring SAP B1 modules and processes.",["Process mapping across sales, purchase, stock and finance","Configuration and document flow review","Gap analysis and improvement advice"]],
 ["🛠️","SAP B1 Technical Support","Help when something in SAP B1 is not working as expected.",["Issue diagnosis and fixes","Database and add-on troubleshooting","Support for day-to-day user questions"]],
 ["⚙️","SAP B1 Customization","Add the fields, forms, alerts and approvals your business needs.",["User-defined fields, tables and objects","Formatted searches and approval procedures","Print layouts and workflow tweaks"]],
 ["🗄️","SQL Server Solutions","Database work behind your ERP and reports.",["Queries, views and stored procedures","Performance review and backups guidance","Integration with other systems"]],
 ["⚡","SAP HANA Solutions","Queries and reports for SAP Business One on HANA.",["HANA SQL queries and views","Migration of existing SQL logic to HANA syntax","Reporting on HANA-based systems"]],
 ["🔎","SQL Queries and Query Manager","Ready-to-use queries inside SAP B1 for the answers you need.",["Custom queries in Query Manager","Query-based alerts and formatted searches","Query review and clean-up"]],
 ["📑","Crystal Reports","Designed print layouts and business reports.",["Invoices, delivery notes and purchase orders","Management and statutory report layouts","Reports tied to SAP B1 data"]],
 ["📦","Data Migration and DTW","Move master and transaction data into SAP B1 with the Data Transfer Workbench.",["Data cleansing and template preparation","DTW import for items, partners and documents","Validation and reconciliation checks"]],
 ["📊","ERP Reporting and Dashboards","See sales, stock, finance and operations in one place.",["Dashboard design and KPIs","Scheduled and on-demand reports","Drill-down from summary to document"]],
 ["🏢","Business Process Consulting","Review how work flows today and where an ERP can help.",["Process review and documentation","Control and approval design","Roadmap for improvements"]],
 ["🎓","SAP B1 User Training","Training so your team uses SAP B1 with confidence.",["Role-based training sessions","Practice with your own scenarios","Quick-reference notes for users"]],
 ["🤖","AI Chatbot Development","Website and internal chatbots that answer questions and capture requests.",["FAQ and knowledge-base assistants","Lead capture and hand-off to your team","Secure server-side AI integration"]],
 ["🔁","AI Business Automation","Automate repeat tasks such as drafting, sorting and data entry.",["Workflow automation design","Document and email processing","Human review steps where needed"]],
 ["🌐","Website Development","Responsive business websites that load fast and are easy to update.",["Design and development","SEO basics and analytics set-up","Contact forms and integrations"]],
 ["💻","Custom Software Solutions","Software built around a specific process in your business.",["Web and desktop applications","APIs and integration with SAP B1","Maintenance and enhancements"]]
];
const MODULES = [
 ["Administration","Set up the company, users, permissions and system rules.",["Company and user setup","Authorisations and approvals","Exchange rates and data import/export"]],
 ["Financials","Run the general ledger and daily accounting.",["Chart of accounts and journal entries","Accounts receivable and payable","Cost centres, budgets and period close"]],
 ["Sales and CRM","Manage opportunities, quotations, orders and invoices.",["Sales quotations, orders, deliveries, invoices","Opportunities and activities","Price lists and discounts"]],
 ["Purchasing","Control buying from request to supplier invoice.",["Purchase requests, orders, goods receipt","A/P invoices and returns","Landed costs"]],
 ["Business Partner Management","Keep customer and vendor records in one place.",["Partner master data","Contacts, addresses and payment terms","Account balances and history"]],
 ["Inventory Management","Track items, warehouses and stock movements.",["Item master and warehouses","Stock transfers, counts and batches or serials","Inventory valuation reports"]],
 ["Production","Plan and record manufacturing.",["Bills of materials","Production orders","Issue for production and receipt from production"]],
 ["MRP","Work out what to buy or make and when.",["Forecasts and MRP wizard","Order recommendations","Shortage analysis"]],
 ["Banking","Handle payments and bank reconciliation.",["Incoming and outgoing payments","Deposits and checks","Bank statements and reconciliation"]],
 ["Service Management","Support customers after the sale.",["Service calls and contracts","Customer equipment cards","Knowledge base"]],
 ["Reporting and Analytics","Get answers from your data.",["Standard reports and drill-down","Query Manager and Crystal Reports","Dashboards and alerts"]]
];
const FLOWS = [
 ["Procure-to-Pay",["Purchase request","Purchase order","Goods receipt PO","A/P invoice","Outgoing payment"]],
 ["Order-to-Cash",["Quotation","Sales order","Delivery","A/R invoice","Incoming payment"]],
 ["Inventory Management",["Item setup","Receipt","Transfer","Stock count","Valuation"]],
 ["Production",["Bill of materials","Production order","Issue components","Receipt of finished goods","Costing"]]
];
const AI = [
 ["💬","AI chatbot","Answers questions about services and SAP B1, any time of day."],
 ["📘","ERP FAQ assistance","Explains common SAP B1 tasks in plain language."],
 ["📈","Report guidance","Points users to the right report or helps phrase a query request."],
 ["🎯","Lead qualification","Asks a few questions and passes a clear summary to your team."],
 ["🎧","Support request capture","Collects issue details so nothing is lost before a person replies."],
 ["⏱️","Task automation","Drafts text, sorts requests and reduces repeat manual work."]
];
const STACK = ["SAP Business One","SAP HANA","Microsoft SQL Server","Crystal Reports","Query Manager","Data Transfer Workbench","ERP Dashboards","HTML / CSS / JavaScript","Node.js","AI language models"];
const INDUSTRIES = [["🏭","Manufacturing","Bills of materials, production orders, MRP and costing."],["🤝","Trading","Purchase, sales, stock and margin visibility."],["🛍️","Retail","Item, price list and multi-location stock control."],["🚚","Distribution","Warehouse transfers, delivery tracking and receivables."],["📐","Engineering","Project-style costing, procurement and material planning."],["💼","Professional Services","Service calls, contracts and billing."]];
const STEPS = [["Discover","Understand goals and pain points."],["Analyze","Study processes and data."],["Design","Agree the solution and scope."],["Develop","Configure and build."],["Test","Check with real scenarios."],["Deploy","Go live with your team."],["Support","Fix, tune and improve."]];
const FAQ = [
 ["What is SAP Business One?","SAP Business One is an ERP system for small and mid-sized businesses. It covers finance, sales, purchasing, inventory, production and reporting in one system."],
 ["Do you work with both SQL Server and SAP HANA?","Yes. We offer SQL Server solutions and SAP HANA solutions, including queries, views and reports."],
 ["Can you customise reports and print layouts?","Yes. We build Crystal Reports layouts, Query Manager queries and dashboards."],
 ["Can you move our existing data into SAP B1?","Yes. We prepare and validate data and load it using the Data Transfer Workbench (DTW)."],
 ["Is the AI chatbot connected to a real AI model?","Yes, when our server is connected to an AI model the chatbot generates answers live. If it is temporarily unavailable, it falls back to ready-made answers about our services, and you can always use the contact form."],
 ["How do I start?","Send a message through the contact form, call us, or message us on WhatsApp. Tell us your business type and what you want to improve."]
];

/* ---------- helpers ---------- */
function card(ic, t, d, extra = "") { return `<article class="card reveal"><div class="ic" aria-hidden="true">${ic}</div><h3>${esc(t)}</h3><p>${esc(d)}</p>${extra}</article>`; }

/* ---------- render ---------- */
$("#serviceGrid").innerHTML = SERVICES.map((s, i) => card(s[0], s[1], s[2], `<button class="link" data-svc="${i}" aria-haspopup="dialog">Learn More</button>`)).join("");
$("#aiGrid").innerHTML = AI.map(a => card(...a)).join("");
$("#indGrid").innerHTML = INDUSTRIES.map(a => card(...a)).join("");
$("#stack").innerHTML = STACK.map(s => `<span>${esc(s)}</span>`).join("");
$("#steps").innerHTML = STEPS.map(s => `<li class="reveal"><b>${s[0]}</b><span>${s[1]}</span></li>`).join("");
$("#flows").innerHTML = FLOWS.map(f => `<div class="flow reveal"><h3>${f[0]}</h3><ol>${f[1].map(x => `<li>${x}</li>`).join("")}</ol></div>`).join("");
$("#f-service").innerHTML = `<option value="">Select a service</option>` + SERVICES.map(s => `<option>${esc(s[1])}</option>`).join("") + `<option>Other / not sure</option>`;
$("#yr").textContent = new Date().getFullYear();
$("#waBtn").href = `https://wa.me/${CONFIG.WHATSAPP}?text=${encodeURIComponent("Hello Nexaone Infotech Solutions, I would like to know more about your services.")}`;

/* SAP B1 module tabs */
const tabs = $("#modTabs"), panel = $("#modPanel");
tabs.innerHTML = MODULES.map((m, i) => `<button role="tab" id="t${i}" aria-selected="${i === 0}" aria-controls="modPanel" tabindex="${i ? -1 : 0}">${m[0]}</button>`).join("");
function showMod(i) {
  $$("button", tabs).forEach((b, k) => { b.setAttribute("aria-selected", k === i); b.tabIndex = k === i ? 0 : -1; });
  const m = MODULES[i]; panel.setAttribute("aria-labelledby", "t" + i);
  panel.innerHTML = `<h3>${esc(m[0])}</h3><p>${esc(m[1])}</p><ul>${m[2].map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;
}
tabs.addEventListener("click", e => { const b = e.target.closest("button"); if (b) showMod($$("button", tabs).indexOf(b)); });
tabs.addEventListener("keydown", e => {
  const bs = $$("button", tabs); let i = bs.indexOf(document.activeElement);
  if (!["ArrowRight", "ArrowLeft"].includes(e.key) || i < 0) return;
  i = (i + (e.key === "ArrowRight" ? 1 : -1) + bs.length) % bs.length; showMod(i); bs[i].focus(); e.preventDefault();
});
showMod(0);

/* FAQ accordion */
$("#faqList").innerHTML = FAQ.map((f, i) => `<div><h3><button aria-expanded="false" aria-controls="a${i}" id="q${i}">${esc(f[0])}</button></h3><div class="ans" id="a${i}" role="region" aria-labelledby="q${i}"><div><p>${esc(f[1])}</p></div></div></div>`).join("");
$("#faqList").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  const open = b.getAttribute("aria-expanded") === "true";
  b.setAttribute("aria-expanded", !open); $("#" + b.getAttribute("aria-controls")).classList.toggle("open", !open);
});

/* ---------- service modal ---------- */
const modal = $("#modal"); let lastFocus;
function openSvc(i) {
  const s = SERVICES[i]; lastFocus = document.activeElement;
  $("#mBody").innerHTML = `<h3 id="mTitle">${s[0]} ${esc(s[1])}</h3><p>${esc(s[2])}</p><b>What this can include</b><ul>${s[3].map(x => `<li>${esc(x)}</li>`).join("")}</ul><a class="btn pri" href="#contact" data-close data-pick="${esc(s[1])}">Enquire about this service</a>`;
  modal.hidden = false; $(".mclose").focus();
}
function closeModal() { modal.hidden = true; lastFocus && lastFocus.focus(); }
document.addEventListener("click", e => {
  const sv = e.target.closest("[data-svc]");
  if (sv) { openSvc(+sv.dataset.svc); if (sv.tagName === "A") e.preventDefault(); return; }
  const c = e.target.closest("[data-close]");
  if (c || e.target === modal) {
    if (c && c.dataset.pick) $("#f-service").value = c.dataset.pick;
    modal.hidden = true; if (!c || !c.dataset.pick) lastFocus && lastFocus.focus();
  }
  if (e.target.closest("[data-open-chat]")) toggleChat(true);
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") { if (!modal.hidden) closeModal(); else if (!chat.hidden) toggleChat(false); }
  if (e.key === "Tab" && !modal.hidden) { // focus trap
    const f = $$("button,a[href]", modal); if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
    else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
  }
});

/* ---------- nav ---------- */
const burger = $("#burger"), menu = $("#menu");
burger.addEventListener("click", () => { const o = menu.classList.toggle("open"); burger.setAttribute("aria-expanded", o); burger.setAttribute("aria-label", o ? "Close menu" : "Open menu"); });
menu.addEventListener("click", e => { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); } });
const links = $$("#menu a"), secs = links.map(a => $(a.getAttribute("href")));
const toTop = $("#toTop");
toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }));
addEventListener("scroll", () => {
  toTop.hidden = scrollY < 600;
  const y = scrollY + 120; let cur = 0;
  secs.forEach((s, i) => { if (s && s.offsetTop <= y) cur = i; });
  links.forEach((a, i) => a.classList.toggle("on", i === cur));
}, { passive: true });

/* reveal on scroll */
const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .12 }) : null;
$$(".reveal").forEach(el => io ? io.observe(el) : el.classList.add("in"));

/* ---------- hero: rotating text + particles ---------- */
const words = ["SAP Business One", "SQL and SAP HANA solutions", "Crystal Reports and dashboards", "AI chatbots and automation", "Custom software and websites"];
const rot = $("#rot");
if (!reduce) { let w = 0; setInterval(() => { rot.classList.add("out"); setTimeout(() => { w = (w + 1) % words.length; rot.textContent = words[w]; rot.classList.remove("out"); }, 350); }, 2800); }
(function particles() {
  const cv = $("#fx"), x = cv.getContext("2d"); let W, H, P = [];
  const size = () => { W = cv.width = cv.offsetWidth; H = cv.height = cv.offsetHeight; P = Array.from({ length: Math.min(70, W / 16) }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 2 + .6, vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4 })); draw(); };
  function draw() {
    x.clearRect(0, 0, W, H);
    P.forEach((p, i) => {
      x.fillStyle = "rgba(63,216,245,.75)"; x.beginPath(); x.arc(p.x, p.y, p.r, 0, 7); x.fill();
      for (let j = i + 1; j < P.length; j++) { const d = Math.hypot(p.x - P[j].x, p.y - P[j].y); if (d < 110) { x.strokeStyle = `rgba(47,209,139,${.22 * (1 - d / 110)})`; x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(P[j].x, P[j].y); x.stroke(); } }
    });
  }
  function tick() { P.forEach(p => { p.x = (p.x + p.vx + W) % W; p.y = (p.y + p.vy + H) % H; }); draw(); if (!document.hidden) requestAnimationFrame(tick); else setTimeout(tick, 500); }
  addEventListener("resize", size); size(); if (!reduce) tick();
})();

/* ---------- chatbot ---------- */
const chat = $("#chat"), fab = $("#chatFab"), log = $("#chatLog"), inp = $("#chatInput"), send = $("#chatSend");
let aiLive = null, history = [], busy = false;
const SUGGEST = ["What services do you offer?", "What does SAP B1 cover?", "Can you build an AI chatbot?", "How can I contact you?"];
const api = p => (CONFIG.API_BASE || "") + p;

async function checkAI() {
  try {
    const r = await fetch(api("/api/health"), { cache: "no-store" }); const j = await r.json();
    aiLive = !!j.ai;
  } catch { aiLive = false; }
  $("#chatMode").textContent = "Online";
  $("#aiStatus").textContent = aiLive ? "The chatbot is connected to a real AI model through our server." : "Use the chat button for quick answers about our services, or send your requirement through the contact form.";
}
function add(text, cls) { const d = document.createElement("div"); d.className = "msg " + cls; d.textContent = text; log.append(d); log.scrollTop = log.scrollHeight; return d; }
function welcome() {
  log.innerHTML = ""; history = [];
  add("Hello! I can answer questions about Nexaone's services and SAP Business One.", "bot");
  $("#chatSug").innerHTML = SUGGEST.map(q => `<button>${esc(q)}</button>`).join("");
}
function toggleChat(open) {
  chat.hidden = !open; fab.setAttribute("aria-expanded", open);
  if (open) { if (!log.children.length) welcome(); inp.focus(); } else fab.focus();
}
fab.addEventListener("click", () => toggleChat(chat.hidden));
$("#chatClose").addEventListener("click", () => toggleChat(false));
$("#chatClear").addEventListener("click", welcome);
$("#chatSug").addEventListener("click", e => { if (e.target.tagName === "BUTTON") ask(e.target.textContent); });
send.addEventListener("click", () => ask(inp.value));
inp.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); ask(inp.value); } });

const DEMO = [
 [/service|offer|what do you do/, "We offer SAP Business One implementation, consulting, support and customisation; SQL Server and SAP HANA solutions; Query Manager; Crystal Reports; DTW data migration; dashboards; user training; AI chatbots and automation; websites and custom software. See the Services section for details."],
 [/sap|b1|business one|module/, "SAP Business One covers Administration, Financials, Sales and CRM, Purchasing, Business Partners, Inventory, Production, MRP, Banking, Service and Reporting. The SAP Business One section on this page shows each module and common workflows like Procure-to-Pay and Order-to-Cash."],
 [/hana|sql|query|crystal|report/, "We write SQL and HANA queries, build Query Manager queries and Crystal Reports layouts, and create dashboards for SAP B1 data."],
 [/chatbot|ai|automat/, "We build chatbots and automation that answer FAQs, guide users to reports, qualify leads and capture support requests."],
 [/contact|phone|call|email|whatsapp|reach/, "Email nexaoneinfotechsolutions@gmail.com or call 9560706880, 7464883038, 9942656503 or 8920966601. You can also use the contact form or the WhatsApp button."],
 [/price|cost|quote/, "Pricing depends on scope. Send us your requirement through the contact form and we will respond."],
];
function demoReply(q) { q = q.toLowerCase(); const m = DEMO.find(d => d[0].test(q)); return m ? m[1] : "I can't answer that here. Try asking about our services, SAP B1 modules, AI chatbots or how to contact us, or use the contact form."; }

async function ask(text) {
  text = text.trim(); if (!text || busy) return;
  busy = true; send.disabled = true; inp.value = ""; $("#chatSug").innerHTML = "";
  add(text, "me"); history.push({ role: "user", content: text });
  const t = add("", "bot"); t.innerHTML = '<span class="dots" aria-label="Assistant is typing"><span></span><span></span><span></span></span>';
  let reply;
  try {
    if (!aiLive) { await new Promise(r => setTimeout(r, reduce ? 0 : 700)); reply = demoReply(text); }
    else {
      const r = await fetch(api("/api/chat"), { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: history.slice(-10) }) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j.error || "The assistant is unavailable right now.");
      reply = j.reply;
    }
    t.textContent = reply; history.push({ role: "assistant", content: reply });
  } catch (err) { t.textContent = "Sorry, something went wrong: " + err.message + " You can use the contact form instead."; history.pop(); }
  busy = false; send.disabled = false; log.scrollTop = log.scrollHeight; inp.focus();
}
checkAI();

/* ---------- contact form ---------- */
const form = $("#cform"), fs = $("#fstatus"), sb = $("#sendBtn");
function setErr(n, m) { const el = form.elements[n]; $(`[data-for=${n}]`).textContent = m || ""; el.setAttribute("aria-invalid", !!m); if (m) el.setAttribute("aria-describedby", ""); }
function validate() {
  const v = n => form.elements[n].value.trim(); let first = null, ok = true;
  const rules = { name: v("name").length < 2 && "Enter your name.", email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email")) && "Enter a valid email address.", phone: v("phone") && !/^[+\d][\d\s()-]{6,17}$/.test(v("phone")) && "Enter a valid phone number or leave it blank.", service: !v("service") && "Select a service.", message: v("message").length < 10 && "Write at least 10 characters." };
  for (const [n, m] of Object.entries(rules)) { setErr(n, m || ""); if (m) { ok = false; first = first || form.elements[n]; } }
  if (first) first.focus(); return ok;
}
form.addEventListener("submit", async e => {
  e.preventDefault(); fs.className = ""; fs.textContent = "";
  if (!validate()) { fs.className = "bad"; fs.textContent = "Please fix the highlighted fields."; return; }
  if (form.elements.botcheck.checked) return;
  const data = Object.fromEntries(new FormData(form)); delete data.botcheck;
  sb.disabled = true; sb.textContent = "Sending…"; fs.textContent = "Sending your message…";
  try {
    let r;
    if (CONFIG.CONTACT_MODE === "server") r = await fetch(api("/api/contact"), { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    else r = await fetch(CONFIG.WEB3FORMS_URL, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ ...data, access_key: CONFIG.WEB3FORMS_KEY, subject: "New Nexaone Infotech Solutions Enquiry", from_name: "Nexaone Infotech Solutions Website" }) });
    const j = await r.json().catch(() => ({}));
    if (r.ok && (j.success === true)) { fs.className = "ok"; fs.textContent = "Message sent. We will get back to you soon."; form.reset(); }
    else throw new Error(j.message || j.error || "The server did not confirm delivery.");
  } catch (err) {
    fs.className = "bad"; fs.textContent = "Your message was not sent: " + err.message + " Please call or email us instead.";
  }
  sb.disabled = false; sb.textContent = "Send message";
});
