import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1
            className="my-8 border-l-8 border-primary/50
        py-2 pl-2 text-3xl font-bold"
          >
            About us
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            molestias quia eos reiciendis, repudiandae corrupti non doloribus
            minus, incidunt, explicabo odit. Nobis fuga error quas illo commodi
            sapiente aliquid porro numquam repellat dolor non beatae, quod animi
            sequi aliquam corrupti consequuntur eum distinctio. Quam numquam
            iusto sequi repellat omnis officia a earum vel in! Obcaecati
            inventore magnam temporibus perferendis expedita.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugit
            dolor ut laudantium, labore maiores quos unde. Vitae, vel eum.
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp/>
    </>
  );
};

export default About;
