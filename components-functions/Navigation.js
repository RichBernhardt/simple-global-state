export default function Navigation() {
  return (
    <nav>
      <button
        onClick={() => {
          if (slideto && item.slideto) slideto(item.slideto - 1);
        }}
      ></button>
    </nav>
  );
}
