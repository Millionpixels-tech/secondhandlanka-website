import React, { useEffect, useState } from "react";
import {
  ShoppingBag,
  Heart,
  Search,
  MapPin,
  MessageCircle,
  Camera,
  Menu,
  X,
  Smartphone,
  Armchair,
  Shirt,
  Bike,
  BookOpen,
  Baby,
  Flower2,
  Dumbbell,
  ChevronDown,
  Mail,
  ShieldCheck,
  Recycle,
  Plus,
  House,
  User,
  SlidersHorizontal,
  Apple,
  Play,
} from "lucide-react";
import { config } from "./config";
import { pageMetadata } from "./seo";

const categories = [
  {
    name: "Furniture",
    icon: Armchair,
    description: "Make room for something lovely.",
    image: "/chair.jpg",
    item: "A little character for your home",
    tag: "Preloved furniture",
  },
  {
    name: "Electronics",
    icon: Smartphone,
    description: "Your next upgrade, for less.",
    image: "/camera.jpg",
    item: "Find a new way to capture life",
    tag: "Preloved electronics",
  },
  {
    name: "Fashion",
    icon: Shirt,
    description: "Great style deserves another outing.",
    image: "/shoes.jpg",
    item: "A fresh step, a second story",
    tag: "Preloved fashion",
  },
  {
    name: "Vehicles",
    icon: Bike,
    description: "Find your next set of wheels.",
  },
  {
    name: "Home & Garden",
    icon: Flower2,
    description: "Good things for your everyday.",
  },
  {
    name: "Sports",
    icon: Dumbbell,
    description: "Gear up for your next adventure.",
  },
  {
    name: "Books",
    icon: BookOpen,
    description: "Turn the page on a new favourite.",
  },
  {
    name: "Baby & Kids",
    icon: Baby,
    description: "Little things for growing families.",
  },
];
const faqs = [
  [
    "What is Secondhand Lanka?",
    "Secondhand Lanka is a marketplace app for buying and selling preloved items in Sri Lanka. Browse listings, save your favourites, and chat directly with sellers.",
  ],
  [
    "How do I sell an item?",
    "Create an account, add up to three photos, and write a clear title and description. Choose a category and condition, add your town and district, and set your price in Sri Lankan rupees.",
  ],
  [
    "How do payment and delivery work?",
    "You and the other person agree on payment, collection, or delivery in chat. Secondhand Lanka does not process payments or arrange delivery. Inspect items before paying and meet in a public place when possible.",
  ],
  [
    "Can I find items near me?",
    "Yes. Filter listings by district, category, condition, and price. Listings include the seller’s town and district so you can look for finds closer to home.",
  ],
  [
    "Is the app available to download?",
    "The App Store and Google Play listings are being prepared. The store buttons currently show a launch availability message. Check back here for download links.",
  ],
];
// Ionicons leaf-outline, shared with the mobile app (public/icons/IONICONS-LICENSE).
function Leaf({
  size = 24,
  strokeWidth = 1.5,
}: {
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      stroke="currentColor"
      strokeWidth={(strokeWidth * 512) / 24}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M321.89,171.42C233,114,141,155.22,56,65.22c-19.8-21-8.3,235.5,98.1,332.7C231.89,468.92,352,461,392.5,392S410.78,228.83,321.89,171.42Z" />
      <path d="M173,253c86,81,175,129,292,147" />
    </svg>
  );
}
function Brand() {
  return (
    <a className="brand" href="/" aria-label="Secondhand Lanka home">
      <span className="brand-symbol">
        <img src="/icons/icon.svg" width="42" height="42" alt="" />
      </span>
      <span>
        secondhand
        <span className="brand-lanka">
          lanka<span className="brand-dot">.</span>
        </span>
      </span>
    </a>
  );
}
function StoreButtons({ light = false }: { light?: boolean }) {
  const [notice, setNotice] = useState("");
  return (
    <div>
      <div className={`store-buttons ${light ? "light" : ""}`}>
        {[
          {
            name: "App Store",
            small: "Download on the",
            icon: Apple,
            url: config.appStoreUrl,
            ready: config.hasAppStore,
          },
          {
            name: "Google Play",
            small: "GET IT ON",
            icon: Play,
            url: config.googlePlayUrl,
            ready: config.hasGooglePlay,
          },
        ].map((store) => (
          <a
            key={store.name}
            className="store-button"
            href={store.url}
            onClick={(event) => {
              if (!store.ready) {
                event.preventDefault();
                setNotice(
                  `${store.name} downloads are coming soon. Stay tuned!`,
                );
              }
            }}
            target="_blank"
            rel="noreferrer"
          >
            <store.icon size={27} fill="currentColor" />
            <span>
              <small>{store.small}</small>
              <strong>{store.name}</strong>
            </span>
          </a>
        ))}
      </div>
      <p className="store-note" role="status">
        {notice || "Coming soon on iOS & Android"}
      </p>
    </div>
  );
}
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-inner">
        <Brand />
        <button
          className="menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          className={open ? "navigation open" : "navigation"}
          aria-label="Main navigation"
        >
          <a href="/#how-it-works" onClick={() => setOpen(false)}>
            How it works
          </a>
          <a href="/#why-secondhand" onClick={() => setOpen(false)}>
            Why secondhand?
          </a>
          <a href="/contact">Contact us</a>
          <a
            className="button button-small"
            href="/#download"
            onClick={() => setOpen(false)}
          >
            Get the app <Smartphone size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
