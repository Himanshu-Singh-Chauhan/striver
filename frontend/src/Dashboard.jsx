import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useBanner } from "./useBanner";

function Dashboard() {
  const { isEnabled, title, description, linkText, link } = useBanner();
  console.log(isEnabled);

  const [isEnabledValue, setIsEnabledValue] = useState(isEnabled);
  const [titleValue, setTitleValue] = useState(title);
  const [descriptionValue, setDescriptionValue] = useState(description);
  const [linkTextValue, setLinkTextValue] = useState(linkText);
  const [linkValue, setLinkValue] = useState(link);

  useEffect(() => {
    if (isEnabled) setIsEnabledValue(isEnabled);
    if (title) setTitleValue(title);
    if (description) setDescriptionValue(description);
    if (linkText) setLinkTextValue(linkText);
    if (link) setLinkValue(link);
  }, [title, description, linkText, link, isEnabled]);

  return (
    <div className="p-6">
      <Link to="/">
        <div className="bg-pink-100 rounded-xl text-gray-900 max-w-60 px-6 m-6 cursor-pointer hover:bg-pink-300 text-center">
          Home
        </div>
      </Link>

      <form className="mx-auto">
        <div className="flex gap-10 mb-5">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save Changes
          </button>
        </div>

        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="enable"
              type="checkbox"
              checked={isEnabledValue}
              onChange={(e) => setIsEnabledValue(e.target.checked)}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="enable"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Enable Banner
          </label>
        </div>
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Banner Title
          </label>
          <input
            type="title"
            id="title"
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Banner Description
          </label>
          <textarea
            id="description"
            rows="12"
            value={descriptionValue}
            onChange={(e) => setDescriptionValue(e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add you description here..."
          ></textarea>
        </div>

        <div className="mb-5">
          <label
            htmlFor="banner-link"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Banner Link
          </label>
          <input
            type="text"
            value={linkValue}
            onChange={(e) => setLinkValue(e.target.value)}
            id="banner-link"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="banner-link-text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Banner Link Text (to display on button)
          </label>
          <input
            type="text"
            value={linkTextValue}
            onChange={(e) => setLinkTextValue(e.target.value)}
            id="banner-link-text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
      </form>
    </div>
  );
}

export default Dashboard;
