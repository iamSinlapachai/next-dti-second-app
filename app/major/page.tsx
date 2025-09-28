import MenuBar from "@/components/MenuBar";
import MenuMajor from "@/components/MenuMajor";
export default function Page() {
  return (
    <main>
        <MenuBar></MenuBar>
      <h1 className="text-center">Every Major in University</h1>
      {/* ทำลิ้งไปยังสาขาต่างๆ */}
      <MenuMajor></MenuMajor>
      {/*  */}
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        eius. Nobis veritatis corrupti, aut adipisci dolores omnis delectus
        provident dolor. Qui quibusdam sed sint! Recusandae aspernatur nobis
        eveniet officia quasi!
      </p>
    </main>
  );
}