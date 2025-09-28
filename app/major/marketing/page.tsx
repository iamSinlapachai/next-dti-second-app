import MenuMajor from "@/components/MenuMajor";
import MenuBar from "@/components/MenuBar";

export default function Page() {
  return (
    <main>
      <MenuBar></MenuBar>
      <h1 className="text-center">Marketing</h1>
      <MenuMajor></MenuMajor>
      <hr />
      
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi delectus
        incidunt, ut animi ratione aliquam blanditiis illum inventore magnam
        nisi.
      </p>
    </main>
  );
}
