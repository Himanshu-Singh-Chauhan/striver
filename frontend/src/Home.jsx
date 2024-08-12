import { Link } from "react-router-dom";
import Banner from "./Banner";
import { useBanner } from "./useBanner";

function Home() {
  const { title, description, linkText, link } = useBanner();
  // const title = "TUF compitetion 2024";
  // const description = 'This is long description Join us in Denver from June 7 – 9 to see what’s coming next. This is long description Join us in Denver from June 7 – 9 to see what’s coming next. This is long description Join us in Denver from June 7 – 9 to see what’s coming next. This is long description Join us in Denver from June 7 – 9 to see what’s coming next. This is long description Join us in Denver from June 7 – 9 to see what’s coming next.';
  // const linkText = "Register now";
  // const link = "https://takeuforward.org/about-us";

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
    </>
  );
}

export default Home;
