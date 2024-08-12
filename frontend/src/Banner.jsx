import PropTypes from "prop-types";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Countdown from "./Countdown";

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  link: PropTypes.string.isRequired,
  targetDate: PropTypes.string.isRequired,
};

export default function Banner({ title, description, linkText, link, targetDate }) {
  // Example future date (adjust as needed)
  // const targetDate = "2024-08-31T23:59:59";

  return (
    <div className="relative isolate flex items-center gap-x-6 rounded-lg overflow-hidden bg-gray-50 px-6 pt-7 pb-5 sm:px-3.5 sm:before:flex-1">
      <div className="absolute top-2 right-2 flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="h-5 w-5 text-gray-900" />
        </button>
      </div>
      <Countdown className="text-gray-900" targetDate={targetDate} />
      <div
        aria-hidden="true"
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30" />
      </div>

      <div
        aria-hidden="true"
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30" />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900">
          <strong className="font-semibold">{title}</strong>
          {description ? (
            <>
              <DotSVG />
              {description}
            </>
          ) : null}
        </p>
        {linkText && (
          <a
            href={link}
            className="flex-none rounded-full bg-gray-900 mt-2 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            {linkText} <span aria-hidden="true">&rarr;</span>
          </a>
        )}
      </div>
    </div>
  );
}

function DotSVG() {
  return (
    <svg
      viewBox="0 0 2 2"
      aria-hidden="true"
      className="mx-2 inline h-0.5 w-0.5 fill-current"
    >
      <circle r={1} cx={1} cy={1} />
    </svg>
  );
}
