import Image from "next/image";

const wallpapers = [
  {
    title: "Black Flow",
    edition: "launch edition",
    image: "/wallpapers/blackflwpp.png",
  },
  {
    title: "Simple White",
    edition: "launch edition",
    image: "/wallpapers/whiteflwpp.png",
  },

];

export default function WallpapersPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] text-white/50 uppercase">
            FORGED.LIMITED
          </p>

          <h1 className="text-5xl font-bold tracking-tight mt-3">
            WALLPAPERS
          </h1>

          <p className="text-white/50 mt-4 max-w-xl">
            Free wallpapers by FORGED.LIMITED.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wallpapers.map((wallpaper) => (
            <div key={wallpaper.edition} className="group">

              <div className="relative aspect-[9/16] overflow-hidden bg-white/5">
                <Image
                  src={wallpaper.image}
                  alt={wallpaper.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between mt-4">
                <div>
                  <h2 className="font-medium">
                    {wallpaper.title}
                  </h2>

                  <p className="text-xs text-white/40 mt-1">
                    {wallpaper.edition}
                  </p>
                </div>

                <a
                  href={wallpaper.image}
                  download
                  className="text-xs tracking-widest border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition"
                >
                  DOWNLOAD
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}