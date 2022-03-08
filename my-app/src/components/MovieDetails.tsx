export default () => (
  <div className="max-w-[50rem] grid grid-cols-movieDetails text-text gap-x-10">
    <div className="w-auto h-60 col-span-3">
      <img
        className="object-fill"
        src="https://clownmagazine.co.uk/Dune%20-%20Film%20Poster.jpg"
        alt="Dune Banner"
      />
    </div>

    <img
      className="h-[60] rounded-2xl border-text border-solid border-[1px]"
      src="https://a.ltrbxd.com/resized/sm/upload/nx/8b/vs/gc/cDbNAY0KM84cxXhmj8f0dLWza3t-0-460-0-690-crop.jpg?k=11ccbe9f2b"
      alt="Dune Poster"
    />
    <div>
      <h1 className="text-5xl font-bo">Dune</h1>
      <p>2021</p>
      <a href="">Directed by Denis Villeneuve</a>
      <p>BEYOND FEAR, DESTINY AWAITS.</p>
      <p>
        Paul Atreides, a brilliant and gifted young man born into a great
        destiny beyond his understanding, must travel to the most dangerous
        planet in the universe to ensure the future of his family and his
        people. As malevolent forces explode into conflict over the planet’s
        exclusive supply of the most precious resource in existence-a commodity
        capable of unlocking humanity’s greatest potential-only those who can
        conquer their fear will survive.
      </p>
    </div>
  </div>
);
