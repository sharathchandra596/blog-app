import Comments from "../components/Comments";
import Fotter from "../components/Fotter";
import Navbar from "../components/Navbar";
import { MdEditNote } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function Postdetails() {
  return (
    <>
      <Navbar />
      <div className="px-5">
        {/* heading and edit button */}
        <div className=" heading flex justify-between   items-center">
          <h1 className="text-sm font-semibold md:text-2xl mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. .
          </h1>
          <div className="flex justify-between gap-2">
            <p className="text-lg md:text-3xl cursor-pointer">
              <MdEditNote />
            </p>
            <p className="text-lg cursor-pointer md:text-3xl">
              <MdDelete />
            </p>
          </div>
        </div>

        {/* date and user details */}
        <div className="flex justify-between text-sm text-gray-500 font-light mt-2 mb-2 md:text-lg">
          <p>@sharath</p>
          <p>12/21/2022 16:23</p>
        </div>

        {/* image and description */}
        <div className="flex flex-col justify-between gap-4">
          <img
            className="max-h-[500px] md:max-w-[1000px] m-auto object-fit rounded"
            src="https://plus.unsplash.com/premium_photo-1676117273006-32247b2b4c91?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
          />

          <p className="  text-sm md:text-lg text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            voluptas asperiores nemo. Nemo tenetur a cum, minima voluptatum
            dolor autem sed repellendus? Totam corporis mollitia exercitationem
            ut id natus ipsam repellat dignissimos incidunt consequatur nemo
            eligendi dolores pariatur, fuga reprehenderit asperiores sit sint
            eum aut porro itaque. Soluta facilis voluptatum quas modi unde
            alias, beatae, sed expedita, optio rem eius exercitationem debitis
            molestias excepturi autem repellendus consequatur rerum deleniti
            officiis esse! A maxime cupiditate distinctio aut nihil officia sint
            quos, est perspiciatis voluptas voluptatum voluptatibus fugit?
            Blanditiis iusto maxime unde nulla praesentium provident debitis, ex
            nam, animi molestias dicta dignissimos repellendus, cum quidem
            perferendis minus nesciunt impedit velit a quo non eos nisi quis!
            Quaerat corrupti voluptatum at dolore nisi assumenda deleniti hic
            harum molestiae recusandae cumque eos, quae amet architecto incidunt
            corporis? Enim, reiciendis cum? Quis quas corporis dolor accusantium
            veniam aliquid illum nisi nesciunt in aut dolorum adipisci
            temporibus mollitia architecto, eius itaque numquam nostrum dolore
            eveniet. Distinctio, maiores. Provident cupiditate aut quidem
            necessitatibus cum nemo est error numquam, nulla velit totam quos
            dolore praesentium modi labore reiciendis eum facere, unde incidunt,
            in ut porro consequatur quis veniam. Placeat, quisquam ipsam at
            voluptatum illo consequuntur dolor animi! Fugit?
          </p>
        </div>

        <div className="flex gap-2 items-center my-4 text-sm">
          <p className="font-semibold">Categories:</p>
          <div className="space-x-2">
            <span className="bg-gray-400 px-2 py-1 rounded"> Tech </span>
            <span className="bg-gray-400 px-2 py-1 rounded"> Tech </span>
          </div>
        </div>

        {/* comments */}
        <p>Comments:</p>
        <Comments/>
        <Comments/>
        

  {/* add comment */}

    <div className=" add-comment my-2 flex flex-col gap-2 md:flex-row     md:mx-16 rounded-md">
      <input className="w-full h-10 bg-gray-200 outline-none  px-2 text-gray-700" type="text" name="" placeholder="Add comment" />
      <button className="bg-black text-gray-50 rounded-lg p-1 w-40   ">Add comment</button>
    </div>
       
       
  

      </div>
      <Fotter />
    </>
  );
}

export default Postdetails;
