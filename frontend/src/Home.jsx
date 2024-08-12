import { Link } from "react-router-dom";
import Banner from "./Banner";
import { useBanner } from "./useBanner";

function Home() {
  const { title, description, linkText, link } = useBanner();
  // const title = "TUF compitetion 2024";
  // const description = 'This is long description Join us in Denver from June 7 – 9 to see what’s coming next. This is long description Join us in Denver from June 7 – 9 to see what’s coming next. This is long description Join us in Denver from June 7 – 9 to see what’s coming next. This is long description Join us in Denver from June 7 – 9 to see what’s coming next. This is long description Join us in Denver from June 7 – 9 to see what’s coming next.';
  // const linkText = "Register now";
  // const link = "https://takeuforward.org/about-us";

  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [linkText, setLinkText] = useState("");
  // const [link, setLink] = useState("");

  // useEffect(() => {
  //   getBanner();
  // }, []);

  // async function getBanner() {
  //   const { data, error } = await supabase.from("banners").select("*").limit(1);

  //   if (error) {
  //     console.error("Error fetching banner:", error);
  //     return;
  //   }

  //   if (data) {
  //     // console.log("Banner data:", data);
  //     const { title, description, link_text, link } = data[0];
  //     setTitle(title);
  //     setDescription(description);
  //     setLinkText(link_text);
  //     setLink(link);
  //   }
  // }

  return (
    <>
      <Link to="/dashboard">
        <div className="bg-pink-100 rounded-xl text-gray-900 max-w-60 m-6 cursor-pointer hover:bg-pink-300 text-center">
          dashboard
        </div>
      </Link>
      <Banner
        title={title}
        description={description}
        linkText={linkText}
        link={link}
      ></Banner>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default Home;
