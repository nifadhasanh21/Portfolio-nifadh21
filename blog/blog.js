const POSTS = [
  {
    slug: "ai-coding-fundamentals",
    title: "In the Age of AI, Coding Fundamentals Are More Important Than Ever",
    desc: "Why learning the basics still matters—even when AI can write code for you.",
    date: "2025-12-31",
    tags: ["career", "javascript", "mern"],
    readingTime: "6 min read",
    content: `
    We are living in the age of <b>Artificial Intelligence(Ai).</b> From student to corporate life it has become the daily fundamental need. Many people think that because AI can write code, generate solutions, and even build applications automatically, we no longer need to learn <b>“raw coding.”</b> But this idea is totally wrong. Let’s see how? <br /> <br />

    AI can help us, but AI cannot replace the understanding of how things work from the inside. When you learn raw coding, you learn the real logic behind a system. You understand how data flows, how a function works, how memory is used, and how errors are handled. Without these basic ideas, you cannot maintain any system—whether it’s built by humans or by AI. <br /> <br />

    Imagine you are working on a project, and AI writes the code for you. It might look perfect at first, but what if something breaks later? What if a server crashes? What if there is a security problem? At that moment, AI might not understand the exact context of your problem. You will need real coding knowledge to fix the issue. If you don’t know the basics, you will be helpless. <br /> <br />

    Also, AI-generated code is not always optimized. It may work, but it might not be the best solution. A developer who knows raw coding can improve performance, reduce bugs, and create more efficient designs. AI can give you shortcuts, but it cannot give you mastery. <br /> <br />

    Learning raw coding builds strong problem-solving ability. It trains your brain to think logically—step by step. This skill is needed in every tech job: <b>development, cybersecurity, data science, software testing, DevOps, and even AI</b> itself. <br /> <br />

    So yes, this is the age of AI. But AI is a tool, not a replacement for human knowledge. To become a true developer, engineer, or tech professional, you must know the roots. Raw coding is the foundation. AI makes things easier, but fundamentals make you powerful. <br />
  `.trim(),
  },

  {
    slug: "roadmap-mern",
    title: "My MERN learning roadmap (what I’d do again)",
    desc: "A simple order to learn MongoDB → Express → React → Node without getting overwhelmed.",
    date: "2025-12-31",
    tags: ["mern", "react", "javascript"],
    readingTime: "5 min read",
    content: `
      <p>Here’s a clean path to learn MERN without getting stuck:</p>
      <h2>1) JavaScript fundamentals</h2>
      <p>Focus on <b>functions, async/await, arrays, objects, DOM, and modules</b>.</p>
      <h2>2) Node.js basics</h2>
      <p>Learn how Node runs JS on the server, file system, npm, and environment variables.</p>
      <h2>3) Express.js</h2>
      <p>Build a small REST API: routes, controllers, middleware, error handling.</p>
      <h2>4) MongoDB</h2>
      <p>Learn CRUD, schema design, indexes, and Mongoose models.</p>
      <h2>5) React</h2>
      <p>Components, hooks, routing, forms, and state management.</p>
      <h2>Project idea</h2>
      <p>Make a simple app: Auth + CRUD + dashboard.</p>
      <pre><code>// Tip: start with small endpoints
GET /api/items
POST /api/items
</code></pre>
      <p>If you want, later I’ll convert this blog into a full MERN blog with admin panel.</p>
    `.trim(),
  },

  {
    slug: "deploy-static-site",
    title: "Deploy a static website the easy way",
    desc: "A clean checklist to publish your portfolio/blog with a custom domain and HTTPS.",
    date: "2025-12-20",
    tags: ["career", "javascript"],
    readingTime: "6 min read",
    content: `
      <p>
        Deploying a static site is one of the best skills for a developer. It makes you look professional,
        and it’s also useful for client work.
      </p>

      <h2>What is a static site?</h2>
      <p>
        A static site is usually HTML/CSS/JS that does not need a backend server to run.
        Examples: portfolio, blog, landing page, documentation site.
      </p>

      <h2>Best hosting options</h2>
      <ul>
        <li><b>Netlify</b> — very easy, great for beginners</li>
        <li><b>Vercel</b> — excellent for frontend projects</li>
        <li><b>GitHub Pages</b> — free and simple (great for portfolios)</li>
        <li><b>Cloudflare Pages</b> — fast global network</li>
      </ul>

      <h2>Deployment checklist</h2>
      <ul>
        <li><b>1) Clean file structure</b>: index.html at root, assets in folders</li>
        <li><b>2) Optimize images</b>: use WebP when possible</li>
        <li><b>3) Minify</b>: reduce large JS/CSS if needed</li>
        <li><b>4) Add SEO basics</b>: title, description, og tags</li>
        <li><b>5) Add favicon</b>: simple but important</li>
      </ul>

      <h2>Custom domain (simple explanation)</h2>
      <p>
        If you bought a domain (Namecheap/GoDaddy/etc.), you must connect DNS.
        Usually you set:
      </p>
      <ul>
        <li><b>A record</b> (points to an IP) or</li>
        <li><b>CNAME</b> (points to a hosting URL)</li>
      </ul>
      <p>
        Hosting platforms show you exactly what to add. DNS can take time to update (sometimes minutes, sometimes hours).
      </p>

      <h2>HTTPS (don’t skip this)</h2>
      <p>
        HTTPS makes your site secure and trusted. Most platforms provide free SSL automatically.
        Always enable HTTPS.
      </p>

      <h2>Quick “pro” tips</h2>
      <ul>
        <li>Add a <b>404 page</b> if your host supports it</li>
        <li>Use <b>relative links</b> correctly for pages</li>
        <li>Add <b>sitemap.xml</b> if it’s a blog with multiple pages</li>
        <li>Submit your site to <b>Google Search Console</b></li>
      </ul>

      <h2>Final thoughts</h2>
      <p>
        Static deployment is easy once you do it once. After that, you’ll be confident to deploy anything.
        If you want, I can also make a simple “deploy guide” PDF for your personal use.
      </p>
    `.trim(),
  },

  {
    slug: "react-component-structure",
    title: "React component structure that stays clean",
    desc: "A simple folder structure + naming style that keeps your project readable as it grows.",
    date: "2025-11-30",
    tags: ["react", "javascript"],
    readingTime: "7 min read",
    content: `
      <p>
        A messy React project becomes painful very fast. The good news: you don’t need a complex structure.
        You just need a consistent one.
      </p>

      <h2>Simple structure that works</h2>
      <pre><code>src/
  components/
  pages/
  features/
  hooks/
  utils/
  styles/
</code></pre>

      <h2>What goes where?</h2>
      <ul>
        <li><b>components/</b> — reusable UI (Button, Card, Navbar)</li>
        <li><b>pages/</b> — route pages (Home, About, BlogPost)</li>
        <li><b>features/</b> — big feature modules (auth, dashboard, cart)</li>
        <li><b>hooks/</b> — custom hooks (useAuth, useFetch)</li>
        <li><b>utils/</b> — helpers (formatDate, validators)</li>
        <li><b>styles/</b> — global css and theme tokens</li>
      </ul>

      <h2>Example: feature-based organization</h2>
      <pre><code>src/
  features/
    auth/
      components/
      api/
      hooks/
      auth.routes.jsx
</code></pre>

      <h2>Naming rules that save your life</h2>
      <ul>
        <li>Components: <b>PascalCase</b> (UserCard.jsx)</li>
        <li>Hooks: <b>useSomething</b> (useUser.js)</li>
        <li>Utilities: <b>camelCase</b> (formatDate.js)</li>
        <li>Keep file names consistent with exports</li>
      </ul>

      <h2>One rule for clean code</h2>
      <p>
        Don’t make components do everything. If a component becomes too big:
        split into smaller components + move logic into hooks.
      </p>

      <h2>Small checklist before you ship</h2>
      <ul>
        <li>No duplicate logic (move to utils/hooks)</li>
        <li>Reusable UI stays inside components/</li>
        <li>Routes stay inside pages/</li>
        <li>Big features become modules inside features/</li>
      </ul>

      <h2>Final thoughts</h2>
      <p>
        Clean structure = easy debugging + faster teamwork + easier growth.
        If you want, I can also organize your full React project structure based on your current code.
      </p>
    `.trim(),
  },
];

