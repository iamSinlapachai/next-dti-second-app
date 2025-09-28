export default function Student({ params }: { params: { id: string } }) {
    const { id } = params;
  return (
    <main>
      <h1>Student ID: {id}</h1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur
        iusto, qui alias quas laborum ab eaque distinctio consectetur velit
        delectus, facere fugit natus. Pariatur velit doloremque voluptatem in
        dignissimos.
      </p>
    </main>
  );
}