function Phone() {
  return (
    <div
      className="phone"
      aria-label="Illustrative preview of the Secondhand Lanka app"
    >
      <div className="phone-status">
        <span>9:41</span>
        <span className="island" />
        <span>▮▮▮ ▰</span>
      </div>
      <div className="phone-content">
        <div className="phone-brand">
          secondhand <span>lanka.</span>
          <Leaf size={18} />
        </div>
        <div className="phone-location">
          <MapPin size={12} /> Colombo, Sri Lanka
        </div>
        <div className="phone-banner">
          <span>GOOD FINDS. NEW BEGINNINGS.</span>
          <strong>
            A second life.
            <br />A great deal.
          </strong>
          <Leaf size={44} />
        </div>
        <div className="phone-search">
          <Search size={15} /> What are you looking for?
          <SlidersHorizontal size={15} />
        </div>
        <div className="phone-chips">
          <span className="active">All items</span>
          <span>Furniture</span>
          <span>Electronics</span>
        </div>
        <div className="phone-section">
          <strong>Fresh finds</strong>
          <span>See all</span>
        </div>
        <div className="phone-listings">
          {[
            {
              image: "/chair.jpg",
              name: "Accent chair",
              price: "Rs. 12,500",
              town: "Colombo",
            },
            {
              image: "/camera.jpg",
              name: "Vintage camera",
              price: "Rs. 18,000",
              town: "Kandy",
            },
          ].map((item) => (
            <div className="phone-listing" key={item.name}>
              <div>
                <img src={item.image} alt={item.name} />
                <span>
                  <Heart size={13} />
                </span>
              </div>
              <small>GOOD CONDITION</small>
              <strong>{item.name}</strong>
              <b>{item.price}</b>
              <em>
                <MapPin size={9} />
                {item.town}
              </em>
            </div>
          ))}
        </div>
        <div className="phone-tabs">
          {[House, Search, Plus, MessageCircle, User].map((Icon, i) => (
            <span key={i} className={i === 2 ? "sell-tab" : ""}>
              <Icon size={18} />
              <small>{["Home", "Explore", "Sell", "Inbox", "You"][i]}</small>
            </span>
          ))}
        </div>
      </div>
      <div className="phone-home" />
    </div>
  );
}
function Home() {
  const [category, setCategory] = useState("Furniture");
  const selected = categories.find((c) => c.name === category)!;
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <span className="eyebrow">
            <Leaf size={15} /> A LITTLE LESS WASTE. A LOT MORE POSSIBILITY.
          </span>
          <h1>
            Buy &amp; sell
            <br />
            <span className="underlined">secondhand.</span>
          </h1>
          <p className="hero-lead">Someone’s preloved. Your next favourite.</p>
          <p className="hero-description">
            Discover Secondhand Lanka, a marketplace app for buying and selling
            used items in Sri Lanka. Explore preloved furniture, electronics,
            clothing and more, or give your unused things a second life.
          </p>
          <StoreButtons />
          <div className="hero-footnote">
            <span className="flag">🇱🇰</span>
            <span>Made for Sri Lanka. Made for everyday life.</span>
          </div>
        </div>
        <div className="hero-art">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <span className="art-spark">✳</span>
          <Phone />
          <div className="floating-card found">
            <span className="floating-icon">
              <Heart size={21} />
            </span>
            <div>
              <strong>A great find.</strong>
              <small>Even better the second time.</small>
            </div>
          </div>
          <div className="floating-card second-life">
            <span className="floating-icon lime">
              <Recycle size={22} />
            </span>
            <div>
              <strong>More life. Less waste.</strong>
              <small>That’s the secondhand way.</small>
            </div>
          </div>
          {/* <span className="preview-caption">
            Illustrative app preview · sample listings
          </span> */}
        </div>
      </section>
      <section className="section container" aria-labelledby="buying-guide">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SECONDHAND IN SRI LANKA</span>
            <h2 id="buying-guide">Make your next used purchase a good one.</h2>
          </div>
          <p>Use the app to explore categories and filter by district, condition and price. This website introduces the app; the items pictured here are illustrative examples.</p>
        </div>
        <div className="steps">
          <article className="step">
            <h3>Buying used phones &amp; electronics</h3>
            <p>Ask about repairs, battery condition and included accessories. Test charging, the screen and key functions before paying. For phones, ask the seller to remove their account locks.</p>
          </article>
          <article className="step">
            <h3>Finding secondhand furniture</h3>
            <p>Check measurements, joints, upholstery and signs of damage. Ask for recent photos and agree on collection or delivery costs before committing.</p>
          </article>
          <article className="step">
            <h3>Selling used items in Sri Lanka</h3>
            <p>Use your own clear photos, describe wear honestly and include the brand, condition, price in rupees, town and district. Arrange a public meeting when possible and inspect items before payment.</p>
          </article>
        </div>
      </section>
      <div className="values-strip">
        <div className="container values-inner">
          <span>
            <MapPin />
            Local finds, islandwide
          </span>
          <span>
            <MessageCircle />
            Connect directly
          </span>
          <span>
            <Heart />
            Save your favourites
          </span>
          <span>
            <Leaf />
            Choose preloved
          </span>
        </div>
      </div>
      <section className="section container" id="how-it-works">
        <div className="section-heading">
          <div>
            <span className="eyebrow">LESS HASSLE. MORE POSSIBILITIES.</span>
            <h2>
              Your next great find
              <br />
              is a few taps away.
            </h2>
          </div>
          <p>
            Whether you’re making room or making a discovery,
            <br className="desktop-break" /> secondhand just makes sense.
          </p>
        </div>
        <div className="steps">
          {[
            {
              icon: Search,
              title: "Find something you love",
              text: "Explore by category, district, condition, or budget. Save the things that catch your eye.",
            },
            {
              icon: Camera,
              title: "Give it a second life",
              text: "Snap a few photos, tell its story, and set your price. Your unused things could be someone’s favourite.",
            },
            {
              icon: MessageCircle,
              title: "Chat. Connect. Make a deal.",
              text: "Message directly in the app. Agree on the details together, then arrange payment and collection.",
            },
          ].map((step, i) => (
            <article className="step" key={step.title}>
              <div className="step-top">
                <span className="feature-icon">
                  <step.icon />
                </span>
                <span className="step-number">0{i + 1}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="category-section">
        <div className="container category-layout">
          <div className="category-copy">
            <span className="eyebrow">A LITTLE SOMETHING FOR EVERYONE</span>
            <h2>
              Big possibilities.
              <br />
              Preloved prices.
            </h2>
            <p>
              From your first apartment to your next hobby. Discover everyday
              essentials and unexpected favourites.
            </p>
            <div
              className="category-buttons"
              aria-label="Explore app categories"
            >
              {categories.map((c) => (
                <button
                  key={c.name}
                  aria-pressed={category === c.name}
                  className={category === c.name ? "selected" : ""}
                  onClick={() => setCategory(c.name)}
                >
                  <c.icon size={19} />
                  {c.name}
                </button>
              ))}
            </div>
            <p className="category-other">
              And those one-of-a-kind finds in “Other”.
            </p>
          </div>
          <div className="category-visual" key={category}>
            {selected.image ? (
              <img src={selected.image} alt={selected.tag} loading="lazy" />
            ) : (
              <div className="category-placeholder">
                <selected.icon size={100} strokeWidth={1} />
              </div>
            )}
            <div className="category-image-label">
              <span>
                {selected.tag || `Preloved ${selected.name.toLowerCase()}`}
              </span>
              <h3>{selected.item || selected.description}</h3>
              <p>Discover {selected.name.toLowerCase()} in the app.</p>
            </div>
            <span className="category-sticker">
              <Recycle size={17} /> GOOD FINDS,
              <br />
              SECOND TIME AROUND.
            </span>
          </div>
        </div>
      </section>
      <section className="section container why-section" id="why-secondhand">
        <div className="why-intro">
          <span className="eyebrow">GOOD FOR YOU. GOOD FOR THE ISLAND.</span>
          <h2>
            There’s more to
            <br />a second life.
          </h2>
          <p>
            Great things don’t have to be brand new. A small choice can make
            more room, more connection, and a little less waste.
          </p>
          <a className="text-link" href="#download">
            Find your next favourite <Heart size={17} />
          </a>
        </div>
        <div className="why-grid">
          {[
            {
              icon: ShoppingBag,
              title: "More value in every find",
              text: "Find something useful at a price that works for you. Compare listings and decide what feels right.",
            },
            {
              icon: Leaf,
              title: "Keep good things going",
              text: "Keep useful items in use for longer. Pass them on instead of leaving them forgotten.",
            },
            {
              icon: MapPin,
              title: "Closer to home",
              text: "Browse across all 25 districts. Discover what’s available in your own corner of Sri Lanka.",
            },
            {
              icon: MessageCircle,
              title: "Real people. Direct conversations.",
              text: "Ask about condition, swap details, and make arrangements directly with the other person.",
            },
          ].map((item) => (
            <article key={item.title}>
              <item.icon size={25} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="download-section container" id="download">
        <div className="download-decoration">
          <ShoppingBag size={88} strokeWidth={1.2} />
          <span>✳</span>
        </div>
        <div>
          <span className="eyebrow">YOUR NEXT FAVOURITE IS OUT THERE</span>
          <h2>
            A second life.
            <br />A great deal.
          </h2>
          <p>
            Make a little room for something good.
            <br />
            Secondhand Lanka is coming to your pocket.
          </p>
          <StoreButtons light />
        </div>
        <div className="download-leaf">
          <Leaf size={110} strokeWidth={1} />
        </div>
      </section>
      <section className="section container faq-section">
        <div>
          <span className="eyebrow">A FEW THINGS YOU MIGHT BE WONDERING</span>
          <h2>
            Good questions.
            <br />
            Straight answers.
          </h2>
          <p>Need a hand with something else?</p>
          <a href="/contact" className="text-link">
            Let’s talk <MessageCircle size={17} />
          </a>
        </div>
        <div className="faqs">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <ChevronDown size={19} />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
const privacy = [
  [
    "Information you provide",
    "When you create an account, Firebase Authentication processes your email address and password. Your marketplace profile can include your name, bio, district, and profile photo. Listings include item photos, descriptions, condition, town, district, and price. We also store your saved favourites and messages exchanged through the app.",
  ],
  [
    "How information is used",
    "Information is used to create and maintain your account, display profiles and listings, help people search for items, save favourites, and deliver buyer–seller conversations. Technical information may be processed to operate the service and prevent abuse.",
  ],
  [
    "What other people can see",
    "Your marketplace profile and published listing details are visible to people browsing the app. Your account email is not included in public profile records. Conversations are available to their participants. If a participant reports a conversation, its 10 most recent messages are copied into a private report for authorised moderators to review. Only include information you are comfortable sharing with recipients and, when reported, the moderation team.",
  ],
  [
    "Service providers",
    "The app uses Google Firebase Authentication, Cloud Firestore, Cloud Storage, and Cloud Functions to operate accounts, store content, and run marketplace features. These services may process technical information, including IP addresses, and may process information outside Sri Lanka. See Firebase’s privacy information for details about these services.",
  ],
  [
    "Photos and local storage",
    "The app asks for access to selected photos so you can add listing and profile images. Listings support up to three compressed photos. The app stores account state, cached marketplace data, favourites, and supported pending actions on your device to support browsing and synchronisation.",
  ],
  [
    "Retention and your choices",
    "Account information and marketplace content are stored while your account is active. You can update your profile and listing details in the app. To permanently delete your account, open Your profile → Profile options → Delete account, confirm your current password, and type DELETE. Deletion removes your sign-in account, profile, listings, uploaded listing and profile photos, favourites, blocks, and reports submitted by you or about your account. All conversations involving you, including both participants’ messages, are removed for both participants. The app clears its account-specific local data on the device where deletion is requested. Other devices may retain previously cached data until local app data is cleared; copies saved by other people cannot be recalled.",
  ],
  [
    "Deletion processing and external requests",
    "Once an in-app deletion request is accepted, marketplace access is restricted and you are signed out. Cleanup runs in the background and automatically retries if interrupted. A minimal operational record containing your account identifier, deletion status, timestamps, and any cleanup error code is retained for 30 days after completion, then removed by daily maintenance. Provider-managed logs and backups follow the provider’s retention settings and are not erased by this cleanup. You can also request deletion without installing the app through our Account deletion page. Support verifies ownership before initiating deletion. Never send your password or verification codes. Contact support if you need help or confirmation that cleanup has completed.",
  ],
  [
    "Safety reports and blocked members",
    "We store the community-rules version you accept and its acceptance time. A block record includes the blocked account identifier, display name at the time of blocking, and timestamp; it is private to you. Blocking prevents both accounts from starting or sending messages to each other, and hides the blocked member’s listings on your device. Reports contain the reporter and reported account identifiers, the reason and optional details, and a copy of the reported listing, profile, or the conversation’s 10 most recent messages. Authorised moderators can access reports and record review decisions. Reports are removed by daily maintenance after 90 days from submission, or sooner when the reporting or reported account is deleted. Suspension records are retained while the restriction remains in effect; contact support to appeal.",
  ],
  [
    "Website privacy",
    "This website does not include analytics, advertising trackers, account registration, or a server-submitted contact form. Contact links open your email application. When you email us, we receive the information you choose to include. The website hosting provider may process ordinary request logs.",
  ],
  [
    "Updates and contact",
    "This policy will be updated when the app or its data practices change. For privacy questions, contact the support address on our Contact us page.",
  ],
];
const terms = [
  [
    "Using Secondhand Lanka",
    "Secondhand Lanka provides a marketplace where people in Sri Lanka can publish listings and communicate about preloved items. Use the service lawfully, provide accurate information, and keep your account credentials secure.",
  ],
  [
    "Your listings and content",
    "Only list items that you own or are authorised to sell. Describe their condition accurately, use photos you have permission to publish, and set a clear price. Do not publish illegal or counterfeit goods, weapons, controlled drugs, sexual content, hate, threats, harassment, scams, spam, misleading descriptions, or another person’s private information. You remain responsible for the content you share. Members must accept the current in-app community rules before using the marketplace and submitting content.",
  ],
  [
    "Buying and selling",
    "Buyers and sellers agree directly on price, payment, delivery, and collection. Secondhand Lanka does not process payments, hold money, provide escrow, arrange delivery, or inspect listed items. An available listing is not a guarantee of an item’s quality or continued availability.",
  ],
  [
    "Safer transactions",
    "Ask questions and inspect an item before paying. Where possible, meet in a public place and make arrangements you are comfortable with. Never share your password, one-time codes, or unnecessary financial information. If a deal seems suspicious, stop and contact us.",
  ],
  [
    "Messages and conduct",
    "Use messages for legitimate marketplace conversations. Do not send spam, threats, harassment, scams, or discriminatory content. Respect the other person’s privacy and avoid sharing their information without permission.",
  ],
  [
    "Reporting, blocking, and moderation",
    "Use the three-dot menu beside the heart on an item to report a listing, the three-dot menu beside a seller’s name to report a member, or Report conversation in chat to submit a private concern. Choose a reason and optionally explain what happened. Reporting a conversation shares its 10 most recent messages with authorised moderators. You can block a member from the three-dot menu beside their name on their seller profile or from chat, and manage blocks through Your profile → Profile options → Blocked members. Blocking prevents messaging in either direction; unblocking does not override a block set by the other member. A narrow automated text filter rejects some clearly prohibited phrases; it does not assess all content or photos. Human moderators review reports, may remove listings or suspend accounts and clear their public profile content, and record a reason for their decision. Removed listings cannot be restored by their owner. Reports do not automatically establish a violation. Contact support to appeal a decision or report an urgent safety concern; the app is not an emergency service.",
  ],
  [
    "Deleting your account",
    "You can request permanent account deletion in the app or from our Account deletion page. The in-app flow requires your current password and explicit confirmation. Deletion removes your listings and conversations for both participants, as described in the Privacy policy, and cannot be undone. A suspended member can still initiate account deletion. Account deletion does not resolve any transaction or obligation agreed directly with another person.",
  ],
  [
    "Availability and responsibility",
    "We aim to provide a useful service, but access can be interrupted and information can change. Transactions are agreements between buyers and sellers. To the extent permitted by applicable law, we are not responsible for user content or disputes arising from those agreements. These terms do not remove rights that cannot lawfully be excluded.",
  ],
  [
    "Changes and questions",
    "Features and these terms may change as the marketplace develops. Any revised terms will be published on this page. For questions about the service or a concern about a listing or conversation, contact our support team.",
  ],
];
function Legal({ kind }: { kind: "privacy" | "terms" }) {
  const content = kind === "privacy" ? privacy : terms;
  const title = kind === "privacy" ? "Privacy policy" : "Terms & conditions";
  return (
    <main className="container legal-page">
      <div className="legal-heading">
        <span className="eyebrow">
          {kind === "privacy"
            ? "YOUR INFORMATION. EXPLAINED."
            : "A GOOD PLACE TO START."}
        </span>
        <h1>{title}</h1>
        <p>
          {kind === "privacy"
            ? "How information is used in Secondhand Lanka."
            : "The ground rules for a better secondhand experience."}
        </p>
        <span className="document-date">
          Draft for launch review · Updated 3 October 2026
        </span>
      </div>
      <div className="legal-layout">
        <aside>
          <span>ON THIS PAGE</span>
          {content.map(([heading], i) => (
            <a key={heading} href={`#section-${i}`}>
              {String(i + 1).padStart(2, "0")} {heading}
            </a>
          ))}
        </aside>
        <div className="legal-content">
          <div className="legal-notice">
            <ShieldCheck size={22} />
            <p>
              This is a draft for the upcoming launch. The operating details and
              policies will be finalised before public release.
            </p>
          </div>
          {content.map(([heading, body], i) => (
            <section id={`section-${i}`} key={heading}>
              <h2>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {heading}
              </h2>
              <p>{body}</p>
              {heading === "Service providers" && (
                <a
                  className="text-link"
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Firebase privacy information
                </a>
              )}
              {(heading === "Deletion processing and external requests" ||
                heading === "Deleting your account") && (
                <a className="text-link" href="/delete-account">
                  Request account deletion
                </a>
              )}
            </section>
          ))}
          <div className="legal-contact">
            <h3>Have a question?</h3>
            <p>We’re here to help you understand.</p>
            <a href={`mailto:${config.supportEmail}`}>{config.supportEmail}</a>
          </div>
        </div>
      </div>
    </main>
  );
}
function Contact() {
  const [topic, setTopic] = useState("General question");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [prepared, setPrepared] = useState(false);
  return (
    <main className="container contact-page">
      <div className="contact-intro">
        <span className="eyebrow">A CONVERSATION STARTS HERE</span>
        <h1>Let’s talk.</h1>
        <p>
          Have a question, an idea, or need a little help?
          <br />
          We’d love to hear from you.
        </p>
        <a className="contact-email" href={`mailto:${config.supportEmail}`}>
          <span className="feature-icon">
            <Mail />
          </span>
          <span>
            <small>DROP US A LINE</small>
            <strong>{config.supportEmail}</strong>
          </span>
        </a>
        <div className="contact-tips">
          <h3>Help us help you.</h3>
          <p>
            For an app issue, include your device type and a description of what
            happened. For a listing concern, include the listing title and
            seller name.
          </p>
          <p>
            Please don’t send passwords, verification codes, or payment details.
          </p>
        </div>
        <span className="contact-signoff">
          <Leaf size={22} /> Good finds. Good conversations.
        </span>
      </div>
      <form
        className="contact-form"
        onSubmit={(event) => {
          event.preventDefault();
          const body = `Name: ${name}\nReply email: ${email}\n\n${message}`;
          window.location.href = `mailto:${config.supportEmail}?subject=${encodeURIComponent(`[${topic}] Secondhand Lanka`)}&body=${encodeURIComponent(body)}`;
          setPrepared(true);
        }}
      >
        <h2>What’s on your mind?</h2>
        <p>Write your message below and send it with your email app.</p>
        <div className="form-row">
          <label>
            Your name
            <input
              autoComplete="name"
              required
              maxLength={100}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Nimal Perera"
            />
          </label>
          <label>
            Your email
            <input
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </label>
        </div>
        <label>
          What can we help with?
          <select value={topic} onChange={(e) => setTopic(e.target.value)}>
            {[
              "General question",
              "App support",
              "Listing concern",
              "Privacy or account request",
              "Feedback & ideas",
            ].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label>
          Your message
          <textarea
            required
            minLength={10}
            maxLength={5000}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us a little more…"
            rows={6}
          />
        </label>
        <button className="button" type="submit">
          Open email app <Mail size={18} />
        </button>
        <p className="form-note" role="status">
          {prepared
            ? `Your message is prepared. Send it in your email app, or email ${config.supportEmail} directly.`
            : "Your message is only sent when you press send in your email app."}
        </p>
      </form>
    </main>
  );
}
function AccountDeletion() {
  const emailLink = `mailto:${config.supportEmail}?subject=${encodeURIComponent("Secondhand Lanka — account deletion request")}&body=${encodeURIComponent("Please permanently delete my Secondhand Lanka account and associated data.\n\nAccount email: \nProfile name (optional): \n\nI understand that my listings and all conversations involving me will be removed for both participants. Please verify account ownership and confirm when deletion is complete.")}`;
  return (
    <main className="container legal-page">
      <div className="legal-heading">
        <span className="eyebrow">YOUR ACCOUNT. YOUR CHOICE.</span>
        <h1>Delete your Secondhand Lanka account</h1>
        <p>
          Request permanent deletion of your account and associated data, in the
          app or by email.
        </p>
      </div>
      <div className="legal-content">
        <section>
          <h2>Delete in the app</h2>
          <p>
            Open Your profile → Profile options → Delete account. Enter your
            current password, type DELETE, and confirm. Once accepted, you are
            signed out and server cleanup runs in the background. Suspended
            accounts can use the deletion option on the account restriction
            screen.
          </p>
        </section>
        <section>
          <h2>Request deletion without the app</h2>
          <p>
            Email {config.supportEmail} from your account’s registered email
            address with the subject “Secondhand Lanka account deletion
            request”. Include your account email and, optionally, your profile
            name. We verify ownership before initiating deletion and can confirm
            completion. Never send your password or verification codes.
          </p>
          <a className="button" href={emailLink}>
            Open deletion request in email app <Mail size={18} />
          </a>
          <p>
            Your request is sent only when you press send in your email app. If
            no email app opens, send the request directly to{" "}
            {config.supportEmail}.
          </p>
        </section>
        <section>
          <h2>What is deleted</h2>
          <p>
            Your sign-in account, profile, listings, uploaded photos,
            favourites, blocks, and reports submitted by you or about your
            account are removed. Conversations involving you, including both
            participants’ messages, are removed for both participants. This
            cannot be undone.
          </p>
        </section>
        <section>
          <h2>Processing and retained records</h2>
          <p>
            Cleanup retries if interrupted. A minimal deletion record is
            retained for 30 days after completion and then removed by daily
            maintenance. Provider-managed logs and backups follow provider
            retention settings. Other people’s saved copies and cached content
            on other devices cannot be remotely recalled. Contact support if you
            need help or confirmation of completion.
          </p>
          <a className="text-link" href="/privacy">
            Read the privacy policy
          </a>
        </section>
      </div>
    </main>
  );
}
function Footer() {
  return (
    <footer>
      <div className="container footer-main">
        <div>
          <Brand />
          <p>
            Good finds. New beginnings.
            <br />A secondhand marketplace for Sri Lanka.
          </p>
        </div>
        <div className="footer-links">
          <a href="/privacy">Privacy policy</a>
          <a href="/terms">Terms & conditions</a>
          <a href="/delete-account">Account deletion</a>
          <a href="/contact">Contact us</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Secondhand Lanka.</span>
        <span>
          Made with care, for Sri Lanka <Leaf size={14} />
        </span>
      </div>
    </footer>
  );
}
export function App({ path = "/" }: { path?: string }) {
  useEffect(() => {
    document.title = (pageMetadata[path] || pageMetadata["/404"]).title;
    if (!pageMetadata[path]) {
      const robots = document.createElement("meta");
      robots.name = "robots";
      robots.content = "noindex";
      document.head.appendChild(robots);
      return () => robots.remove();
    }
  }, [path]);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      {path === "/" ? (
        <main id="main-content">
          <Home />
        </main>
      ) : (
        <div id="main-content">
          {path === "/privacy" ? (
            <Legal kind="privacy" />
          ) : path === "/terms" ? (
            <Legal kind="terms" />
          ) : path === "/contact" ? (
            <Contact />
          ) : path === "/delete-account" ? (
            <AccountDeletion />
          ) : (
            <main className="container not-found">
              <span className="eyebrow">404</span>
              <h1>This find has wandered off.</h1>
              <p>Let’s get you back to something good.</p>
              <a className="button" href="/">
                Back to home
              </a>
            </main>
          )}
        </div>
      )}
      <Footer />
    </>
  );
}