const $ = (q) => document.querySelector(q);

function setYear() {
  const y = new Date().getFullYear();
  const el = $("#year");
  if (el) el.textContent = y;
}
function getQuery() {
  const params = new URLSearchParams(location.search);
  return Object.fromEntries(params.entries());
}
function formatDate(iso) {
  try {
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return iso;
  }
}

// Mobile nav
function initMobileNav() {
  const burger = $("#burger");
  const mobile = $("#mobileNav");
  const close = $("#closeMobile");
  if (!burger || !mobile || !close) return;

  const open = () => {
    mobile.classList.add("show");
    mobile.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };
  const shut = () => {
    mobile.classList.remove("show");
    mobile.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  burger.addEventListener("click", open);
  close.addEventListener("click", shut);

  // Close when clicking overlay
  mobile.addEventListener("click", (e) => {
    if (e.target === mobile) shut();
  });

  // Close when clicking any menu link
  mobile
    .querySelectorAll("a")
    .forEach((a) => a.addEventListener("click", shut));
}

// Index page rendering
function renderIndex() {
  const root = $("#posts");
  if (!root) return;

  const searchInput = $("#search");
  const chips = $("#chips");
  const sort = $("#sort");
  const empty = $("#empty");

  let activeTag = "all";
  let keyword = "";

  const sortPosts = (arr) => {
    const mode = sort?.value || "new";
    const copy = [...arr];
    if (mode === "new") copy.sort((a, b) => b.date.localeCompare(a.date));
    if (mode === "old") copy.sort((a, b) => a.date.localeCompare(b.date));
    if (mode === "az") copy.sort((a, b) => a.title.localeCompare(b.title));
    return copy;
  };

  const matches = (post) => {
    const tagOk = activeTag === "all" || post.tags.includes(activeTag);
    const k = keyword.trim().toLowerCase();
    const keyOk =
      !k ||
      (post.title + " " + post.desc + " " + post.tags.join(" "))
        .toLowerCase()
        .includes(k);
    return tagOk && keyOk;
  };

  const card = (p) => {
    const tagLabel = p.tags[0]?.toUpperCase() || "POST";
    return `
      <a class="card" href="post.html?slug=${encodeURIComponent(p.slug)}">
        <div class="card__meta">
          <span class="pill">${tagLabel}</span>
          <span>${formatDate(p.date)}</span>
          <span>•</span>
          <span>${p.readingTime}</span>
        </div>
        <h3 class="card__title">${p.title}</h3>
        <p class="card__desc">${p.desc}</p>
        <span class="card__cta">Read <i class="bx bx-right-arrow-alt"></i></span>
      </a>
    `.trim();
  };

  const render = () => {
    const filtered = sortPosts(POSTS.filter(matches));
    root.innerHTML = filtered.map(card).join("\n");
    if (empty) empty.hidden = filtered.length > 0;
  };

  chips?.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-tag]");
    if (!btn) return;
    activeTag = btn.getAttribute("data-tag") || "all";
    [...chips.querySelectorAll(".chip")].forEach((c) =>
      c.classList.remove("active")
    );
    btn.classList.add("active");
    render();
  });

  searchInput?.addEventListener("input", () => {
    keyword = searchInput.value || "";
    render();
  });

  sort?.addEventListener("change", render);

  render();
}

// Post page rendering
function renderPost() {
  const title = $("#postTitle");
  if (!title) return;

  const { slug } = getQuery();
  const post = POSTS.find((p) => p.slug === slug) || POSTS[0];

  $("#postTitle").textContent = post.title;
  $("#postDesc").textContent = post.desc;
  $("#postMeta").innerHTML = `
    <span class="pill">${post.tags[0]?.toUpperCase() || "POST"}</span>
    <span>${formatDate(post.date)}</span>
    <span>•</span>
    <span>${post.readingTime}</span>
  `;
  $("#postContent").innerHTML = post.content;

  const tags = $("#postTags");
  if (tags) {
    tags.innerHTML = post.tags
      .map((t) => `<span class="pill">${t}</span>`)
      .join("");
  }

  $("#copyLink")?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(location.href);
      $("#copyLink").innerHTML = `<i class="bx bx-check"></i> Copied`;
      setTimeout(
        () =>
          ($("#copyLink").innerHTML = `<i class="bx bx-link"></i> Copy link`),
        1200
      );
    } catch {}
  });
}

setYear();
initMobileNav();
renderIndex();
renderPost();
