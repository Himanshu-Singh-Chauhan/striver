import { Link } from "react-router-dom";
import Banner from "./Banner";
import { useBanner } from "./useBanner";

// Convert the date to the required format
const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toISOString().slice(0, 19); // This will give you "YYYY-MM-DDTHH:mm:ss"
};

function Home() {
  const { title, description, linkText, link, eventDate } = useBanner();
  const targetDate = formatDate(eventDate);
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
        targetDate={targetDate}
      ></Banner>

      {/* add details here */}
    </>
  );
}

export default Home;
