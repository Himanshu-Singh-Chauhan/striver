import { Link } from "react-router-dom";
import Banner from "./Banner";
import { useBanner } from "./useBanner";
import { ErrorAlert } from "./Dashboard";

// Convert the date to the required format
const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toISOString().slice(0, 19); // This will give you "YYYY-MM-DDTHH:mm:ss"
};

function Home() {
  const { title, description, linkText, link, eventDate, isEnabled } =
    useBanner();
  const targetDate = formatDate(eventDate);
  // const title = "TUF compitetion 2024";
  // const description = 'This is long description Join us in Denver from June 7 – 9 to see what’s coming next. This is long description Join us in Denver from June 7 – 9 to see what’s coming next. This is long description Join us in Denver from June 7 – 9 to see what’s coming next. This is long description Join us in Denver from June 7 – 9 to see what’s coming next. This is long description Join us in Denver from June 7 – 9 to see what’s coming next.';
  // const linkText = "Register now";
  // const link = "https://takeuforward.org/about-us";

  const info =
    "NOTE - Sometimes Supabase pauses or shutdowns the database if there is no activity for a while. So, if you are not seeing the data, you can ping me on my contacts in my resume to resume the supabase service.";

  return (
    <>
      <Link to="/dashboard">
        <div className="bg-pink-100 rounded-xl text-gray-900 max-w-60 m-6 cursor-pointer hover:bg-pink-300 text-center">
          dashboard
        </div>
      </Link>
      {isEnabled ? (
        <Banner
          title={title}
          description={description}
          linkText={linkText}
          link={link}
          targetDate={targetDate}
        ></Banner>
      ) : (
        <ErrorAlert error="Banner is disabled, please enable it from the dashboard" />
      )}

      <div className="my-10"></div>

      <ErrorAlert error={info} />
      {/* add details here */}
    </>
  );
}

export default Home;
