import MenuBar from "@/components/MenuBar";
import MenuMajor from "@/components/MenuMajor";
import { Itim, Bungee } from "next/font/google";

const itim = Itim ({  
  subsets: ["thai"],
  weight: ["400",],
});
const bungee = Bungee ({  
  subsets: ["latin"],
  weight: ["400",],
});

export default function Page() {
  return (
    <main>
        <MenuBar></MenuBar>
      <h1 className={`${itim.className} text-center`}>สาขาวิชาในมหาวิทยาลัย</h1>
      {/* ทำลิ้งไปยังสาขาต่างๆ */}
      <MenuMajor></MenuMajor>
      {/*  */}
      <hr />
      <p className={`${bungee.className}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        eius. Nobis veritatis corrupti, aut adipisci dolores omnis delectus
        provident dolor. Qui quibusdam sed sint! Recusandae aspernatur nobis
        eveniet officia quasi!
      </p>
    </main>
  );
}