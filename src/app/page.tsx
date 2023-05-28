import React, { useEffect } from "react";
import Image from "next/image";
import { CodeStatus } from "../components";

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
      <div>
        <section>
          <div>
            <h1>Apresentação</h1>
            <p>
              Um desenvolvedor apaixonado pelo setor automobilístico e pelas
              soluções que a tecnologia pode oferecer. Sou membro do
              founding-team (se não me engano o 3# de agora +100 pessoas) da
              startup Mecanizou, que tem como objetivo ser o parceiro do
              mecânico, usando principalmente Javascript. Desde o início da
              nossa jornada, tenho trabalhado em soluções inovadoras para
              atender às necessidades dos mecânicos e solucionar problemas da
              indústria automobilística. Essa experiência tem me motivado a
              trabalhar com uma equipe altamente qualificada, em um ambiente
              dinâmico e desafiador. Acredito que a tecnologia é uma das maiores
              ferramentas para resolver os desafios do setor automobilístico, e
              por isso estou animado em fazer parte dessa jornada. Minha paixão
              pelo setor e minha experiência em desenvolvimento FullStack, com
              foco em soluções de vendas e gestão, me permitiram contribuir para
              a criação de soluções inovadoras para os nossos clientes. Estou
              entusiasmado em continuar aprendendo e me desenvolvendo na área de
              tecnologia, gestão e produto
            </p>
            <a href="#">ver mais</a>
          </div>
          <div>
            <h1>Conhecimentos</h1>
          </div>
          <div>
            <h1>Projetos</h1>
          </div>
          <div>
            <h1>Contato</h1>
          </div>
          <div>
            <h1>code status</h1>
            <CodeStatus username="lunadis" />
          </div>
        </section>
        <aside>
          <h1>Repositórios publicos</h1>
        </aside>
      </div>
    </main>
  );
}
