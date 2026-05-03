const photos = [
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
    alt: "Bride and groom under floral arch",
    span: "row-span-2",
    location: "Sonoma, California",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    alt: "Tablescape with candles and roses",
    span: "",
    location: "Florence, Italy",
  },
  {
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=900&q=80",
    alt: "Reception under string lights",
    span: "",
    location: "Byron Bay, AU",
  },
  {
    src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1000&q=80",
    alt: "Ceremony aisle covered in petals",
    span: "row-span-2",
    location: "Provence, France",
  },
  {
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=900&q=80",
    alt: "Bouquet of pastel roses",
    span: "",
    location: "Studio Detail",
  },
  {
    src: "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&w=900&q=80",
    alt: "First dance in golden light",
    span: "",
    location: "Lake Como",
  },
  {
    src: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=900&q=80",
    alt: "Wedding stationery flat lay",
    span: "",
    location: "Studio Detail",
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=80",
    alt: "Bride in soft natural light",
    span: "row-span-2",
    location: "Hudson Valley, NY",
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80",
    alt: "Outdoor ceremony with arch",
    span: "",
    location: "Santorini, GR",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-32">
      <div className="container-px max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <p className="eyebrow mb-6">Portfolio</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-balance">
              A few weddings,{" "}
              <span className="display-script text-accent text-5xl md:text-6xl lg:text-7xl block mt-3">
                worth lingering on
              </span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-pretty">
            A small selection from the past few seasons — every celebration
            designed from a blank page, photographed with light, restraint, and
            love.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[260px] gap-4 md:gap-6">
          {photos.map((photo, i) => (
            <figure
              key={photo.src}
              className={`group relative overflow-hidden rounded-2xl soft-card ${photo.span}`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <figcaption className="absolute bottom-5 left-5 right-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[0.65rem] uppercase tracking-widest2 text-background/70">
                  {photo.location}
                </p>
                <p className="font-serif text-xl text-background mt-1">
                  {photo.alt}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="btn-secondary">
            Request the full portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
