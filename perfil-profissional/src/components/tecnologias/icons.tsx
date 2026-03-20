/* ─── Base CDN ───────────────────────────────────────────────────────────────── */
const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const Ico = ({ name, file }: { name: string; file: string }) => (
  <img
    src={`${CDN}/${name}/${name}-${file}.svg`}
    alt={name}
    width="100%"
    height="100%"
    style={{ objectFit: "contain", display: "block" }}
    draggable={false}
  />
);

/* ─── Exports ────────────────────────────────────────────────────────────────── */

export const NodejsIcon = () => <Ico name="nodejs" file="original" />;
export const ExpressIcon = () => <Ico name="express" file="original" />;
export const PrismaIcon = () => <Ico name="prisma" file="original" />;
export const MongoDBIcon = () => <Ico name="mongodb" file="original" />;
export const LockIcon = () => (
  /* Bcrypt não tem ícone no devicon — usa um cadeado SVG limpo */
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
  >
    <path
      fill="#fff"
      d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
    />
  </svg>
);
export const JwtIcon = () => <Ico name="jsonwebtokens" file="plain" />;
export const Html5Icon = () => <Ico name="html5" file="original" />;
export const Css3Icon = () => <Ico name="css3" file="original" />;
export const DockerIcon = () => <Ico name="docker" file="original" />;
export const TypeScriptIcon = () => <Ico name="typescript" file="original" />;
export const FirebaseIcon = () => <Ico name="firebase" file="original" />;
export const PythonIcon = () => <Ico name="python" file="original" />;
export const CIcon = () => <Ico name="c" file="original" />;
export const TailwindIcon = () => <Ico name="tailwindcss" file="original" />;
export const ReactIcon = () => <Ico name="react" file="original" />;
export const VueIcon = () => <Ico name="vuejs" file="original" />;
export const FlutterIcon = () => <Ico name="flutter" file="original" />;
export const PostgreSQLIcon = () => <Ico name="postgresql" file="original" />;
export const GitIcon = () => <Ico name="git" file="original" />;
export const FigmaIcon = () => <Ico name="figma" file="original" />;
export const SqlIcon = () => <Ico name="azuresqldatabase" file="original" />;
export const PostmanIcon = () => <Ico name="postman" file="original" />;
