import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
    <main>
      <header>
        <div>
          <Image
            src="/assets/images/foto.jpeg"
            className="photo"
            width={240}
            height={240}
            alt={""}
          />
        </div>
        <div>
          <h1>Luis Lopes</h1>
          <p>Desenvolvedor FullStack</p>
        </div>
      </header>
    </main>
  );
}
