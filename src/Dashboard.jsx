import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useBanner, supabase } from "./useBanner";
import Datepicker from "react-tailwindcss-datepicker";

function Dashboard() {
  const { isEnabled, title, description, linkText, link, eventDate } = useBanner();
  console.log(isEnabled);

  const [isEnabledValue, setIsEnabledValue] = useState(isEnabled);
  const [titleValue, setTitleValue] = useState(title);
  const [descriptionValue, setDescriptionValue] = useState(description);
  const [linkTextValue, setLinkTextValue] = useState(linkText);
  const [linkValue, setLinkValue] = useState(link);

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [error, setError] = useState(false);

  const [date, setDate] = useState({
    startDate: eventDate,
    endDate: null,
  });

  const handleDateChange = (newDate) => {
    newDate = newDate.startDate;
    console.log("newDate", newDate);
    setDate({
      startDate: newDate,
      endDate: null,
    });
  };

  useEffect(() => {
    if (isEnabled) setIsEnabledValue(isEnabled);
    if (title) setTitleValue(title);
    if (description) setDescriptionValue(description);
    if (linkText) setLinkTextValue(linkText);
    if (link) setLinkValue(link);
    if (eventDate) setDate({
      startDate: eventDate,
      endDate: null,
    });
  }, [title, description, linkText, link, isEnabled, eventDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      isEnabledValue,
      titleValue,
      descriptionValue,
      linkTextValue,
      linkValue,
      date.startDate
    );

    const formData = {
      title: titleValue,
      description: descriptionValue,
      link_text: linkTextValue,
      link: linkValue,
      is_active: isEnabledValue,
      event_date: date.startDate,
    };

    try {
      const { data, error } = await supabase
        .from("banners")
        .update(formData)
        .eq("id", 1);

      console.log(data);
      if (error) {
        setError(true);
        throw error;
      } else {
        setShowSuccessAlert(true);
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="p-6">
      {error && <ErrorAlert error={error} />}
      {showSuccessAlert && <Alert />}
      <Link to="/">
        <div className="bg-pink-100 rounded-xl text-gray-900 max-w-60 px-6 m-6 cursor-pointer hover:bg-pink-300 text-center">
          Home
        </div>
      </Link>

      <form className="mx-auto" onSubmit={handleSubmit}>
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
        <Datepicker
          primaryColor="yellow"
          asSingle={true}
          value={date}
          placeholder={date.startDate}
          onChange={handleDateChange}
        />
        <div className="mt-4 mb-5">
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

function Alert() {
  return (
    <div
      id="alert-3"
      className="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
      role="alert"
    >
      <svg
        className="flex-shrink-0 w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="sr-only">Info</span>
      <div className="ms-3 text-sm font-medium">
        Banner details updated successfully.
      </div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
        data-dismiss-target="#alert-3"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
}

ErrorAlert.propTypes = {
  error: PropTypes.string,
};

function ErrorAlert({ error }) {
  return (
    <div
      id="alert-3"
      className="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
      role="alert"
    >
      <svg
        className="flex-shrink-0 w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="sr-only">Info</span>
      <div className="ms-3 text-sm font-medium">{error}</div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
        data-dismiss-target="#alert-3"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
}
