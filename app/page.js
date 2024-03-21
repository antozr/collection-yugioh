
import IntroBox from "./components/BoxIntro/index";
import SmallCardCount from "./components/SmallCountCard";

export default function Home() {
  return (
    <>
      <IntroBox
        title1={"Bien le bonjour "}
        txt1={
          <>
            Bienvenus dans ton gestionnaire de carte. Tu vas avoir un aperçu en
            un rien de temps de ta collection.{" "}
          </>
        }
        link1={<>Ajouter des cartes</>}
        link2={<>Voir ta collection</>}
        srcImg={
          "https://images.unsplash.com/photo-1668720028726-c4997f31f216?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        src1={"#"}
        src2={"#"}
      />
      <SmallCardCount />
    </>
  );
}
