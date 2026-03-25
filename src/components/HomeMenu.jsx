import { User, Code, Mail, Ghost } from "lucide-react";

const buttons = [
  { key: "about", icon: User, label: "about" },
  { key: "projects", icon: Code, label: "projects" },
  { key: "contact", icon: Mail, label: "contact" },
  { key: "other", icon: Ghost, label: "???" },
];

const HomeMenu = ({ openWindow }) => {
  return (
    <div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] max-w-[70vw] rounded-lg bg-white/85 dark:bg-black/50 backdrop-blur-sm dark:backdrop-blur-xl border-3 border-orange-400 dark:border-white/80 shadow-2xl flex flex-col">
        {/* Title Bar */}
        <div className="flex items-center justify-between gap-2 px-3 py-2 bg-black/70 backdrop-blur-md border-b-3 border-orange-400 dark:border-white/80">
          <span className="text-white font-semibold text-lg">home</span>
          <button className="text-white text-lg cursor-pointer rounded hover:bg-white/20 transition-all">
            [x]
          </button>
        </div>

        {/* Content Area */}
        <div className="flex items-center justify-center bg-white/20 dark:bg-black/20 h-[600px] max-h-[80vh]">
          <div className="my-20 flex flex-col items-center gap-5">
            <h1 className="text-6xl text-black/70 dark:text-white">
              hi! i'm{" "}
              <span className="text-orange-400 dark:text-red-400">amir</span>
            </h1>
            <h2 className="text-xl text-black/50 dark:text-white">
              developer | cs @ sfu
            </h2>

            {/* Navigation */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-10">
              {buttons.map(({ key, icon: Icon, label }) => (
                <button
                  key={key}
                  onClick={() => openWindow(key)}
                  className="group flex flex-col items-center gap-2 px-4 py-3 text-black/60 dark:text-white"
                >
                  <Icon
                    size={24}
                    className="text-black/30 dark:text-white/80 group-hover:text-orange-400 dark:group-hover:text-red-400 transition-all duration-300"
                  />
                  <p className="font-medium">{label}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;
