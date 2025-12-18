import Title from "@/components/Title";

const TutorialPage = async ({ params }) => {
  //   const { technology, topic, page_no, subject } = await params;
  const { slug } = await params;
  console.log(slug);
  const [technology, topic, , page_no, subject] = slug || [];

  return (
    <div>
      <Title>{technology} Tutorials</Title>
      <h2>Topic: {topic}</h2>
      <hr />
      <div className="flex justify-between">
        <h3 className="font-bold">Subject: {subject}</h3>
        <h3 className="font-bold">Page No:{page_no}</h3>
      </div>
    </div>
  );
};

export default TutorialPage;
